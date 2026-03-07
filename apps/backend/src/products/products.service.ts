import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  CreateProductDto,
  SearchProductsDto,
  UpdateProductDto,
} from './dto/product.dto.js';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  private async generateSKU(): Promise<string> {
    const prefix = 'PRD';
    const timestamp = Date.now().toString().slice(-8);
    const random = Math.floor(Math.random() * 1000)
      .toString()
      .padStart(3, '0');

    let sku = `${prefix}-${timestamp}-${random}`;
    let attempts = 0;

    // Ensure uniqueness
    while (attempts < 10) {
      const existing = await this.prisma.product.findUnique({
        where: { sku },
      });

      if (!existing) {
        return sku;
      }

      // Generate new SKU if collision
      const newRandom = Math.floor(Math.random() * 1000)
        .toString()
        .padStart(3, '0');
      sku = `${prefix}-${timestamp}-${newRandom}`;
      attempts++;
    }

    throw new BadRequestException('Failed to generate unique SKU');
  }

  private async resolveCategoryId(categoryId?: string) {
    // try provided category
    if (categoryId) {
      const category = await this.prisma.category.findUnique({
        where: { id: categoryId },
        select: { id: true },
      });

      if (category) return category.id;
    }

    // fallback
    const uncategorized = await this.prisma.category.findUnique({
      where: { name: 'Uncategorized' },
      select: { id: true },
    });

    if (!uncategorized) {
      throw new Error('Uncategorized category missing');
    }

    return uncategorized.id;
  }
  //    Create product
  async create(createProductDto: CreateProductDto, userId: string) {
    // Generate SKU if not provided
    const sku = createProductDto.sku || (await this.generateSKU());

    // Check SKU uniqueness
    const existingSku = await this.prisma.product.findUnique({
      where: { sku },
    });

    if (existingSku) {
      throw new ConflictException('Product with this SKU already exists');
    }

    // Check barcode uniqueness if provided
    if (createProductDto.barcode) {
      const existingBarcode = await this.prisma.product.findUnique({
        where: { barcode: createProductDto.barcode },
      });

      if (existingBarcode) {
        throw new ConflictException('Product with this barcode already exists');
      }
    }

    // resolve category
    const categoryId = await this.resolveCategoryId(
      createProductDto.categoryId,
    );

    // Create product
    const product = await this.prisma.product.create({
      data: {
        ...createProductDto,
        categoryId,
        sku,
        reorderPoint: createProductDto.reorderPoint || 0,
        reorderQuantity: createProductDto.reorderQuantity || 0,
        createdById: userId,
      },
      include: {
        category: true,
        createdBy: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
          },
        },
      },
    });

    return product;
  }

  //   Find all products with search and pagination
  async findAll(searchDto: SearchProductsDto) {
    const page = searchDto.page || 1;
    const limit = searchDto.limit || 10;
    const skip = (page - 1) * limit;

    // Build where clause
    const where: Prisma.ProductWhereInput = {};

    if (searchDto.search) {
      where.OR = [
        { name: { contains: searchDto.search, mode: 'insensitive' } },
        { sku: { contains: searchDto.search, mode: 'insensitive' } },
        { barcode: { contains: searchDto.search, mode: 'insensitive' } },
      ];
    }
    if (searchDto.categoryId) {
      where.categoryId = searchDto.categoryId;
    }

    if (searchDto.isActive !== undefined) {
      where.isActive = searchDto.isActive;
    }

    const [products, total] = await Promise.all([
      this.prisma.product.findMany({
        where,
        include: {
          category: true,
          createdBy: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
            },
          },
          updatedBy: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
            },
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip,
        take: limit,
      }),
      this.prisma.product.count({ where }),
    ]);

    return {
      products,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
  // Find one product by ID
  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: {
        category: true,
        createdBy: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
          },
        },
        updatedBy: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
          },
        },
      },
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  //   Update product
  async update(id: string, updateProductDto: UpdateProductDto, userId: string) {
    // Check if product exists
    const existingProduct = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!existingProduct) {
      throw new NotFoundException('Product not found');
    }

    // Check barcode uniqueness if being updated
    if (
      updateProductDto.barcode &&
      updateProductDto.barcode !== existingProduct.barcode
    ) {
      const existingBarcode = await this.prisma.product.findUnique({
        where: { barcode: updateProductDto.barcode },
      });

      if (existingBarcode) {
        throw new ConflictException('Product with this barcode already exists');
      }
    }

    // Validate category if being updated
    if (updateProductDto.categoryId) {
      const category = await this.prisma.category.findUnique({
        where: { id: updateProductDto.categoryId },
      });

      if (!category) {
        throw new NotFoundException('Category not found');
      }
    }

    // Update product
    const product = await this.prisma.product.update({
      where: { id },
      data: {
        ...updateProductDto,
        updatedById: userId,
      },
      include: {
        category: true,
        createdBy: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
          },
        },
        updatedBy: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    return product;
  }

  /**
   * Delete product (soft delete by setting isActive to false)
   */
  async remove(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    // Soft delete
    await this.prisma.product.update({
      where: { id },
      data: { isActive: false },
    });

    return { message: 'Product deleted successfully' };
  }

  /**
   * Check if SKU is available
   */
  async checkSkuAvailability(sku: string): Promise<{ available: boolean }> {
    const existing = await this.prisma.product.findUnique({
      where: { sku },
    });

    return { available: !existing };
  }

  /**
   * Check if barcode is available
   */
  async checkBarcodeAvailability(
    barcode: string,
  ): Promise<{ available: boolean }> {
    const existing = await this.prisma.product.findUnique({
      where: { barcode },
    });

    return { available: !existing };
  }
}
