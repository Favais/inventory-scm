import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { Roles } from '../auth/decorators/roles.decorator.js';
import { UserService } from './user.service.js';
import { UserRole } from '../generated/prisma/enums.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { CurrentUser } from '../auth/decorators/current-user.decorator.js';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @Roles() // No roles means all authenticated users can access
  async findAll(@Param('role') role?: UserRole) {
    return this.userService.findAll(role);
  }

  @Get(':id')
  @Roles() // No roles means all authenticated users can access
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id/role')
  @Roles(UserRole.ADMIN, UserRole.MANAGER) // Only ADMIN and MANAGER can update users
  update(
    @Param('id') id: string,
    @Body('role') newRole: UserRole,
    @CurrentUser() user: { id: string; role: UserRole },
  ) {
    return this.userService.changeRole(id, newRole, user.id);
  }

  @Get('roles/capabilities')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  getRoleCapabilities(@Query('role') role: UserRole) {
    return this.userService.getRoleCapabilities(role);
  }

  @Delete(':id')
  remove(
    @Param('id') id: string,
    @CurrentUser() user: { id: string; role: UserRole },
  ) {
    return this.userService.remove(id, user.id);
  }
}
