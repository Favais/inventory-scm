import {
  IsString,
  IsOptional,
  IsNumber,
  IsBoolean,
  IsUUID,
  MinLength,
  Min,
  Matches,
  IsEnum,
} from 'class-validator';

export enum UnitOfMeasure {
  PIECES = 'pieces',
  KG = 'kg',
  GRAMS = 'grams',
  LITERS = 'liters',
  MILLILITERS = 'milliliters',
  METERS = 'meters',
  CENTIMETERS = 'centimeters',
  BOXES = 'boxes',
  PACKS = 'packs',
  DOZEN = 'dozen',
}

export class CreateProductDto {
  @IsString()
  @IsOptional()
  @Matches(/^[A-Z0-9-]+$/, {
    message: 'SKU must contain only uppercase letters, numbers, and hyphens',
  })
  sku?: string; // Optional - will auto-generate if not provided

  @IsString()
  @MinLength(2)
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsUUID()
  @IsOptional()
  categoryId?: string;

  @IsEnum(UnitOfMeasure)
  unitOfMeasure: UnitOfMeasure;

  @IsNumber()
  @Min(0)
  @IsOptional()
  reorderPoint?: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  reorderQuantity?: number;

  @IsNumber()
  @Min(0)
  unitPrice: number;

  @IsString()
  @IsOptional()
  @Matches(/^[0-9]{8,13}$/, {
    message: 'Barcode must be 8-13 digits',
  })
  barcode?: string;

  @IsString()
  @IsOptional()
  imageUrl?: string;
}

export class UpdateProductDto {
  @IsString()
  @IsOptional()
  @MinLength(2)
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsUUID()
  @IsOptional()
  categoryId?: string;

  @IsEnum(UnitOfMeasure)
  @IsOptional()
  unitOfMeasure?: UnitOfMeasure;

  @IsNumber()
  @Min(0)
  @IsOptional()
  reorderPoint?: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  reorderQuantity?: number;

  @IsNumber()
  @Min(0)
  @IsOptional()
  unitPrice?: number;

  @IsString()
  @IsOptional()
  @Matches(/^[0-9]{8,13}$/, {
    message: 'Barcode must be 8-13 digits',
  })
  barcode?: string;

  @IsString()
  @IsOptional()
  imageUrl?: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}

export class SearchProductsDto {
  @IsString()
  @IsOptional()
  search?: string; // Search by name, SKU, or barcode

  @IsUUID()
  @IsOptional()
  categoryId?: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @IsNumber()
  @IsOptional()
  @Min(1)
  page?: number;

  @IsNumber()
  @IsOptional()
  @Min(1)
  limit?: number;
}
