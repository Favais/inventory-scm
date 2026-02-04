import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type InventoryModel = runtime.Types.Result.DefaultSelection<Prisma.$InventoryPayload>;
export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null;
    _avg: InventoryAvgAggregateOutputType | null;
    _sum: InventorySumAggregateOutputType | null;
    _min: InventoryMinAggregateOutputType | null;
    _max: InventoryMaxAggregateOutputType | null;
};
export type InventoryAvgAggregateOutputType = {
    quantityOnHand: number | null;
    quantityReserved: number | null;
};
export type InventorySumAggregateOutputType = {
    quantityOnHand: number | null;
    quantityReserved: number | null;
};
export type InventoryMinAggregateOutputType = {
    id: string | null;
    productId: string | null;
    warehouseId: string | null;
    quantityOnHand: number | null;
    quantityReserved: number | null;
    lastCounted: Date | null;
    binLocation: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type InventoryMaxAggregateOutputType = {
    id: string | null;
    productId: string | null;
    warehouseId: string | null;
    quantityOnHand: number | null;
    quantityReserved: number | null;
    lastCounted: Date | null;
    binLocation: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type InventoryCountAggregateOutputType = {
    id: number;
    productId: number;
    warehouseId: number;
    quantityOnHand: number;
    quantityReserved: number;
    lastCounted: number;
    binLocation: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type InventoryAvgAggregateInputType = {
    quantityOnHand?: true;
    quantityReserved?: true;
};
export type InventorySumAggregateInputType = {
    quantityOnHand?: true;
    quantityReserved?: true;
};
export type InventoryMinAggregateInputType = {
    id?: true;
    productId?: true;
    warehouseId?: true;
    quantityOnHand?: true;
    quantityReserved?: true;
    lastCounted?: true;
    binLocation?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type InventoryMaxAggregateInputType = {
    id?: true;
    productId?: true;
    warehouseId?: true;
    quantityOnHand?: true;
    quantityReserved?: true;
    lastCounted?: true;
    binLocation?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type InventoryCountAggregateInputType = {
    id?: true;
    productId?: true;
    warehouseId?: true;
    quantityOnHand?: true;
    quantityReserved?: true;
    lastCounted?: true;
    binLocation?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type InventoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InventoryWhereInput;
    orderBy?: Prisma.InventoryOrderByWithRelationInput | Prisma.InventoryOrderByWithRelationInput[];
    cursor?: Prisma.InventoryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InventoryCountAggregateInputType;
    _avg?: InventoryAvgAggregateInputType;
    _sum?: InventorySumAggregateInputType;
    _min?: InventoryMinAggregateInputType;
    _max?: InventoryMaxAggregateInputType;
};
export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
    [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInventory[P]> : Prisma.GetScalarType<T[P], AggregateInventory[P]>;
};
export type InventoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InventoryWhereInput;
    orderBy?: Prisma.InventoryOrderByWithAggregationInput | Prisma.InventoryOrderByWithAggregationInput[];
    by: Prisma.InventoryScalarFieldEnum[] | Prisma.InventoryScalarFieldEnum;
    having?: Prisma.InventoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InventoryCountAggregateInputType | true;
    _avg?: InventoryAvgAggregateInputType;
    _sum?: InventorySumAggregateInputType;
    _min?: InventoryMinAggregateInputType;
    _max?: InventoryMaxAggregateInputType;
};
export type InventoryGroupByOutputType = {
    id: string;
    productId: string;
    warehouseId: string;
    quantityOnHand: number;
    quantityReserved: number;
    lastCounted: Date | null;
    binLocation: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: InventoryCountAggregateOutputType | null;
    _avg: InventoryAvgAggregateOutputType | null;
    _sum: InventorySumAggregateOutputType | null;
    _min: InventoryMinAggregateOutputType | null;
    _max: InventoryMaxAggregateOutputType | null;
};
type GetInventoryGroupByPayload<T extends InventoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InventoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InventoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InventoryGroupByOutputType[P]>;
}>>;
export type InventoryWhereInput = {
    AND?: Prisma.InventoryWhereInput | Prisma.InventoryWhereInput[];
    OR?: Prisma.InventoryWhereInput[];
    NOT?: Prisma.InventoryWhereInput | Prisma.InventoryWhereInput[];
    id?: Prisma.StringFilter<"Inventory"> | string;
    productId?: Prisma.StringFilter<"Inventory"> | string;
    warehouseId?: Prisma.StringFilter<"Inventory"> | string;
    quantityOnHand?: Prisma.IntFilter<"Inventory"> | number;
    quantityReserved?: Prisma.IntFilter<"Inventory"> | number;
    lastCounted?: Prisma.DateTimeNullableFilter<"Inventory"> | Date | string | null;
    binLocation?: Prisma.StringNullableFilter<"Inventory"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Inventory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Inventory"> | Date | string;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    warehouse?: Prisma.XOR<Prisma.WarehouseScalarRelationFilter, Prisma.WarehouseWhereInput>;
};
export type InventoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    warehouseId?: Prisma.SortOrder;
    quantityOnHand?: Prisma.SortOrder;
    quantityReserved?: Prisma.SortOrder;
    lastCounted?: Prisma.SortOrderInput | Prisma.SortOrder;
    binLocation?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    product?: Prisma.ProductOrderByWithRelationInput;
    warehouse?: Prisma.WarehouseOrderByWithRelationInput;
};
export type InventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    productId_warehouseId?: Prisma.InventoryProductIdWarehouseIdCompoundUniqueInput;
    AND?: Prisma.InventoryWhereInput | Prisma.InventoryWhereInput[];
    OR?: Prisma.InventoryWhereInput[];
    NOT?: Prisma.InventoryWhereInput | Prisma.InventoryWhereInput[];
    productId?: Prisma.StringFilter<"Inventory"> | string;
    warehouseId?: Prisma.StringFilter<"Inventory"> | string;
    quantityOnHand?: Prisma.IntFilter<"Inventory"> | number;
    quantityReserved?: Prisma.IntFilter<"Inventory"> | number;
    lastCounted?: Prisma.DateTimeNullableFilter<"Inventory"> | Date | string | null;
    binLocation?: Prisma.StringNullableFilter<"Inventory"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Inventory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Inventory"> | Date | string;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    warehouse?: Prisma.XOR<Prisma.WarehouseScalarRelationFilter, Prisma.WarehouseWhereInput>;
}, "id" | "productId_warehouseId">;
export type InventoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    warehouseId?: Prisma.SortOrder;
    quantityOnHand?: Prisma.SortOrder;
    quantityReserved?: Prisma.SortOrder;
    lastCounted?: Prisma.SortOrderInput | Prisma.SortOrder;
    binLocation?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.InventoryCountOrderByAggregateInput;
    _avg?: Prisma.InventoryAvgOrderByAggregateInput;
    _max?: Prisma.InventoryMaxOrderByAggregateInput;
    _min?: Prisma.InventoryMinOrderByAggregateInput;
    _sum?: Prisma.InventorySumOrderByAggregateInput;
};
export type InventoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.InventoryScalarWhereWithAggregatesInput | Prisma.InventoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.InventoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InventoryScalarWhereWithAggregatesInput | Prisma.InventoryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Inventory"> | string;
    productId?: Prisma.StringWithAggregatesFilter<"Inventory"> | string;
    warehouseId?: Prisma.StringWithAggregatesFilter<"Inventory"> | string;
    quantityOnHand?: Prisma.IntWithAggregatesFilter<"Inventory"> | number;
    quantityReserved?: Prisma.IntWithAggregatesFilter<"Inventory"> | number;
    lastCounted?: Prisma.DateTimeNullableWithAggregatesFilter<"Inventory"> | Date | string | null;
    binLocation?: Prisma.StringNullableWithAggregatesFilter<"Inventory"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Inventory"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Inventory"> | Date | string;
};
export type InventoryCreateInput = {
    id?: string;
    quantityOnHand: number;
    quantityReserved?: number;
    lastCounted?: Date | string | null;
    binLocation?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutInventoryInput;
    warehouse: Prisma.WarehouseCreateNestedOneWithoutInventoryInput;
};
export type InventoryUncheckedCreateInput = {
    id?: string;
    productId: string;
    warehouseId: string;
    quantityOnHand: number;
    quantityReserved?: number;
    lastCounted?: Date | string | null;
    binLocation?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InventoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityOnHand?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityReserved?: Prisma.IntFieldUpdateOperationsInput | number;
    lastCounted?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    binLocation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutInventoryNestedInput;
    warehouse?: Prisma.WarehouseUpdateOneRequiredWithoutInventoryNestedInput;
};
export type InventoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    warehouseId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityOnHand?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityReserved?: Prisma.IntFieldUpdateOperationsInput | number;
    lastCounted?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    binLocation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InventoryCreateManyInput = {
    id?: string;
    productId: string;
    warehouseId: string;
    quantityOnHand: number;
    quantityReserved?: number;
    lastCounted?: Date | string | null;
    binLocation?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InventoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityOnHand?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityReserved?: Prisma.IntFieldUpdateOperationsInput | number;
    lastCounted?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    binLocation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InventoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    warehouseId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityOnHand?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityReserved?: Prisma.IntFieldUpdateOperationsInput | number;
    lastCounted?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    binLocation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InventoryListRelationFilter = {
    every?: Prisma.InventoryWhereInput;
    some?: Prisma.InventoryWhereInput;
    none?: Prisma.InventoryWhereInput;
};
export type InventoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InventoryProductIdWarehouseIdCompoundUniqueInput = {
    productId: string;
    warehouseId: string;
};
export type InventoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    warehouseId?: Prisma.SortOrder;
    quantityOnHand?: Prisma.SortOrder;
    quantityReserved?: Prisma.SortOrder;
    lastCounted?: Prisma.SortOrder;
    binLocation?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InventoryAvgOrderByAggregateInput = {
    quantityOnHand?: Prisma.SortOrder;
    quantityReserved?: Prisma.SortOrder;
};
export type InventoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    warehouseId?: Prisma.SortOrder;
    quantityOnHand?: Prisma.SortOrder;
    quantityReserved?: Prisma.SortOrder;
    lastCounted?: Prisma.SortOrder;
    binLocation?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InventoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    warehouseId?: Prisma.SortOrder;
    quantityOnHand?: Prisma.SortOrder;
    quantityReserved?: Prisma.SortOrder;
    lastCounted?: Prisma.SortOrder;
    binLocation?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InventorySumOrderByAggregateInput = {
    quantityOnHand?: Prisma.SortOrder;
    quantityReserved?: Prisma.SortOrder;
};
export type InventoryCreateNestedManyWithoutWarehouseInput = {
    create?: Prisma.XOR<Prisma.InventoryCreateWithoutWarehouseInput, Prisma.InventoryUncheckedCreateWithoutWarehouseInput> | Prisma.InventoryCreateWithoutWarehouseInput[] | Prisma.InventoryUncheckedCreateWithoutWarehouseInput[];
    connectOrCreate?: Prisma.InventoryCreateOrConnectWithoutWarehouseInput | Prisma.InventoryCreateOrConnectWithoutWarehouseInput[];
    createMany?: Prisma.InventoryCreateManyWarehouseInputEnvelope;
    connect?: Prisma.InventoryWhereUniqueInput | Prisma.InventoryWhereUniqueInput[];
};
export type InventoryUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: Prisma.XOR<Prisma.InventoryCreateWithoutWarehouseInput, Prisma.InventoryUncheckedCreateWithoutWarehouseInput> | Prisma.InventoryCreateWithoutWarehouseInput[] | Prisma.InventoryUncheckedCreateWithoutWarehouseInput[];
    connectOrCreate?: Prisma.InventoryCreateOrConnectWithoutWarehouseInput | Prisma.InventoryCreateOrConnectWithoutWarehouseInput[];
    createMany?: Prisma.InventoryCreateManyWarehouseInputEnvelope;
    connect?: Prisma.InventoryWhereUniqueInput | Prisma.InventoryWhereUniqueInput[];
};
export type InventoryUpdateManyWithoutWarehouseNestedInput = {
    create?: Prisma.XOR<Prisma.InventoryCreateWithoutWarehouseInput, Prisma.InventoryUncheckedCreateWithoutWarehouseInput> | Prisma.InventoryCreateWithoutWarehouseInput[] | Prisma.InventoryUncheckedCreateWithoutWarehouseInput[];
    connectOrCreate?: Prisma.InventoryCreateOrConnectWithoutWarehouseInput | Prisma.InventoryCreateOrConnectWithoutWarehouseInput[];
    upsert?: Prisma.InventoryUpsertWithWhereUniqueWithoutWarehouseInput | Prisma.InventoryUpsertWithWhereUniqueWithoutWarehouseInput[];
    createMany?: Prisma.InventoryCreateManyWarehouseInputEnvelope;
    set?: Prisma.InventoryWhereUniqueInput | Prisma.InventoryWhereUniqueInput[];
    disconnect?: Prisma.InventoryWhereUniqueInput | Prisma.InventoryWhereUniqueInput[];
    delete?: Prisma.InventoryWhereUniqueInput | Prisma.InventoryWhereUniqueInput[];
    connect?: Prisma.InventoryWhereUniqueInput | Prisma.InventoryWhereUniqueInput[];
    update?: Prisma.InventoryUpdateWithWhereUniqueWithoutWarehouseInput | Prisma.InventoryUpdateWithWhereUniqueWithoutWarehouseInput[];
    updateMany?: Prisma.InventoryUpdateManyWithWhereWithoutWarehouseInput | Prisma.InventoryUpdateManyWithWhereWithoutWarehouseInput[];
    deleteMany?: Prisma.InventoryScalarWhereInput | Prisma.InventoryScalarWhereInput[];
};
export type InventoryUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: Prisma.XOR<Prisma.InventoryCreateWithoutWarehouseInput, Prisma.InventoryUncheckedCreateWithoutWarehouseInput> | Prisma.InventoryCreateWithoutWarehouseInput[] | Prisma.InventoryUncheckedCreateWithoutWarehouseInput[];
    connectOrCreate?: Prisma.InventoryCreateOrConnectWithoutWarehouseInput | Prisma.InventoryCreateOrConnectWithoutWarehouseInput[];
    upsert?: Prisma.InventoryUpsertWithWhereUniqueWithoutWarehouseInput | Prisma.InventoryUpsertWithWhereUniqueWithoutWarehouseInput[];
    createMany?: Prisma.InventoryCreateManyWarehouseInputEnvelope;
    set?: Prisma.InventoryWhereUniqueInput | Prisma.InventoryWhereUniqueInput[];
    disconnect?: Prisma.InventoryWhereUniqueInput | Prisma.InventoryWhereUniqueInput[];
    delete?: Prisma.InventoryWhereUniqueInput | Prisma.InventoryWhereUniqueInput[];
    connect?: Prisma.InventoryWhereUniqueInput | Prisma.InventoryWhereUniqueInput[];
    update?: Prisma.InventoryUpdateWithWhereUniqueWithoutWarehouseInput | Prisma.InventoryUpdateWithWhereUniqueWithoutWarehouseInput[];
    updateMany?: Prisma.InventoryUpdateManyWithWhereWithoutWarehouseInput | Prisma.InventoryUpdateManyWithWhereWithoutWarehouseInput[];
    deleteMany?: Prisma.InventoryScalarWhereInput | Prisma.InventoryScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type InventoryCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.InventoryCreateWithoutProductInput, Prisma.InventoryUncheckedCreateWithoutProductInput> | Prisma.InventoryCreateWithoutProductInput[] | Prisma.InventoryUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.InventoryCreateOrConnectWithoutProductInput | Prisma.InventoryCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.InventoryCreateManyProductInputEnvelope;
    connect?: Prisma.InventoryWhereUniqueInput | Prisma.InventoryWhereUniqueInput[];
};
export type InventoryUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.InventoryCreateWithoutProductInput, Prisma.InventoryUncheckedCreateWithoutProductInput> | Prisma.InventoryCreateWithoutProductInput[] | Prisma.InventoryUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.InventoryCreateOrConnectWithoutProductInput | Prisma.InventoryCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.InventoryCreateManyProductInputEnvelope;
    connect?: Prisma.InventoryWhereUniqueInput | Prisma.InventoryWhereUniqueInput[];
};
export type InventoryUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.InventoryCreateWithoutProductInput, Prisma.InventoryUncheckedCreateWithoutProductInput> | Prisma.InventoryCreateWithoutProductInput[] | Prisma.InventoryUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.InventoryCreateOrConnectWithoutProductInput | Prisma.InventoryCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.InventoryUpsertWithWhereUniqueWithoutProductInput | Prisma.InventoryUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.InventoryCreateManyProductInputEnvelope;
    set?: Prisma.InventoryWhereUniqueInput | Prisma.InventoryWhereUniqueInput[];
    disconnect?: Prisma.InventoryWhereUniqueInput | Prisma.InventoryWhereUniqueInput[];
    delete?: Prisma.InventoryWhereUniqueInput | Prisma.InventoryWhereUniqueInput[];
    connect?: Prisma.InventoryWhereUniqueInput | Prisma.InventoryWhereUniqueInput[];
    update?: Prisma.InventoryUpdateWithWhereUniqueWithoutProductInput | Prisma.InventoryUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.InventoryUpdateManyWithWhereWithoutProductInput | Prisma.InventoryUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.InventoryScalarWhereInput | Prisma.InventoryScalarWhereInput[];
};
export type InventoryUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.InventoryCreateWithoutProductInput, Prisma.InventoryUncheckedCreateWithoutProductInput> | Prisma.InventoryCreateWithoutProductInput[] | Prisma.InventoryUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.InventoryCreateOrConnectWithoutProductInput | Prisma.InventoryCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.InventoryUpsertWithWhereUniqueWithoutProductInput | Prisma.InventoryUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.InventoryCreateManyProductInputEnvelope;
    set?: Prisma.InventoryWhereUniqueInput | Prisma.InventoryWhereUniqueInput[];
    disconnect?: Prisma.InventoryWhereUniqueInput | Prisma.InventoryWhereUniqueInput[];
    delete?: Prisma.InventoryWhereUniqueInput | Prisma.InventoryWhereUniqueInput[];
    connect?: Prisma.InventoryWhereUniqueInput | Prisma.InventoryWhereUniqueInput[];
    update?: Prisma.InventoryUpdateWithWhereUniqueWithoutProductInput | Prisma.InventoryUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.InventoryUpdateManyWithWhereWithoutProductInput | Prisma.InventoryUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.InventoryScalarWhereInput | Prisma.InventoryScalarWhereInput[];
};
export type InventoryCreateWithoutWarehouseInput = {
    id?: string;
    quantityOnHand: number;
    quantityReserved?: number;
    lastCounted?: Date | string | null;
    binLocation?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutInventoryInput;
};
export type InventoryUncheckedCreateWithoutWarehouseInput = {
    id?: string;
    productId: string;
    quantityOnHand: number;
    quantityReserved?: number;
    lastCounted?: Date | string | null;
    binLocation?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InventoryCreateOrConnectWithoutWarehouseInput = {
    where: Prisma.InventoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.InventoryCreateWithoutWarehouseInput, Prisma.InventoryUncheckedCreateWithoutWarehouseInput>;
};
export type InventoryCreateManyWarehouseInputEnvelope = {
    data: Prisma.InventoryCreateManyWarehouseInput | Prisma.InventoryCreateManyWarehouseInput[];
    skipDuplicates?: boolean;
};
export type InventoryUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: Prisma.InventoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.InventoryUpdateWithoutWarehouseInput, Prisma.InventoryUncheckedUpdateWithoutWarehouseInput>;
    create: Prisma.XOR<Prisma.InventoryCreateWithoutWarehouseInput, Prisma.InventoryUncheckedCreateWithoutWarehouseInput>;
};
export type InventoryUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: Prisma.InventoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.InventoryUpdateWithoutWarehouseInput, Prisma.InventoryUncheckedUpdateWithoutWarehouseInput>;
};
export type InventoryUpdateManyWithWhereWithoutWarehouseInput = {
    where: Prisma.InventoryScalarWhereInput;
    data: Prisma.XOR<Prisma.InventoryUpdateManyMutationInput, Prisma.InventoryUncheckedUpdateManyWithoutWarehouseInput>;
};
export type InventoryScalarWhereInput = {
    AND?: Prisma.InventoryScalarWhereInput | Prisma.InventoryScalarWhereInput[];
    OR?: Prisma.InventoryScalarWhereInput[];
    NOT?: Prisma.InventoryScalarWhereInput | Prisma.InventoryScalarWhereInput[];
    id?: Prisma.StringFilter<"Inventory"> | string;
    productId?: Prisma.StringFilter<"Inventory"> | string;
    warehouseId?: Prisma.StringFilter<"Inventory"> | string;
    quantityOnHand?: Prisma.IntFilter<"Inventory"> | number;
    quantityReserved?: Prisma.IntFilter<"Inventory"> | number;
    lastCounted?: Prisma.DateTimeNullableFilter<"Inventory"> | Date | string | null;
    binLocation?: Prisma.StringNullableFilter<"Inventory"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Inventory"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Inventory"> | Date | string;
};
export type InventoryCreateWithoutProductInput = {
    id?: string;
    quantityOnHand: number;
    quantityReserved?: number;
    lastCounted?: Date | string | null;
    binLocation?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    warehouse: Prisma.WarehouseCreateNestedOneWithoutInventoryInput;
};
export type InventoryUncheckedCreateWithoutProductInput = {
    id?: string;
    warehouseId: string;
    quantityOnHand: number;
    quantityReserved?: number;
    lastCounted?: Date | string | null;
    binLocation?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InventoryCreateOrConnectWithoutProductInput = {
    where: Prisma.InventoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.InventoryCreateWithoutProductInput, Prisma.InventoryUncheckedCreateWithoutProductInput>;
};
export type InventoryCreateManyProductInputEnvelope = {
    data: Prisma.InventoryCreateManyProductInput | Prisma.InventoryCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type InventoryUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.InventoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.InventoryUpdateWithoutProductInput, Prisma.InventoryUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.InventoryCreateWithoutProductInput, Prisma.InventoryUncheckedCreateWithoutProductInput>;
};
export type InventoryUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.InventoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.InventoryUpdateWithoutProductInput, Prisma.InventoryUncheckedUpdateWithoutProductInput>;
};
export type InventoryUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.InventoryScalarWhereInput;
    data: Prisma.XOR<Prisma.InventoryUpdateManyMutationInput, Prisma.InventoryUncheckedUpdateManyWithoutProductInput>;
};
export type InventoryCreateManyWarehouseInput = {
    id?: string;
    productId: string;
    quantityOnHand: number;
    quantityReserved?: number;
    lastCounted?: Date | string | null;
    binLocation?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InventoryUpdateWithoutWarehouseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityOnHand?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityReserved?: Prisma.IntFieldUpdateOperationsInput | number;
    lastCounted?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    binLocation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutInventoryNestedInput;
};
export type InventoryUncheckedUpdateWithoutWarehouseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityOnHand?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityReserved?: Prisma.IntFieldUpdateOperationsInput | number;
    lastCounted?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    binLocation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InventoryUncheckedUpdateManyWithoutWarehouseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityOnHand?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityReserved?: Prisma.IntFieldUpdateOperationsInput | number;
    lastCounted?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    binLocation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InventoryCreateManyProductInput = {
    id?: string;
    warehouseId: string;
    quantityOnHand: number;
    quantityReserved?: number;
    lastCounted?: Date | string | null;
    binLocation?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type InventoryUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityOnHand?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityReserved?: Prisma.IntFieldUpdateOperationsInput | number;
    lastCounted?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    binLocation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    warehouse?: Prisma.WarehouseUpdateOneRequiredWithoutInventoryNestedInput;
};
export type InventoryUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    warehouseId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityOnHand?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityReserved?: Prisma.IntFieldUpdateOperationsInput | number;
    lastCounted?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    binLocation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InventoryUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    warehouseId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityOnHand?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityReserved?: Prisma.IntFieldUpdateOperationsInput | number;
    lastCounted?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    binLocation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InventorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    warehouseId?: boolean;
    quantityOnHand?: boolean;
    quantityReserved?: boolean;
    lastCounted?: boolean;
    binLocation?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["inventory"]>;
