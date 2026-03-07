import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service.js';
import { Roles } from '../auth/decorators/roles.decorator.js';
import { UserRole } from '@prisma/client';
import {
  CreateProductDto,
  SearchProductsDto,
  UpdateProductDto,
} from './dto/product.dto.js';
import { CurrentUser } from '../auth/decorators/current-user.decorator.js';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  async create(
    @Body() createProductDto: CreateProductDto,
    @CurrentUser() user: { id: string },
  ) {
    return this.productsService.create(createProductDto, user.id);
  }

  @Get()
  @Roles(UserRole.ADMIN, UserRole.MANAGER, UserRole.CLERK, UserRole.VIEWER)
  async findAll(@Query() searchDto: SearchProductsDto) {
    return this.productsService.findAll(searchDto);
  }

  @Get('check-sku/:sku')
  @Roles(UserRole.ADMIN, UserRole.MANAGER, UserRole.CLERK)
  async checkSkuAvailability(@Param('sku') sku: string) {
    return this.productsService.checkSkuAvailability(sku);
  }

  @Get('check-barcode/:barcode')
  @Roles(UserRole.ADMIN, UserRole.MANAGER, UserRole.CLERK)
  async checkBarcodeAvailability(@Param('barcode') barcode: string) {
    return this.productsService.checkBarcodeAvailability(barcode);
  }

  @Get(':id')
  @Roles(UserRole.ADMIN, UserRole.MANAGER, UserRole.CLERK, UserRole.VIEWER)
  async findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Put(':id')
  @Roles(UserRole.ADMIN, UserRole.MANAGER, UserRole.CLERK)
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
    @CurrentUser() user: { id: string },
  ) {
    return this.productsService.update(id, updateProductDto, user.id);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN, UserRole.MANAGER)
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
