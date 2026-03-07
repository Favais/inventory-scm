import {
  Injectable,
  NotFoundException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { CreateCategoryDto, UpdateCategoryDto } from './dto/category.dto.js';
import { Category } from '@prisma/client';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  // Create category
  async create(createCategoryDto: CreateCategoryDto) {
    // Check if name already exists
    const existing = await this.prisma.category.findUnique({
      where: { name: CreateCategoryDto.name },
    });

    if (existing) {
      throw new ConflictException('Category with this name already exists');
    }

    // Validate parent category if provided
    if (createCategoryDto.parentId) {
      const parent = await this.prisma.category.findUnique({
        where: { id: createCategoryDto.parentId },
      });

      if (!parent) {
        throw new NotFoundException('Parent category not found');
      }
    }

    // Create category
    const category = await this.prisma.category.create({
      data: {
        ...createCategoryDto,
      },
      include: {
        parent: true,
      },
    });

    return category;
  }

  // Find all categories (hierarchical structure)
  async findAll() {
    const categories = await this.prisma.category.findMany({
      include: {
        parent: true,
        children: true,
        _count: {
          select: {
            products: true,
          },
        },
      },
      orderBy: {
        name: 'asc',
      },
    });

    return categories;
  }

  // Get category tree (organized hierarchy)
  async getTree() {
    const allCategories = await this.findAll();

    // Build tree structure
    const tree = allCategories
      .filter((cat) => !cat.parentId)
      .map((parent) => ({
        ...parent,
        children: this.buildChildren(parent.id, allCategories),
      }));

    return tree;
  }

  private buildChildren(parentId: string, allCategories: Category[]): any[] {
    return allCategories
      .filter((cat) => cat.parentId === parentId)
      .map((child) => ({
        ...child,
        children: this.buildChildren(child.id, allCategories),
      }));
  }

  // Find one category
  async findOne(id: string) {
    const category = await this.prisma.category.findUnique({
      where: { id },
      include: {
        parent: true,
        children: true,
        products: {
          select: {
            id: true,
            name: true,
            sku: true,
          },
        },
        _count: {
          select: {
            products: true,
          },
        },
      },
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    return category;
  }

  // Update category
  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const existing = await this.prisma.category.findUnique({
      where: { id },
    });

    if (!existing) {
      throw new NotFoundException('Category not found');
    }

    // Check name uniqueness if being updated
    if (updateCategoryDto.name && updateCategoryDto.name !== existing.name) {
      const duplicate = await this.prisma.category.findUnique({
        where: { name: updateCategoryDto.name },
      });

      if (duplicate) {
        throw new ConflictException('Category with this name already exists');
      }
    }

    // Prevent circular parent relationship
    if (updateCategoryDto.parentId) {
      if (updateCategoryDto.parentId === id) {
        throw new BadRequestException('Category cannot be its own parent');
      }

      // Check if new parent is a descendant
      const isDescendant = await this.isDescendant(
        id,
        updateCategoryDto.parentId,
      );

      if (isDescendant) {
        throw new BadRequestException(
          'Cannot set a descendant as parent (circular reference)',
        );
      }
    }

    // Update category
    const category = await this.prisma.category.update({
      where: { id },
      data: updateCategoryDto,
      include: {
        parent: true,
        children: true,
      },
    });

    return category;
  }

  // Delete category
  async remove(id: string) {
    const category = await this.prisma.category.findUnique({
      where: { id },
      include: {
        products: true,
        children: true,
      },
    });

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    if (category.products.length > 0) {
      throw new BadRequestException(
        'Cannot delete category with products. Move or delete products first.',
      );
    }

    if (category.children.length > 0) {
      throw new BadRequestException(
        'Cannot delete category with subcategories. Delete subcategories first.',
      );
    }

    await this.prisma.category.delete({
      where: { id },
    });

    return { message: 'Category deleted successfully' };
  }

  // Check if a category is a descendant of another
  private async isDescendant(
    ancestorId: string,
    descendantId: string,
  ): Promise<boolean> {
    const descendant = await this.prisma.category.findUnique({
      where: { id: descendantId },
    });

    if (!descendant || !descendant.parentId) {
      return false;
    }

    if (descendant.parentId === ancestorId) {
      return true;
    }

    return this.isDescendant(ancestorId, descendant.parentId);
  }
}
