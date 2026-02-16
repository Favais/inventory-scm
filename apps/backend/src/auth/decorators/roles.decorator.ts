import { SetMetadata } from '@nestjs/common';
import { UserRole } from 'src/generated/prisma/enums.js';

export const ROLES_KEY = 'roles';

/**
 * Restrict endpoint to specific roles
 * @example @Roles(UserRole.ADMIN, UserRole.MANAGER)
 */
export const Roles = (...roles: UserRole[]) => SetMetadata(ROLES_KEY, roles);