export type InventorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    warehouseId?: boolean;
    quantityOnHand?: boolean;
    quantityReserved?: boolean;
    lastCounted?: boolean;
    binLocation?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["inventory"]>;
export type InventorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    warehouseId?: boolean;
    quantityOnHand?: boolean;
    quantityReserved?: boolean;
    lastCounted?: boolean;
    binLocation?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["inventory"]>;
export type InventorySelectScalar = {
    id?: boolean;
    productId?: boolean;
    warehouseId?: boolean;
    quantityOnHand?: boolean;
    quantityReserved?: boolean;
    lastCounted?: boolean;
    binLocation?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type InventoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "productId" | "warehouseId" | "quantityOnHand" | "quantityReserved" | "lastCounted" | "binLocation" | "createdAt" | "updatedAt", ExtArgs["result"]["inventory"]>;
export type InventoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
};
export type InventoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
};
export type InventoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
};
export type $InventoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Inventory";
    objects: {
        product: Prisma.$ProductPayload<ExtArgs>;
        warehouse: Prisma.$WarehousePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        productId: string;
        warehouseId: string;
        quantityOnHand: number;
        quantityReserved: number;
        lastCounted: Date | null;
        binLocation: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["inventory"]>;
    composites: {};
};
export type InventoryGetPayload<S extends boolean | null | undefined | InventoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InventoryPayload, S>;
export type InventoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InventoryCountAggregateInputType | true;
};
export interface InventoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Inventory'];
        meta: {
            name: 'Inventory';
        };
    };
    findUnique<T extends InventoryFindUniqueArgs>(args: Prisma.SelectSubset<T, InventoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InventoryClient<runtime.Types.Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InventoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InventoryClient<runtime.Types.Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InventoryFindFirstArgs>(args?: Prisma.SelectSubset<T, InventoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__InventoryClient<runtime.Types.Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InventoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InventoryClient<runtime.Types.Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InventoryFindManyArgs>(args?: Prisma.SelectSubset<T, InventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InventoryCreateArgs>(args: Prisma.SelectSubset<T, InventoryCreateArgs<ExtArgs>>): Prisma.Prisma__InventoryClient<runtime.Types.Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InventoryCreateManyArgs>(args?: Prisma.SelectSubset<T, InventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InventoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InventoryDeleteArgs>(args: Prisma.SelectSubset<T, InventoryDeleteArgs<ExtArgs>>): Prisma.Prisma__InventoryClient<runtime.Types.Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InventoryUpdateArgs>(args: Prisma.SelectSubset<T, InventoryUpdateArgs<ExtArgs>>): Prisma.Prisma__InventoryClient<runtime.Types.Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InventoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, InventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InventoryUpdateManyArgs>(args: Prisma.SelectSubset<T, InventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InventoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InventoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InventoryUpsertArgs>(args: Prisma.SelectSubset<T, InventoryUpsertArgs<ExtArgs>>): Prisma.Prisma__InventoryClient<runtime.Types.Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InventoryCountArgs>(args?: Prisma.Subset<T, InventoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InventoryCountAggregateOutputType> : number>;
    aggregate<T extends InventoryAggregateArgs>(args: Prisma.Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>;
    groupBy<T extends InventoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InventoryGroupByArgs['orderBy'];
    } : {
        orderBy?: InventoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InventoryFieldRefs;
}
export interface Prisma__InventoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    warehouse<T extends Prisma.WarehouseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WarehouseDefaultArgs<ExtArgs>>): Prisma.Prisma__WarehouseClient<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InventoryFieldRefs {
    readonly id: Prisma.FieldRef<"Inventory", 'String'>;
    readonly productId: Prisma.FieldRef<"Inventory", 'String'>;
    readonly warehouseId: Prisma.FieldRef<"Inventory", 'String'>;
    readonly quantityOnHand: Prisma.FieldRef<"Inventory", 'Int'>;
    readonly quantityReserved: Prisma.FieldRef<"Inventory", 'Int'>;
    readonly lastCounted: Prisma.FieldRef<"Inventory", 'DateTime'>;
    readonly binLocation: Prisma.FieldRef<"Inventory", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Inventory", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Inventory", 'DateTime'>;
}
export type InventoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventorySelect<ExtArgs> | null;
    omit?: Prisma.InventoryOmit<ExtArgs> | null;
    include?: Prisma.InventoryInclude<ExtArgs> | null;
    where: Prisma.InventoryWhereUniqueInput;
};
export type InventoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventorySelect<ExtArgs> | null;
    omit?: Prisma.InventoryOmit<ExtArgs> | null;
    include?: Prisma.InventoryInclude<ExtArgs> | null;
    where: Prisma.InventoryWhereUniqueInput;
};
export type InventoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InventoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InventoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InventoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventorySelect<ExtArgs> | null;
    omit?: Prisma.InventoryOmit<ExtArgs> | null;
    include?: Prisma.InventoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InventoryCreateInput, Prisma.InventoryUncheckedCreateInput>;
};
export type InventoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InventoryCreateManyInput | Prisma.InventoryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InventoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventorySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InventoryOmit<ExtArgs> | null;
    data: Prisma.InventoryCreateManyInput | Prisma.InventoryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InventoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InventoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventorySelect<ExtArgs> | null;
    omit?: Prisma.InventoryOmit<ExtArgs> | null;
    include?: Prisma.InventoryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InventoryUpdateInput, Prisma.InventoryUncheckedUpdateInput>;
    where: Prisma.InventoryWhereUniqueInput;
};
export type InventoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InventoryUpdateManyMutationInput, Prisma.InventoryUncheckedUpdateManyInput>;
    where?: Prisma.InventoryWhereInput;
    limit?: number;
};
export type InventoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventorySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InventoryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InventoryUpdateManyMutationInput, Prisma.InventoryUncheckedUpdateManyInput>;
    where?: Prisma.InventoryWhereInput;
    limit?: number;
    include?: Prisma.InventoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InventoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventorySelect<ExtArgs> | null;
    omit?: Prisma.InventoryOmit<ExtArgs> | null;
    include?: Prisma.InventoryInclude<ExtArgs> | null;
    where: Prisma.InventoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.InventoryCreateInput, Prisma.InventoryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InventoryUpdateInput, Prisma.InventoryUncheckedUpdateInput>;
};
export type InventoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventorySelect<ExtArgs> | null;
    omit?: Prisma.InventoryOmit<ExtArgs> | null;
    include?: Prisma.InventoryInclude<ExtArgs> | null;
    where: Prisma.InventoryWhereUniqueInput;
};
export type InventoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InventoryWhereInput;
    limit?: number;
};
export type InventoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventorySelect<ExtArgs> | null;
    omit?: Prisma.InventoryOmit<ExtArgs> | null;
    include?: Prisma.InventoryInclude<ExtArgs> | null;
};
export {};
