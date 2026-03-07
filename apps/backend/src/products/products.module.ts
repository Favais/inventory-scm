import { Module } from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { ProductsController } from './products.controller.js';
import { PrismaModule } from '../prisma/prisma.module.js';
import { CategoriesController } from './categories.controller.js';
import { CategoriesService } from './categories.service.js';

@Module({
  imports: [PrismaModule],
  providers: [ProductsService, CategoriesService],
  controllers: [ProductsController, CategoriesController],
})
export class ProductsModule {}
