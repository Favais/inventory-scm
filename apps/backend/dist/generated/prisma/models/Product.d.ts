import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ProductModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductPayload>;
export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
};
export type ProductAvgAggregateOutputType = {
    reorderPoint: number | null;
    reorderQuantity: number | null;
    unitPrice: runtime.Decimal | null;
};
export type ProductSumAggregateOutputType = {
    reorderPoint: number | null;
    reorderQuantity: number | null;
    unitPrice: runtime.Decimal | null;
};
export type ProductMinAggregateOutputType = {
    id: string | null;
    sku: string | null;
    name: string | null;
    description: string | null;
    categoryId: string | null;
    unitOfMeasure: string | null;
    reorderPoint: number | null;
    reorderQuantity: number | null;
    unitPrice: runtime.Decimal | null;
    barcode: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProductMaxAggregateOutputType = {
    id: string | null;
    sku: string | null;
    name: string | null;
    description: string | null;
    categoryId: string | null;
    unitOfMeasure: string | null;
    reorderPoint: number | null;
    reorderQuantity: number | null;
    unitPrice: runtime.Decimal | null;
    barcode: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProductCountAggregateOutputType = {
    id: number;
    sku: number;
    name: number;
    description: number;
    categoryId: number;
    unitOfMeasure: number;
    reorderPoint: number;
    reorderQuantity: number;
    unitPrice: number;
    barcode: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ProductAvgAggregateInputType = {
    reorderPoint?: true;
    reorderQuantity?: true;
    unitPrice?: true;
};
export type ProductSumAggregateInputType = {
    reorderPoint?: true;
    reorderQuantity?: true;
    unitPrice?: true;
};
export type ProductMinAggregateInputType = {
    id?: true;
    sku?: true;
    name?: true;
    description?: true;
    categoryId?: true;
    unitOfMeasure?: true;
    reorderPoint?: true;
    reorderQuantity?: true;
    unitPrice?: true;
    barcode?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProductMaxAggregateInputType = {
    id?: true;
    sku?: true;
    name?: true;
    description?: true;
    categoryId?: true;
    unitOfMeasure?: true;
    reorderPoint?: true;
    reorderQuantity?: true;
    unitPrice?: true;
    barcode?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProductCountAggregateInputType = {
    id?: true;
    sku?: true;
    name?: true;
    description?: true;
    categoryId?: true;
    unitOfMeasure?: true;
    reorderPoint?: true;
    reorderQuantity?: true;
    unitPrice?: true;
    barcode?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProductAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductCountAggregateInputType;
    _avg?: ProductAvgAggregateInputType;
    _sum?: ProductSumAggregateInputType;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
};
export type GetProductAggregateType<T extends ProductAggregateArgs> = {
    [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProduct[P]> : Prisma.GetScalarType<T[P], AggregateProduct[P]>;
};
export type ProductGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithAggregationInput | Prisma.ProductOrderByWithAggregationInput[];
    by: Prisma.ProductScalarFieldEnum[] | Prisma.ProductScalarFieldEnum;
    having?: Prisma.ProductScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductCountAggregateInputType | true;
    _avg?: ProductAvgAggregateInputType;
    _sum?: ProductSumAggregateInputType;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
};
export type ProductGroupByOutputType = {
    id: string;
    sku: string;
    name: string;
    description: string | null;
    categoryId: string;
    unitOfMeasure: string;
    reorderPoint: number;
    reorderQuantity: number;
    unitPrice: runtime.Decimal;
    barcode: string | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
};
type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductGroupByOutputType[P]>;
}>>;
export type ProductWhereInput = {
    AND?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    OR?: Prisma.ProductWhereInput[];
    NOT?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    id?: Prisma.StringFilter<"Product"> | string;
    sku?: Prisma.StringFilter<"Product"> | string;
    name?: Prisma.StringFilter<"Product"> | string;
    description?: Prisma.StringNullableFilter<"Product"> | string | null;
    categoryId?: Prisma.StringFilter<"Product"> | string;
    unitOfMeasure?: Prisma.StringFilter<"Product"> | string;
    reorderPoint?: Prisma.IntFilter<"Product"> | number;
    reorderQuantity?: Prisma.IntFilter<"Product"> | number;
    unitPrice?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    barcode?: Prisma.StringNullableFilter<"Product"> | string | null;
    isActive?: Prisma.BoolFilter<"Product"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.CategoryWhereInput>;
    inventory?: Prisma.InventoryListRelationFilter;
    transactions?: Prisma.StockTransactionListRelationFilter;
    purchaseOrderItems?: Prisma.PurchaseOrderItemListRelationFilter;
};
export type ProductOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    unitOfMeasure?: Prisma.SortOrder;
    reorderPoint?: Prisma.SortOrder;
    reorderQuantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    barcode?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    category?: Prisma.CategoryOrderByWithRelationInput;
    inventory?: Prisma.InventoryOrderByRelationAggregateInput;
    transactions?: Prisma.StockTransactionOrderByRelationAggregateInput;
    purchaseOrderItems?: Prisma.PurchaseOrderItemOrderByRelationAggregateInput;
};
export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    sku?: string;
    barcode?: string;
    AND?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    OR?: Prisma.ProductWhereInput[];
    NOT?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    name?: Prisma.StringFilter<"Product"> | string;
    description?: Prisma.StringNullableFilter<"Product"> | string | null;
    categoryId?: Prisma.StringFilter<"Product"> | string;
    unitOfMeasure?: Prisma.StringFilter<"Product"> | string;
    reorderPoint?: Prisma.IntFilter<"Product"> | number;
    reorderQuantity?: Prisma.IntFilter<"Product"> | number;
    unitPrice?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    isActive?: Prisma.BoolFilter<"Product"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    category?: Prisma.XOR<Prisma.CategoryScalarRelationFilter, Prisma.CategoryWhereInput>;
    inventory?: Prisma.InventoryListRelationFilter;
    transactions?: Prisma.StockTransactionListRelationFilter;
    purchaseOrderItems?: Prisma.PurchaseOrderItemListRelationFilter;
}, "id" | "sku" | "barcode">;
export type ProductOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    unitOfMeasure?: Prisma.SortOrder;
    reorderPoint?: Prisma.SortOrder;
    reorderQuantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    barcode?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ProductCountOrderByAggregateInput;
    _avg?: Prisma.ProductAvgOrderByAggregateInput;
    _max?: Prisma.ProductMaxOrderByAggregateInput;
    _min?: Prisma.ProductMinOrderByAggregateInput;
    _sum?: Prisma.ProductSumOrderByAggregateInput;
};
export type ProductScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductScalarWhereWithAggregatesInput | Prisma.ProductScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductScalarWhereWithAggregatesInput | Prisma.ProductScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    sku?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Product"> | string | null;
    categoryId?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    unitOfMeasure?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    reorderPoint?: Prisma.IntWithAggregatesFilter<"Product"> | number;
    reorderQuantity?: Prisma.IntWithAggregatesFilter<"Product"> | number;
    unitPrice?: Prisma.DecimalWithAggregatesFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    barcode?: Prisma.StringNullableWithAggregatesFilter<"Product"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"Product"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Product"> | Date | string;
};
export type ProductCreateInput = {
    id?: string;
    sku: string;
    name: string;
    description?: string | null;
    unitOfMeasure: string;
    reorderPoint: number;
    reorderQuantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    barcode?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category: Prisma.CategoryCreateNestedOneWithoutProductsInput;
    inventory?: Prisma.InventoryCreateNestedManyWithoutProductInput;
    transactions?: Prisma.StockTransactionCreateNestedManyWithoutProductInput;
    purchaseOrderItems?: Prisma.PurchaseOrderItemCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateInput = {
    id?: string;
    sku: string;
    name: string;
    description?: string | null;
    categoryId: string;
    unitOfMeasure: string;
    reorderPoint: number;
    reorderQuantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    barcode?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inventory?: Prisma.InventoryUncheckedCreateNestedManyWithoutProductInput;
    transactions?: Prisma.StockTransactionUncheckedCreateNestedManyWithoutProductInput;
    purchaseOrderItems?: Prisma.PurchaseOrderItemUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unitOfMeasure?: Prisma.StringFieldUpdateOperationsInput | string;
    reorderPoint?: Prisma.IntFieldUpdateOperationsInput | number;
    reorderQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    barcode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.CategoryUpdateOneRequiredWithoutProductsNestedInput;
    inventory?: Prisma.InventoryUpdateManyWithoutProductNestedInput;
    transactions?: Prisma.StockTransactionUpdateManyWithoutProductNestedInput;
    purchaseOrderItems?: Prisma.PurchaseOrderItemUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    unitOfMeasure?: Prisma.StringFieldUpdateOperationsInput | string;
    reorderPoint?: Prisma.IntFieldUpdateOperationsInput | number;
    reorderQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    barcode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: Prisma.InventoryUncheckedUpdateManyWithoutProductNestedInput;
    transactions?: Prisma.StockTransactionUncheckedUpdateManyWithoutProductNestedInput;
    purchaseOrderItems?: Prisma.PurchaseOrderItemUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateManyInput = {
    id?: string;
    sku: string;
    name: string;
    description?: string | null;
    categoryId: string;
    unitOfMeasure: string;
    reorderPoint: number;
    reorderQuantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    barcode?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unitOfMeasure?: Prisma.StringFieldUpdateOperationsInput | string;
    reorderPoint?: Prisma.IntFieldUpdateOperationsInput | number;
    reorderQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    barcode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    unitOfMeasure?: Prisma.StringFieldUpdateOperationsInput | string;
    reorderPoint?: Prisma.IntFieldUpdateOperationsInput | number;
    reorderQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    barcode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductScalarRelationFilter = {
    is?: Prisma.ProductWhereInput;
    isNot?: Prisma.ProductWhereInput;
};
export type ProductCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    unitOfMeasure?: Prisma.SortOrder;
    reorderPoint?: Prisma.SortOrder;
    reorderQuantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    barcode?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductAvgOrderByAggregateInput = {
    reorderPoint?: Prisma.SortOrder;
    reorderQuantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
};
export type ProductMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    unitOfMeasure?: Prisma.SortOrder;
    reorderPoint?: Prisma.SortOrder;
    reorderQuantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    barcode?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sku?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    unitOfMeasure?: Prisma.SortOrder;
    reorderPoint?: Prisma.SortOrder;
    reorderQuantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    barcode?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProductSumOrderByAggregateInput = {
    reorderPoint?: Prisma.SortOrder;
    reorderQuantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
};
export type ProductListRelationFilter = {
    every?: Prisma.ProductWhereInput;
    some?: Prisma.ProductWhereInput;
    none?: Prisma.ProductWhereInput;
};
export type ProductOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProductCreateNestedOneWithoutInventoryInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutInventoryInput, Prisma.ProductUncheckedCreateWithoutInventoryInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutInventoryInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutInventoryInput, Prisma.ProductUncheckedCreateWithoutInventoryInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutInventoryInput;
    upsert?: Prisma.ProductUpsertWithoutInventoryInput;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutInventoryInput, Prisma.ProductUpdateWithoutInventoryInput>, Prisma.ProductUncheckedUpdateWithoutInventoryInput>;
};
export type ProductCreateNestedOneWithoutTransactionsInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutTransactionsInput, Prisma.ProductUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutTransactionsInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutTransactionsInput, Prisma.ProductUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutTransactionsInput;
    upsert?: Prisma.ProductUpsertWithoutTransactionsInput;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutTransactionsInput, Prisma.ProductUpdateWithoutTransactionsInput>, Prisma.ProductUncheckedUpdateWithoutTransactionsInput>;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type ProductCreateNestedOneWithoutPurchaseOrderItemsInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutPurchaseOrderItemsInput, Prisma.ProductUncheckedCreateWithoutPurchaseOrderItemsInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutPurchaseOrderItemsInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneRequiredWithoutPurchaseOrderItemsNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutPurchaseOrderItemsInput, Prisma.ProductUncheckedCreateWithoutPurchaseOrderItemsInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutPurchaseOrderItemsInput;
    upsert?: Prisma.ProductUpsertWithoutPurchaseOrderItemsInput;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutPurchaseOrderItemsInput, Prisma.ProductUpdateWithoutPurchaseOrderItemsInput>, Prisma.ProductUncheckedUpdateWithoutPurchaseOrderItemsInput>;
};
export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutCategoryInput, Prisma.ProductUncheckedCreateWithoutCategoryInput> | Prisma.ProductCreateWithoutCategoryInput[] | Prisma.ProductUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutCategoryInput | Prisma.ProductCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.ProductCreateManyCategoryInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutCategoryInput, Prisma.ProductUncheckedCreateWithoutCategoryInput> | Prisma.ProductCreateWithoutCategoryInput[] | Prisma.ProductUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutCategoryInput | Prisma.ProductCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.ProductCreateManyCategoryInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutCategoryInput, Prisma.ProductUncheckedCreateWithoutCategoryInput> | Prisma.ProductCreateWithoutCategoryInput[] | Prisma.ProductUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutCategoryInput | Prisma.ProductCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutCategoryInput | Prisma.ProductUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.ProductCreateManyCategoryInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutCategoryInput | Prisma.ProductUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutCategoryInput | Prisma.ProductUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutCategoryInput, Prisma.ProductUncheckedCreateWithoutCategoryInput> | Prisma.ProductCreateWithoutCategoryInput[] | Prisma.ProductUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutCategoryInput | Prisma.ProductCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutCategoryInput | Prisma.ProductUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.ProductCreateManyCategoryInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutCategoryInput | Prisma.ProductUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutCategoryInput | Prisma.ProductUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductCreateWithoutInventoryInput = {
    id?: string;
    sku: string;
    name: string;
    description?: string | null;
    unitOfMeasure: string;
    reorderPoint: number;
    reorderQuantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    barcode?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category: Prisma.CategoryCreateNestedOneWithoutProductsInput;
    transactions?: Prisma.StockTransactionCreateNestedManyWithoutProductInput;
    purchaseOrderItems?: Prisma.PurchaseOrderItemCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutInventoryInput = {
    id?: string;
    sku: string;
    name: string;
    description?: string | null;
    categoryId: string;
    unitOfMeasure: string;
    reorderPoint: number;
    reorderQuantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    barcode?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.StockTransactionUncheckedCreateNestedManyWithoutProductInput;
    purchaseOrderItems?: Prisma.PurchaseOrderItemUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutInventoryInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutInventoryInput, Prisma.ProductUncheckedCreateWithoutInventoryInput>;
};
export type ProductUpsertWithoutInventoryInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutInventoryInput, Prisma.ProductUncheckedUpdateWithoutInventoryInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutInventoryInput, Prisma.ProductUncheckedCreateWithoutInventoryInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutInventoryInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutInventoryInput, Prisma.ProductUncheckedUpdateWithoutInventoryInput>;
};
export type ProductUpdateWithoutInventoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unitOfMeasure?: Prisma.StringFieldUpdateOperationsInput | string;
    reorderPoint?: Prisma.IntFieldUpdateOperationsInput | number;
    reorderQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    barcode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.CategoryUpdateOneRequiredWithoutProductsNestedInput;
    transactions?: Prisma.StockTransactionUpdateManyWithoutProductNestedInput;
    purchaseOrderItems?: Prisma.PurchaseOrderItemUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutInventoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    unitOfMeasure?: Prisma.StringFieldUpdateOperationsInput | string;
    reorderPoint?: Prisma.IntFieldUpdateOperationsInput | number;
    reorderQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    barcode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.StockTransactionUncheckedUpdateManyWithoutProductNestedInput;
    purchaseOrderItems?: Prisma.PurchaseOrderItemUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateWithoutTransactionsInput = {
    id?: string;
    sku: string;
    name: string;
    description?: string | null;
    unitOfMeasure: string;
    reorderPoint: number;
    reorderQuantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    barcode?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category: Prisma.CategoryCreateNestedOneWithoutProductsInput;
    inventory?: Prisma.InventoryCreateNestedManyWithoutProductInput;
    purchaseOrderItems?: Prisma.PurchaseOrderItemCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutTransactionsInput = {
    id?: string;
    sku: string;
    name: string;
    description?: string | null;
    categoryId: string;
    unitOfMeasure: string;
    reorderPoint: number;
    reorderQuantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    barcode?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inventory?: Prisma.InventoryUncheckedCreateNestedManyWithoutProductInput;
    purchaseOrderItems?: Prisma.PurchaseOrderItemUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutTransactionsInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutTransactionsInput, Prisma.ProductUncheckedCreateWithoutTransactionsInput>;
};
export type ProductUpsertWithoutTransactionsInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutTransactionsInput, Prisma.ProductUncheckedUpdateWithoutTransactionsInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutTransactionsInput, Prisma.ProductUncheckedCreateWithoutTransactionsInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutTransactionsInput, Prisma.ProductUncheckedUpdateWithoutTransactionsInput>;
};
export type ProductUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unitOfMeasure?: Prisma.StringFieldUpdateOperationsInput | string;
    reorderPoint?: Prisma.IntFieldUpdateOperationsInput | number;
    reorderQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    barcode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.CategoryUpdateOneRequiredWithoutProductsNestedInput;
    inventory?: Prisma.InventoryUpdateManyWithoutProductNestedInput;
    purchaseOrderItems?: Prisma.PurchaseOrderItemUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    unitOfMeasure?: Prisma.StringFieldUpdateOperationsInput | string;
    reorderPoint?: Prisma.IntFieldUpdateOperationsInput | number;
    reorderQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    barcode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: Prisma.InventoryUncheckedUpdateManyWithoutProductNestedInput;
    purchaseOrderItems?: Prisma.PurchaseOrderItemUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateWithoutPurchaseOrderItemsInput = {
    id?: string;
    sku: string;
    name: string;
    description?: string | null;
    unitOfMeasure: string;
    reorderPoint: number;
    reorderQuantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    barcode?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category: Prisma.CategoryCreateNestedOneWithoutProductsInput;
    inventory?: Prisma.InventoryCreateNestedManyWithoutProductInput;
    transactions?: Prisma.StockTransactionCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutPurchaseOrderItemsInput = {
    id?: string;
    sku: string;
    name: string;
    description?: string | null;
    categoryId: string;
    unitOfMeasure: string;
    reorderPoint: number;
    reorderQuantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    barcode?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inventory?: Prisma.InventoryUncheckedCreateNestedManyWithoutProductInput;
    transactions?: Prisma.StockTransactionUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutPurchaseOrderItemsInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutPurchaseOrderItemsInput, Prisma.ProductUncheckedCreateWithoutPurchaseOrderItemsInput>;
};
export type ProductUpsertWithoutPurchaseOrderItemsInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutPurchaseOrderItemsInput, Prisma.ProductUncheckedUpdateWithoutPurchaseOrderItemsInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutPurchaseOrderItemsInput, Prisma.ProductUncheckedCreateWithoutPurchaseOrderItemsInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutPurchaseOrderItemsInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutPurchaseOrderItemsInput, Prisma.ProductUncheckedUpdateWithoutPurchaseOrderItemsInput>;
};
export type ProductUpdateWithoutPurchaseOrderItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unitOfMeasure?: Prisma.StringFieldUpdateOperationsInput | string;
    reorderPoint?: Prisma.IntFieldUpdateOperationsInput | number;
    reorderQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    barcode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.CategoryUpdateOneRequiredWithoutProductsNestedInput;
    inventory?: Prisma.InventoryUpdateManyWithoutProductNestedInput;
    transactions?: Prisma.StockTransactionUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutPurchaseOrderItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.StringFieldUpdateOperationsInput | string;
    unitOfMeasure?: Prisma.StringFieldUpdateOperationsInput | string;
    reorderPoint?: Prisma.IntFieldUpdateOperationsInput | number;
    reorderQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    barcode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: Prisma.InventoryUncheckedUpdateManyWithoutProductNestedInput;
    transactions?: Prisma.StockTransactionUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateWithoutCategoryInput = {
    id?: string;
    sku: string;
    name: string;
    description?: string | null;
    unitOfMeasure: string;
    reorderPoint: number;
    reorderQuantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    barcode?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inventory?: Prisma.InventoryCreateNestedManyWithoutProductInput;
    transactions?: Prisma.StockTransactionCreateNestedManyWithoutProductInput;
    purchaseOrderItems?: Prisma.PurchaseOrderItemCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: string;
    sku: string;
    name: string;
    description?: string | null;
    unitOfMeasure: string;
    reorderPoint: number;
    reorderQuantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    barcode?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inventory?: Prisma.InventoryUncheckedCreateNestedManyWithoutProductInput;
    transactions?: Prisma.StockTransactionUncheckedCreateNestedManyWithoutProductInput;
    purchaseOrderItems?: Prisma.PurchaseOrderItemUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutCategoryInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutCategoryInput, Prisma.ProductUncheckedCreateWithoutCategoryInput>;
};
export type ProductCreateManyCategoryInputEnvelope = {
    data: Prisma.ProductCreateManyCategoryInput | Prisma.ProductCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.ProductWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductUpdateWithoutCategoryInput, Prisma.ProductUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutCategoryInput, Prisma.ProductUncheckedCreateWithoutCategoryInput>;
};
export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.ProductWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutCategoryInput, Prisma.ProductUncheckedUpdateWithoutCategoryInput>;
};
export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.ProductScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyWithoutCategoryInput>;
};
export type ProductScalarWhereInput = {
    AND?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
    OR?: Prisma.ProductScalarWhereInput[];
    NOT?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
    id?: Prisma.StringFilter<"Product"> | string;
    sku?: Prisma.StringFilter<"Product"> | string;
    name?: Prisma.StringFilter<"Product"> | string;
    description?: Prisma.StringNullableFilter<"Product"> | string | null;
    categoryId?: Prisma.StringFilter<"Product"> | string;
    unitOfMeasure?: Prisma.StringFilter<"Product"> | string;
    reorderPoint?: Prisma.IntFilter<"Product"> | number;
    reorderQuantity?: Prisma.IntFilter<"Product"> | number;
    unitPrice?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    barcode?: Prisma.StringNullableFilter<"Product"> | string | null;
    isActive?: Prisma.BoolFilter<"Product"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Product"> | Date | string;
};
export type ProductCreateManyCategoryInput = {
    id?: string;
    sku: string;
    name: string;
    description?: string | null;
    unitOfMeasure: string;
    reorderPoint: number;
    reorderQuantity: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    barcode?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProductUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unitOfMeasure?: Prisma.StringFieldUpdateOperationsInput | string;
    reorderPoint?: Prisma.IntFieldUpdateOperationsInput | number;
    reorderQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    barcode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: Prisma.InventoryUpdateManyWithoutProductNestedInput;
    transactions?: Prisma.StockTransactionUpdateManyWithoutProductNestedInput;
    purchaseOrderItems?: Prisma.PurchaseOrderItemUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unitOfMeasure?: Prisma.StringFieldUpdateOperationsInput | string;
    reorderPoint?: Prisma.IntFieldUpdateOperationsInput | number;
    reorderQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    barcode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: Prisma.InventoryUncheckedUpdateManyWithoutProductNestedInput;
    transactions?: Prisma.StockTransactionUncheckedUpdateManyWithoutProductNestedInput;
    purchaseOrderItems?: Prisma.PurchaseOrderItemUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sku?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unitOfMeasure?: Prisma.StringFieldUpdateOperationsInput | string;
    reorderPoint?: Prisma.IntFieldUpdateOperationsInput | number;
    reorderQuantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    barcode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductCountOutputType = {
    inventory: number;
    transactions: number;
    purchaseOrderItems: number;
};
export type ProductCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory?: boolean | ProductCountOutputTypeCountInventoryArgs;
    transactions?: boolean | ProductCountOutputTypeCountTransactionsArgs;
    purchaseOrderItems?: boolean | ProductCountOutputTypeCountPurchaseOrderItemsArgs;
};
export type ProductCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductCountOutputTypeSelect<ExtArgs> | null;
};
export type ProductCountOutputTypeCountInventoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InventoryWhereInput;
};
export type ProductCountOutputTypeCountTransactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StockTransactionWhereInput;
};
export type ProductCountOutputTypeCountPurchaseOrderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseOrderItemWhereInput;
};
export type ProductSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sku?: boolean;
    name?: boolean;
    description?: boolean;
    categoryId?: boolean;
    unitOfMeasure?: boolean;
    reorderPoint?: boolean;
    reorderQuantity?: boolean;
    unitPrice?: boolean;
    barcode?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    inventory?: boolean | Prisma.Product$inventoryArgs<ExtArgs>;
    transactions?: boolean | Prisma.Product$transactionsArgs<ExtArgs>;
    purchaseOrderItems?: boolean | Prisma.Product$purchaseOrderItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sku?: boolean;
    name?: boolean;
    description?: boolean;
    categoryId?: boolean;
    unitOfMeasure?: boolean;
    reorderPoint?: boolean;
    reorderQuantity?: boolean;
    unitPrice?: boolean;
    barcode?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sku?: boolean;
    name?: boolean;
    description?: boolean;
    categoryId?: boolean;
    unitOfMeasure?: boolean;
    reorderPoint?: boolean;
    reorderQuantity?: boolean;
    unitPrice?: boolean;
    barcode?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectScalar = {
    id?: boolean;
    sku?: boolean;
    name?: boolean;
    description?: boolean;
    categoryId?: boolean;
    unitOfMeasure?: boolean;
    reorderPoint?: boolean;
    reorderQuantity?: boolean;
    unitPrice?: boolean;
    barcode?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ProductOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "sku" | "name" | "description" | "categoryId" | "unitOfMeasure" | "reorderPoint" | "reorderQuantity" | "unitPrice" | "barcode" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>;
export type ProductInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
    inventory?: boolean | Prisma.Product$inventoryArgs<ExtArgs>;
    transactions?: boolean | Prisma.Product$transactionsArgs<ExtArgs>;
    purchaseOrderItems?: boolean | Prisma.Product$purchaseOrderItemsArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProductIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
};
export type ProductIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.CategoryDefaultArgs<ExtArgs>;
};
export type $ProductPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Product";
    objects: {
        category: Prisma.$CategoryPayload<ExtArgs>;
        inventory: Prisma.$InventoryPayload<ExtArgs>[];
        transactions: Prisma.$StockTransactionPayload<ExtArgs>[];
        purchaseOrderItems: Prisma.$PurchaseOrderItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        sku: string;
        name: string;
        description: string | null;
        categoryId: string;
        unitOfMeasure: string;
        reorderPoint: number;
        reorderQuantity: number;
        unitPrice: runtime.Decimal;
        barcode: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["product"]>;
    composites: {};
};
export type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductPayload, S>;
export type ProductCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductCountAggregateInputType | true;
};
export interface ProductDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Product'];
        meta: {
            name: 'Product';
        };
    };
    findUnique<T extends ProductFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProductFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProductFindManyArgs>(args?: Prisma.SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProductCreateArgs>(args: Prisma.SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProductCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProductDeleteArgs>(args: Prisma.SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProductUpdateArgs>(args: Prisma.SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProductDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProductUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProductUpsertArgs>(args: Prisma.SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProductCountArgs>(args?: Prisma.Subset<T, ProductCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductCountAggregateOutputType> : number>;
    aggregate<T extends ProductAggregateArgs>(args: Prisma.Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>;
    groupBy<T extends ProductGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProductFieldRefs;
}
export interface Prisma__ProductClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    category<T extends Prisma.CategoryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategoryDefaultArgs<ExtArgs>>): Prisma.Prisma__CategoryClient<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    inventory<T extends Prisma.Product$inventoryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    transactions<T extends Prisma.Product$transactionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StockTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    purchaseOrderItems<T extends Prisma.Product$purchaseOrderItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$purchaseOrderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProductFieldRefs {
    readonly id: Prisma.FieldRef<"Product", 'String'>;
    readonly sku: Prisma.FieldRef<"Product", 'String'>;
    readonly name: Prisma.FieldRef<"Product", 'String'>;
    readonly description: Prisma.FieldRef<"Product", 'String'>;
    readonly categoryId: Prisma.FieldRef<"Product", 'String'>;
    readonly unitOfMeasure: Prisma.FieldRef<"Product", 'String'>;
    readonly reorderPoint: Prisma.FieldRef<"Product", 'Int'>;
    readonly reorderQuantity: Prisma.FieldRef<"Product", 'Int'>;
    readonly unitPrice: Prisma.FieldRef<"Product", 'Decimal'>;
    readonly barcode: Prisma.FieldRef<"Product", 'String'>;
    readonly isActive: Prisma.FieldRef<"Product", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Product", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Product", 'DateTime'>;
}
export type ProductFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type ProductFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type ProductFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
export type ProductCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductCreateInput, Prisma.ProductUncheckedCreateInput>;
};
export type ProductCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProductCreateManyInput | Prisma.ProductCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProductCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    data: Prisma.ProductCreateManyInput | Prisma.ProductCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ProductIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ProductUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductUpdateInput, Prisma.ProductUncheckedUpdateInput>;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyInput>;
    where?: Prisma.ProductWhereInput;
    limit?: number;
};
export type ProductUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyInput>;
    where?: Prisma.ProductWhereInput;
    limit?: number;
    include?: Prisma.ProductIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ProductUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateInput, Prisma.ProductUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProductUpdateInput, Prisma.ProductUncheckedUpdateInput>;
};
export type ProductDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where: Prisma.ProductWhereUniqueInput;
};
export type ProductDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    limit?: number;
};
export type Product$inventoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventorySelect<ExtArgs> | null;
    omit?: Prisma.InventoryOmit<ExtArgs> | null;
    include?: Prisma.InventoryInclude<ExtArgs> | null;
    where?: Prisma.InventoryWhereInput;
    orderBy?: Prisma.InventoryOrderByWithRelationInput | Prisma.InventoryOrderByWithRelationInput[];
    cursor?: Prisma.InventoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InventoryScalarFieldEnum | Prisma.InventoryScalarFieldEnum[];
};
export type Product$transactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StockTransactionSelect<ExtArgs> | null;
    omit?: Prisma.StockTransactionOmit<ExtArgs> | null;
    include?: Prisma.StockTransactionInclude<ExtArgs> | null;
    where?: Prisma.StockTransactionWhereInput;
    orderBy?: Prisma.StockTransactionOrderByWithRelationInput | Prisma.StockTransactionOrderByWithRelationInput[];
    cursor?: Prisma.StockTransactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StockTransactionScalarFieldEnum | Prisma.StockTransactionScalarFieldEnum[];
};
export type Product$purchaseOrderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderItemSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderItemOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderItemInclude<ExtArgs> | null;
    where?: Prisma.PurchaseOrderItemWhereInput;
    orderBy?: Prisma.PurchaseOrderItemOrderByWithRelationInput | Prisma.PurchaseOrderItemOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseOrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PurchaseOrderItemScalarFieldEnum | Prisma.PurchaseOrderItemScalarFieldEnum[];
};
export type ProductDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductSelect<ExtArgs> | null;
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    include?: Prisma.ProductInclude<ExtArgs> | null;
};
export {};
