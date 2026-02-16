import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserRole } from 'src/generated/prisma/enums.js';
import { PrismaService } from 'src/prisma/prisma.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';

@Injectable()
export class UserService {
  private readonly ROLE_HIERARCHY = {
    [UserRole.ADMIN]: 4,
    [UserRole.MANAGER]: 3,
    [UserRole.CLERK]: 2,
    [UserRole.VIEWER]: 1,
  };
  constructor(private prisma: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll(role?: UserRole) {
    return this.prisma.user.findMany({
      where: role ? { role } : undefined,
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true,
        lastLogin: true,
        createdAt: true,
        createdBy: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            role: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true,
        lastLogin: true,
        createdAt: true,
        updatedAt: true,
        createdBy: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            role: true,
          },
        },
      },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
  // update user details (except password) and track who made the update

  async updateUser(
    id: string,
    updateUserDto: UpdateUserDto,
    updatedByUserId: string,
  ) {
    const updatedByUser = await this.prisma.user.findUnique({
      where: { id: updatedByUserId },
    });

    if (!updatedByUser) {
      throw new NotFoundException('Updater user not found');
    }

    const targetUser = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!targetUser) {
      throw new NotFoundException('User not found');
    }

    // Prevent self-role-change (except ADMIN)
    if (
      id === updatedByUserId &&
      updateUserDto.role &&
      updatedByUser.role !== UserRole.ADMIN
    ) {
      throw new ForbiddenException('You cannot change your own role');
    }

    // Validate role change
    if (updateUserDto.role) {
      this.validateRoleChange(
        updatedByUser.role,
        targetUser.role,
        updateUserDto.role,
      );
    }

    // Update user
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true,
        updatedAt: true,
      },
    });
  }

  async remove(id: string, deletedByUserId: string) {
    const deletedByUser = await this.prisma.user.findUnique({
      where: { id: deletedByUserId },
    });

    if (!deletedByUser) {
      throw new NotFoundException('Deleter user not found');
    }

    const targetUser = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!targetUser) {
      throw new NotFoundException('User not found');
    }

    // Prevent self-deletion
    if (id === deletedByUserId) {
      throw new ForbiddenException('You cannot delete your own account');
    }

    // Validate deletion
    this.validateRoleDeletion(deletedByUser.role, targetUser.role);

    // Delete user
    await this.prisma.user.delete({ where: { id } });

    return { message: 'User deleted successfully' };
  }

  private validateRoleChange(
    changerRole: UserRole,
    currentRole: UserRole,
    newRole: UserRole,
  ) {
    const changerLevel = this.ROLE_HIERARCHY[changerRole];
    const currentLevel = this.ROLE_HIERARCHY[currentRole];
    const newLevel = this.ROLE_HIERARCHY[newRole];

    // Can only change roles at same level or below
    if (currentLevel > changerLevel || newLevel > changerLevel) {
      throw new ForbiddenException(
        'Insufficient permissions to change this role',
      );
    }

    // Only ADMIN can assign ADMIN role
    if (newRole === UserRole.ADMIN && changerRole !== UserRole.ADMIN) {
      throw new ForbiddenException('Only admins can assign admin role');
    }

    // Only ADMIN can change from ADMIN role
    if (currentRole === UserRole.ADMIN && changerRole !== UserRole.ADMIN) {
      throw new ForbiddenException('Only admins can change admin users');
    }
  }

  private validateRoleDeletion(deleterRole: UserRole, targetRole: UserRole) {
    const deleterLevel = this.ROLE_HIERARCHY[deleterRole];
    const targetLevel = this.ROLE_HIERARCHY[targetRole];

    // Can only delete users at same level or below
    if (targetLevel > deleterLevel) {
      throw new ForbiddenException('You cannot delete this user');
    }

    // Only ADMIN can delete ADMIN
    if (targetRole === UserRole.ADMIN && deleterRole !== UserRole.ADMIN) {
      throw new ForbiddenException('Only admins can delete admin users');
    }
  }
}
