import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type PurchaseOrderItemModel = runtime.Types.Result.DefaultSelection<Prisma.$PurchaseOrderItemPayload>;
export type AggregatePurchaseOrderItem = {
    _count: PurchaseOrderItemCountAggregateOutputType | null;
    _avg: PurchaseOrderItemAvgAggregateOutputType | null;
    _sum: PurchaseOrderItemSumAggregateOutputType | null;
    _min: PurchaseOrderItemMinAggregateOutputType | null;
    _max: PurchaseOrderItemMaxAggregateOutputType | null;
};
export type PurchaseOrderItemAvgAggregateOutputType = {
    quantityOrdered: number | null;
    quantityReceived: number | null;
    unitPrice: runtime.Decimal | null;
    totalPrice: runtime.Decimal | null;
};
export type PurchaseOrderItemSumAggregateOutputType = {
    quantityOrdered: number | null;
    quantityReceived: number | null;
    unitPrice: runtime.Decimal | null;
    totalPrice: runtime.Decimal | null;
};
export type PurchaseOrderItemMinAggregateOutputType = {
    id: string | null;
    purchaseOrderId: string | null;
    productId: string | null;
    quantityOrdered: number | null;
    quantityReceived: number | null;
    unitPrice: runtime.Decimal | null;
    totalPrice: runtime.Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PurchaseOrderItemMaxAggregateOutputType = {
    id: string | null;
    purchaseOrderId: string | null;
    productId: string | null;
    quantityOrdered: number | null;
    quantityReceived: number | null;
    unitPrice: runtime.Decimal | null;
    totalPrice: runtime.Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PurchaseOrderItemCountAggregateOutputType = {
    id: number;
    purchaseOrderId: number;
    productId: number;
    quantityOrdered: number;
    quantityReceived: number;
    unitPrice: number;
    totalPrice: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PurchaseOrderItemAvgAggregateInputType = {
    quantityOrdered?: true;
    quantityReceived?: true;
    unitPrice?: true;
    totalPrice?: true;
};
export type PurchaseOrderItemSumAggregateInputType = {
    quantityOrdered?: true;
    quantityReceived?: true;
    unitPrice?: true;
    totalPrice?: true;
};
export type PurchaseOrderItemMinAggregateInputType = {
    id?: true;
    purchaseOrderId?: true;
    productId?: true;
    quantityOrdered?: true;
    quantityReceived?: true;
    unitPrice?: true;
    totalPrice?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PurchaseOrderItemMaxAggregateInputType = {
    id?: true;
    purchaseOrderId?: true;
    productId?: true;
    quantityOrdered?: true;
    quantityReceived?: true;
    unitPrice?: true;
    totalPrice?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PurchaseOrderItemCountAggregateInputType = {
    id?: true;
    purchaseOrderId?: true;
    productId?: true;
    quantityOrdered?: true;
    quantityReceived?: true;
    unitPrice?: true;
    totalPrice?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PurchaseOrderItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseOrderItemWhereInput;
    orderBy?: Prisma.PurchaseOrderItemOrderByWithRelationInput | Prisma.PurchaseOrderItemOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseOrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PurchaseOrderItemCountAggregateInputType;
    _avg?: PurchaseOrderItemAvgAggregateInputType;
    _sum?: PurchaseOrderItemSumAggregateInputType;
    _min?: PurchaseOrderItemMinAggregateInputType;
    _max?: PurchaseOrderItemMaxAggregateInputType;
};
export type GetPurchaseOrderItemAggregateType<T extends PurchaseOrderItemAggregateArgs> = {
    [P in keyof T & keyof AggregatePurchaseOrderItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePurchaseOrderItem[P]> : Prisma.GetScalarType<T[P], AggregatePurchaseOrderItem[P]>;
};
export type PurchaseOrderItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseOrderItemWhereInput;
    orderBy?: Prisma.PurchaseOrderItemOrderByWithAggregationInput | Prisma.PurchaseOrderItemOrderByWithAggregationInput[];
    by: Prisma.PurchaseOrderItemScalarFieldEnum[] | Prisma.PurchaseOrderItemScalarFieldEnum;
    having?: Prisma.PurchaseOrderItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PurchaseOrderItemCountAggregateInputType | true;
    _avg?: PurchaseOrderItemAvgAggregateInputType;
    _sum?: PurchaseOrderItemSumAggregateInputType;
    _min?: PurchaseOrderItemMinAggregateInputType;
    _max?: PurchaseOrderItemMaxAggregateInputType;
};
export type PurchaseOrderItemGroupByOutputType = {
    id: string;
    purchaseOrderId: string;
    productId: string;
    quantityOrdered: number;
    quantityReceived: number;
    unitPrice: runtime.Decimal;
    totalPrice: runtime.Decimal;
    createdAt: Date;
    updatedAt: Date;
    _count: PurchaseOrderItemCountAggregateOutputType | null;
    _avg: PurchaseOrderItemAvgAggregateOutputType | null;
    _sum: PurchaseOrderItemSumAggregateOutputType | null;
    _min: PurchaseOrderItemMinAggregateOutputType | null;
    _max: PurchaseOrderItemMaxAggregateOutputType | null;
};
type GetPurchaseOrderItemGroupByPayload<T extends PurchaseOrderItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PurchaseOrderItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PurchaseOrderItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PurchaseOrderItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PurchaseOrderItemGroupByOutputType[P]>;
}>>;
export type PurchaseOrderItemWhereInput = {
    AND?: Prisma.PurchaseOrderItemWhereInput | Prisma.PurchaseOrderItemWhereInput[];
    OR?: Prisma.PurchaseOrderItemWhereInput[];
    NOT?: Prisma.PurchaseOrderItemWhereInput | Prisma.PurchaseOrderItemWhereInput[];
    id?: Prisma.StringFilter<"PurchaseOrderItem"> | string;
    purchaseOrderId?: Prisma.StringFilter<"PurchaseOrderItem"> | string;
    productId?: Prisma.StringFilter<"PurchaseOrderItem"> | string;
    quantityOrdered?: Prisma.IntFilter<"PurchaseOrderItem"> | number;
    quantityReceived?: Prisma.IntFilter<"PurchaseOrderItem"> | number;
    unitPrice?: Prisma.DecimalFilter<"PurchaseOrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFilter<"PurchaseOrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"PurchaseOrderItem"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PurchaseOrderItem"> | Date | string;
    purchaseOrder?: Prisma.XOR<Prisma.PurchaseOrderScalarRelationFilter, Prisma.PurchaseOrderWhereInput>;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
};
export type PurchaseOrderItemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    purchaseOrderId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantityOrdered?: Prisma.SortOrder;
    quantityReceived?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    purchaseOrder?: Prisma.PurchaseOrderOrderByWithRelationInput;
    product?: Prisma.ProductOrderByWithRelationInput;
};
export type PurchaseOrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PurchaseOrderItemWhereInput | Prisma.PurchaseOrderItemWhereInput[];
    OR?: Prisma.PurchaseOrderItemWhereInput[];
    NOT?: Prisma.PurchaseOrderItemWhereInput | Prisma.PurchaseOrderItemWhereInput[];
    purchaseOrderId?: Prisma.StringFilter<"PurchaseOrderItem"> | string;
    productId?: Prisma.StringFilter<"PurchaseOrderItem"> | string;
    quantityOrdered?: Prisma.IntFilter<"PurchaseOrderItem"> | number;
    quantityReceived?: Prisma.IntFilter<"PurchaseOrderItem"> | number;
    unitPrice?: Prisma.DecimalFilter<"PurchaseOrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFilter<"PurchaseOrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"PurchaseOrderItem"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PurchaseOrderItem"> | Date | string;
    purchaseOrder?: Prisma.XOR<Prisma.PurchaseOrderScalarRelationFilter, Prisma.PurchaseOrderWhereInput>;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
}, "id">;
export type PurchaseOrderItemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    purchaseOrderId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantityOrdered?: Prisma.SortOrder;
    quantityReceived?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PurchaseOrderItemCountOrderByAggregateInput;
    _avg?: Prisma.PurchaseOrderItemAvgOrderByAggregateInput;
    _max?: Prisma.PurchaseOrderItemMaxOrderByAggregateInput;
    _min?: Prisma.PurchaseOrderItemMinOrderByAggregateInput;
    _sum?: Prisma.PurchaseOrderItemSumOrderByAggregateInput;
};
export type PurchaseOrderItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.PurchaseOrderItemScalarWhereWithAggregatesInput | Prisma.PurchaseOrderItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.PurchaseOrderItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PurchaseOrderItemScalarWhereWithAggregatesInput | Prisma.PurchaseOrderItemScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PurchaseOrderItem"> | string;
    purchaseOrderId?: Prisma.StringWithAggregatesFilter<"PurchaseOrderItem"> | string;
    productId?: Prisma.StringWithAggregatesFilter<"PurchaseOrderItem"> | string;
    quantityOrdered?: Prisma.IntWithAggregatesFilter<"PurchaseOrderItem"> | number;
    quantityReceived?: Prisma.IntWithAggregatesFilter<"PurchaseOrderItem"> | number;
    unitPrice?: Prisma.DecimalWithAggregatesFilter<"PurchaseOrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalWithAggregatesFilter<"PurchaseOrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PurchaseOrderItem"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"PurchaseOrderItem"> | Date | string;
};
export type PurchaseOrderItemCreateInput = {
    id?: string;
    quantityOrdered: number;
    quantityReceived?: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    purchaseOrder: Prisma.PurchaseOrderCreateNestedOneWithoutItemsInput;
    product: Prisma.ProductCreateNestedOneWithoutPurchaseOrderItemsInput;
};
export type PurchaseOrderItemUncheckedCreateInput = {
    id?: string;
    purchaseOrderId: string;
    productId: string;
    quantityOrdered: number;
    quantityReceived?: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PurchaseOrderItemUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityOrdered?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityReceived?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purchaseOrder?: Prisma.PurchaseOrderUpdateOneRequiredWithoutItemsNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutPurchaseOrderItemsNestedInput;
};
export type PurchaseOrderItemUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityOrdered?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityReceived?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PurchaseOrderItemCreateManyInput = {
    id?: string;
    purchaseOrderId: string;
    productId: string;
    quantityOrdered: number;
    quantityReceived?: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PurchaseOrderItemUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityOrdered?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityReceived?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PurchaseOrderItemUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityOrdered?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityReceived?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PurchaseOrderItemListRelationFilter = {
    every?: Prisma.PurchaseOrderItemWhereInput;
    some?: Prisma.PurchaseOrderItemWhereInput;
    none?: Prisma.PurchaseOrderItemWhereInput;
};
export type PurchaseOrderItemOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PurchaseOrderItemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    purchaseOrderId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantityOrdered?: Prisma.SortOrder;
    quantityReceived?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PurchaseOrderItemAvgOrderByAggregateInput = {
    quantityOrdered?: Prisma.SortOrder;
    quantityReceived?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
};
export type PurchaseOrderItemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    purchaseOrderId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantityOrdered?: Prisma.SortOrder;
    quantityReceived?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PurchaseOrderItemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    purchaseOrderId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantityOrdered?: Prisma.SortOrder;
    quantityReceived?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PurchaseOrderItemSumOrderByAggregateInput = {
    quantityOrdered?: Prisma.SortOrder;
    quantityReceived?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
};
export type PurchaseOrderItemCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderItemCreateWithoutProductInput, Prisma.PurchaseOrderItemUncheckedCreateWithoutProductInput> | Prisma.PurchaseOrderItemCreateWithoutProductInput[] | Prisma.PurchaseOrderItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.PurchaseOrderItemCreateOrConnectWithoutProductInput | Prisma.PurchaseOrderItemCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.PurchaseOrderItemCreateManyProductInputEnvelope;
    connect?: Prisma.PurchaseOrderItemWhereUniqueInput | Prisma.PurchaseOrderItemWhereUniqueInput[];
};
export type PurchaseOrderItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderItemCreateWithoutProductInput, Prisma.PurchaseOrderItemUncheckedCreateWithoutProductInput> | Prisma.PurchaseOrderItemCreateWithoutProductInput[] | Prisma.PurchaseOrderItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.PurchaseOrderItemCreateOrConnectWithoutProductInput | Prisma.PurchaseOrderItemCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.PurchaseOrderItemCreateManyProductInputEnvelope;
    connect?: Prisma.PurchaseOrderItemWhereUniqueInput | Prisma.PurchaseOrderItemWhereUniqueInput[];
};
export type PurchaseOrderItemUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderItemCreateWithoutProductInput, Prisma.PurchaseOrderItemUncheckedCreateWithoutProductInput> | Prisma.PurchaseOrderItemCreateWithoutProductInput[] | Prisma.PurchaseOrderItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.PurchaseOrderItemCreateOrConnectWithoutProductInput | Prisma.PurchaseOrderItemCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.PurchaseOrderItemUpsertWithWhereUniqueWithoutProductInput | Prisma.PurchaseOrderItemUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.PurchaseOrderItemCreateManyProductInputEnvelope;
    set?: Prisma.PurchaseOrderItemWhereUniqueInput | Prisma.PurchaseOrderItemWhereUniqueInput[];
    disconnect?: Prisma.PurchaseOrderItemWhereUniqueInput | Prisma.PurchaseOrderItemWhereUniqueInput[];
    delete?: Prisma.PurchaseOrderItemWhereUniqueInput | Prisma.PurchaseOrderItemWhereUniqueInput[];
    connect?: Prisma.PurchaseOrderItemWhereUniqueInput | Prisma.PurchaseOrderItemWhereUniqueInput[];
    update?: Prisma.PurchaseOrderItemUpdateWithWhereUniqueWithoutProductInput | Prisma.PurchaseOrderItemUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.PurchaseOrderItemUpdateManyWithWhereWithoutProductInput | Prisma.PurchaseOrderItemUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.PurchaseOrderItemScalarWhereInput | Prisma.PurchaseOrderItemScalarWhereInput[];
};
export type PurchaseOrderItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderItemCreateWithoutProductInput, Prisma.PurchaseOrderItemUncheckedCreateWithoutProductInput> | Prisma.PurchaseOrderItemCreateWithoutProductInput[] | Prisma.PurchaseOrderItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.PurchaseOrderItemCreateOrConnectWithoutProductInput | Prisma.PurchaseOrderItemCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.PurchaseOrderItemUpsertWithWhereUniqueWithoutProductInput | Prisma.PurchaseOrderItemUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.PurchaseOrderItemCreateManyProductInputEnvelope;
    set?: Prisma.PurchaseOrderItemWhereUniqueInput | Prisma.PurchaseOrderItemWhereUniqueInput[];
    disconnect?: Prisma.PurchaseOrderItemWhereUniqueInput | Prisma.PurchaseOrderItemWhereUniqueInput[];
    delete?: Prisma.PurchaseOrderItemWhereUniqueInput | Prisma.PurchaseOrderItemWhereUniqueInput[];
    connect?: Prisma.PurchaseOrderItemWhereUniqueInput | Prisma.PurchaseOrderItemWhereUniqueInput[];
    update?: Prisma.PurchaseOrderItemUpdateWithWhereUniqueWithoutProductInput | Prisma.PurchaseOrderItemUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.PurchaseOrderItemUpdateManyWithWhereWithoutProductInput | Prisma.PurchaseOrderItemUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.PurchaseOrderItemScalarWhereInput | Prisma.PurchaseOrderItemScalarWhereInput[];
};
export type PurchaseOrderItemCreateNestedManyWithoutPurchaseOrderInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderItemCreateWithoutPurchaseOrderInput, Prisma.PurchaseOrderItemUncheckedCreateWithoutPurchaseOrderInput> | Prisma.PurchaseOrderItemCreateWithoutPurchaseOrderInput[] | Prisma.PurchaseOrderItemUncheckedCreateWithoutPurchaseOrderInput[];
    connectOrCreate?: Prisma.PurchaseOrderItemCreateOrConnectWithoutPurchaseOrderInput | Prisma.PurchaseOrderItemCreateOrConnectWithoutPurchaseOrderInput[];
    createMany?: Prisma.PurchaseOrderItemCreateManyPurchaseOrderInputEnvelope;
    connect?: Prisma.PurchaseOrderItemWhereUniqueInput | Prisma.PurchaseOrderItemWhereUniqueInput[];
};
export type PurchaseOrderItemUncheckedCreateNestedManyWithoutPurchaseOrderInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderItemCreateWithoutPurchaseOrderInput, Prisma.PurchaseOrderItemUncheckedCreateWithoutPurchaseOrderInput> | Prisma.PurchaseOrderItemCreateWithoutPurchaseOrderInput[] | Prisma.PurchaseOrderItemUncheckedCreateWithoutPurchaseOrderInput[];
    connectOrCreate?: Prisma.PurchaseOrderItemCreateOrConnectWithoutPurchaseOrderInput | Prisma.PurchaseOrderItemCreateOrConnectWithoutPurchaseOrderInput[];
    createMany?: Prisma.PurchaseOrderItemCreateManyPurchaseOrderInputEnvelope;
    connect?: Prisma.PurchaseOrderItemWhereUniqueInput | Prisma.PurchaseOrderItemWhereUniqueInput[];
};
export type PurchaseOrderItemUpdateManyWithoutPurchaseOrderNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderItemCreateWithoutPurchaseOrderInput, Prisma.PurchaseOrderItemUncheckedCreateWithoutPurchaseOrderInput> | Prisma.PurchaseOrderItemCreateWithoutPurchaseOrderInput[] | Prisma.PurchaseOrderItemUncheckedCreateWithoutPurchaseOrderInput[];
    connectOrCreate?: Prisma.PurchaseOrderItemCreateOrConnectWithoutPurchaseOrderInput | Prisma.PurchaseOrderItemCreateOrConnectWithoutPurchaseOrderInput[];
    upsert?: Prisma.PurchaseOrderItemUpsertWithWhereUniqueWithoutPurchaseOrderInput | Prisma.PurchaseOrderItemUpsertWithWhereUniqueWithoutPurchaseOrderInput[];
    createMany?: Prisma.PurchaseOrderItemCreateManyPurchaseOrderInputEnvelope;
    set?: Prisma.PurchaseOrderItemWhereUniqueInput | Prisma.PurchaseOrderItemWhereUniqueInput[];
    disconnect?: Prisma.PurchaseOrderItemWhereUniqueInput | Prisma.PurchaseOrderItemWhereUniqueInput[];
    delete?: Prisma.PurchaseOrderItemWhereUniqueInput | Prisma.PurchaseOrderItemWhereUniqueInput[];
    connect?: Prisma.PurchaseOrderItemWhereUniqueInput | Prisma.PurchaseOrderItemWhereUniqueInput[];
    update?: Prisma.PurchaseOrderItemUpdateWithWhereUniqueWithoutPurchaseOrderInput | Prisma.PurchaseOrderItemUpdateWithWhereUniqueWithoutPurchaseOrderInput[];
    updateMany?: Prisma.PurchaseOrderItemUpdateManyWithWhereWithoutPurchaseOrderInput | Prisma.PurchaseOrderItemUpdateManyWithWhereWithoutPurchaseOrderInput[];
    deleteMany?: Prisma.PurchaseOrderItemScalarWhereInput | Prisma.PurchaseOrderItemScalarWhereInput[];
};
export type PurchaseOrderItemUncheckedUpdateManyWithoutPurchaseOrderNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderItemCreateWithoutPurchaseOrderInput, Prisma.PurchaseOrderItemUncheckedCreateWithoutPurchaseOrderInput> | Prisma.PurchaseOrderItemCreateWithoutPurchaseOrderInput[] | Prisma.PurchaseOrderItemUncheckedCreateWithoutPurchaseOrderInput[];
    connectOrCreate?: Prisma.PurchaseOrderItemCreateOrConnectWithoutPurchaseOrderInput | Prisma.PurchaseOrderItemCreateOrConnectWithoutPurchaseOrderInput[];
    upsert?: Prisma.PurchaseOrderItemUpsertWithWhereUniqueWithoutPurchaseOrderInput | Prisma.PurchaseOrderItemUpsertWithWhereUniqueWithoutPurchaseOrderInput[];
    createMany?: Prisma.PurchaseOrderItemCreateManyPurchaseOrderInputEnvelope;
    set?: Prisma.PurchaseOrderItemWhereUniqueInput | Prisma.PurchaseOrderItemWhereUniqueInput[];
    disconnect?: Prisma.PurchaseOrderItemWhereUniqueInput | Prisma.PurchaseOrderItemWhereUniqueInput[];
    delete?: Prisma.PurchaseOrderItemWhereUniqueInput | Prisma.PurchaseOrderItemWhereUniqueInput[];
    connect?: Prisma.PurchaseOrderItemWhereUniqueInput | Prisma.PurchaseOrderItemWhereUniqueInput[];
    update?: Prisma.PurchaseOrderItemUpdateWithWhereUniqueWithoutPurchaseOrderInput | Prisma.PurchaseOrderItemUpdateWithWhereUniqueWithoutPurchaseOrderInput[];
    updateMany?: Prisma.PurchaseOrderItemUpdateManyWithWhereWithoutPurchaseOrderInput | Prisma.PurchaseOrderItemUpdateManyWithWhereWithoutPurchaseOrderInput[];
    deleteMany?: Prisma.PurchaseOrderItemScalarWhereInput | Prisma.PurchaseOrderItemScalarWhereInput[];
};
export type PurchaseOrderItemCreateWithoutProductInput = {
    id?: string;
    quantityOrdered: number;
    quantityReceived?: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    purchaseOrder: Prisma.PurchaseOrderCreateNestedOneWithoutItemsInput;
};
export type PurchaseOrderItemUncheckedCreateWithoutProductInput = {
    id?: string;
    purchaseOrderId: string;
    quantityOrdered: number;
    quantityReceived?: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PurchaseOrderItemCreateOrConnectWithoutProductInput = {
    where: Prisma.PurchaseOrderItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseOrderItemCreateWithoutProductInput, Prisma.PurchaseOrderItemUncheckedCreateWithoutProductInput>;
};
export type PurchaseOrderItemCreateManyProductInputEnvelope = {
    data: Prisma.PurchaseOrderItemCreateManyProductInput | Prisma.PurchaseOrderItemCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type PurchaseOrderItemUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.PurchaseOrderItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.PurchaseOrderItemUpdateWithoutProductInput, Prisma.PurchaseOrderItemUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.PurchaseOrderItemCreateWithoutProductInput, Prisma.PurchaseOrderItemUncheckedCreateWithoutProductInput>;
};
export type PurchaseOrderItemUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.PurchaseOrderItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.PurchaseOrderItemUpdateWithoutProductInput, Prisma.PurchaseOrderItemUncheckedUpdateWithoutProductInput>;
};
export type PurchaseOrderItemUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.PurchaseOrderItemScalarWhereInput;
    data: Prisma.XOR<Prisma.PurchaseOrderItemUpdateManyMutationInput, Prisma.PurchaseOrderItemUncheckedUpdateManyWithoutProductInput>;
};
export type PurchaseOrderItemScalarWhereInput = {
    AND?: Prisma.PurchaseOrderItemScalarWhereInput | Prisma.PurchaseOrderItemScalarWhereInput[];
    OR?: Prisma.PurchaseOrderItemScalarWhereInput[];
    NOT?: Prisma.PurchaseOrderItemScalarWhereInput | Prisma.PurchaseOrderItemScalarWhereInput[];
    id?: Prisma.StringFilter<"PurchaseOrderItem"> | string;
    purchaseOrderId?: Prisma.StringFilter<"PurchaseOrderItem"> | string;
    productId?: Prisma.StringFilter<"PurchaseOrderItem"> | string;
    quantityOrdered?: Prisma.IntFilter<"PurchaseOrderItem"> | number;
    quantityReceived?: Prisma.IntFilter<"PurchaseOrderItem"> | number;
    unitPrice?: Prisma.DecimalFilter<"PurchaseOrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFilter<"PurchaseOrderItem"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"PurchaseOrderItem"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PurchaseOrderItem"> | Date | string;
};
export type PurchaseOrderItemCreateWithoutPurchaseOrderInput = {
    id?: string;
    quantityOrdered: number;
    quantityReceived?: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutPurchaseOrderItemsInput;
};
export type PurchaseOrderItemUncheckedCreateWithoutPurchaseOrderInput = {
    id?: string;
    productId: string;
    quantityOrdered: number;
    quantityReceived?: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PurchaseOrderItemCreateOrConnectWithoutPurchaseOrderInput = {
    where: Prisma.PurchaseOrderItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseOrderItemCreateWithoutPurchaseOrderInput, Prisma.PurchaseOrderItemUncheckedCreateWithoutPurchaseOrderInput>;
};
export type PurchaseOrderItemCreateManyPurchaseOrderInputEnvelope = {
    data: Prisma.PurchaseOrderItemCreateManyPurchaseOrderInput | Prisma.PurchaseOrderItemCreateManyPurchaseOrderInput[];
    skipDuplicates?: boolean;
};
export type PurchaseOrderItemUpsertWithWhereUniqueWithoutPurchaseOrderInput = {
    where: Prisma.PurchaseOrderItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.PurchaseOrderItemUpdateWithoutPurchaseOrderInput, Prisma.PurchaseOrderItemUncheckedUpdateWithoutPurchaseOrderInput>;
    create: Prisma.XOR<Prisma.PurchaseOrderItemCreateWithoutPurchaseOrderInput, Prisma.PurchaseOrderItemUncheckedCreateWithoutPurchaseOrderInput>;
};
export type PurchaseOrderItemUpdateWithWhereUniqueWithoutPurchaseOrderInput = {
    where: Prisma.PurchaseOrderItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.PurchaseOrderItemUpdateWithoutPurchaseOrderInput, Prisma.PurchaseOrderItemUncheckedUpdateWithoutPurchaseOrderInput>;
};
export type PurchaseOrderItemUpdateManyWithWhereWithoutPurchaseOrderInput = {
    where: Prisma.PurchaseOrderItemScalarWhereInput;
    data: Prisma.XOR<Prisma.PurchaseOrderItemUpdateManyMutationInput, Prisma.PurchaseOrderItemUncheckedUpdateManyWithoutPurchaseOrderInput>;
};
export type PurchaseOrderItemCreateManyProductInput = {
    id?: string;
    purchaseOrderId: string;
    quantityOrdered: number;
    quantityReceived?: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PurchaseOrderItemUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityOrdered?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityReceived?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    purchaseOrder?: Prisma.PurchaseOrderUpdateOneRequiredWithoutItemsNestedInput;
};
export type PurchaseOrderItemUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityOrdered?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityReceived?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PurchaseOrderItemUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    purchaseOrderId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityOrdered?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityReceived?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PurchaseOrderItemCreateManyPurchaseOrderInput = {
    id?: string;
    productId: string;
    quantityOrdered: number;
    quantityReceived?: number;
    unitPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PurchaseOrderItemUpdateWithoutPurchaseOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityOrdered?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityReceived?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutPurchaseOrderItemsNestedInput;
};
export type PurchaseOrderItemUncheckedUpdateWithoutPurchaseOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityOrdered?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityReceived?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PurchaseOrderItemUncheckedUpdateManyWithoutPurchaseOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantityOrdered?: Prisma.IntFieldUpdateOperationsInput | number;
    quantityReceived?: Prisma.IntFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalPrice?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PurchaseOrderItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    purchaseOrderId?: boolean;
    productId?: boolean;
    quantityOrdered?: boolean;
    quantityReceived?: boolean;
    unitPrice?: boolean;
    totalPrice?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    purchaseOrder?: boolean | Prisma.PurchaseOrderDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchaseOrderItem"]>;
export type PurchaseOrderItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    purchaseOrderId?: boolean;
    productId?: boolean;
    quantityOrdered?: boolean;
    quantityReceived?: boolean;
    unitPrice?: boolean;
    totalPrice?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    purchaseOrder?: boolean | Prisma.PurchaseOrderDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchaseOrderItem"]>;
export type PurchaseOrderItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    purchaseOrderId?: boolean;
    productId?: boolean;
    quantityOrdered?: boolean;
    quantityReceived?: boolean;
    unitPrice?: boolean;
    totalPrice?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    purchaseOrder?: boolean | Prisma.PurchaseOrderDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchaseOrderItem"]>;
export type PurchaseOrderItemSelectScalar = {
    id?: boolean;
    purchaseOrderId?: boolean;
    productId?: boolean;
    quantityOrdered?: boolean;
    quantityReceived?: boolean;
    unitPrice?: boolean;
    totalPrice?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PurchaseOrderItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "purchaseOrderId" | "productId" | "quantityOrdered" | "quantityReceived" | "unitPrice" | "totalPrice" | "createdAt" | "updatedAt", ExtArgs["result"]["purchaseOrderItem"]>;
export type PurchaseOrderItemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | Prisma.PurchaseOrderDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type PurchaseOrderItemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | Prisma.PurchaseOrderDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type PurchaseOrderItemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    purchaseOrder?: boolean | Prisma.PurchaseOrderDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type $PurchaseOrderItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PurchaseOrderItem";
    objects: {
        purchaseOrder: Prisma.$PurchaseOrderPayload<ExtArgs>;
        product: Prisma.$ProductPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        purchaseOrderId: string;
        productId: string;
        quantityOrdered: number;
        quantityReceived: number;
        unitPrice: runtime.Decimal;
        totalPrice: runtime.Decimal;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["purchaseOrderItem"]>;
    composites: {};
};
export type PurchaseOrderItemGetPayload<S extends boolean | null | undefined | PurchaseOrderItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PurchaseOrderItemPayload, S>;
export type PurchaseOrderItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PurchaseOrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PurchaseOrderItemCountAggregateInputType | true;
};
export interface PurchaseOrderItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PurchaseOrderItem'];
        meta: {
            name: 'PurchaseOrderItem';
        };
    };
    findUnique<T extends PurchaseOrderItemFindUniqueArgs>(args: Prisma.SelectSubset<T, PurchaseOrderItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderItemClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PurchaseOrderItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PurchaseOrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderItemClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PurchaseOrderItemFindFirstArgs>(args?: Prisma.SelectSubset<T, PurchaseOrderItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderItemClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PurchaseOrderItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PurchaseOrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderItemClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PurchaseOrderItemFindManyArgs>(args?: Prisma.SelectSubset<T, PurchaseOrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PurchaseOrderItemCreateArgs>(args: Prisma.SelectSubset<T, PurchaseOrderItemCreateArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderItemClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PurchaseOrderItemCreateManyArgs>(args?: Prisma.SelectSubset<T, PurchaseOrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PurchaseOrderItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PurchaseOrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PurchaseOrderItemDeleteArgs>(args: Prisma.SelectSubset<T, PurchaseOrderItemDeleteArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderItemClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PurchaseOrderItemUpdateArgs>(args: Prisma.SelectSubset<T, PurchaseOrderItemUpdateArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderItemClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PurchaseOrderItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, PurchaseOrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PurchaseOrderItemUpdateManyArgs>(args: Prisma.SelectSubset<T, PurchaseOrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PurchaseOrderItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PurchaseOrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PurchaseOrderItemUpsertArgs>(args: Prisma.SelectSubset<T, PurchaseOrderItemUpsertArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderItemClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PurchaseOrderItemCountArgs>(args?: Prisma.Subset<T, PurchaseOrderItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PurchaseOrderItemCountAggregateOutputType> : number>;
    aggregate<T extends PurchaseOrderItemAggregateArgs>(args: Prisma.Subset<T, PurchaseOrderItemAggregateArgs>): Prisma.PrismaPromise<GetPurchaseOrderItemAggregateType<T>>;
    groupBy<T extends PurchaseOrderItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PurchaseOrderItemGroupByArgs['orderBy'];
    } : {
        orderBy?: PurchaseOrderItemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PurchaseOrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PurchaseOrderItemFieldRefs;
}
export interface Prisma__PurchaseOrderItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    purchaseOrder<T extends Prisma.PurchaseOrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PurchaseOrderDefaultArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PurchaseOrderItemFieldRefs {
    readonly id: Prisma.FieldRef<"PurchaseOrderItem", 'String'>;
    readonly purchaseOrderId: Prisma.FieldRef<"PurchaseOrderItem", 'String'>;
    readonly productId: Prisma.FieldRef<"PurchaseOrderItem", 'String'>;
    readonly quantityOrdered: Prisma.FieldRef<"PurchaseOrderItem", 'Int'>;
    readonly quantityReceived: Prisma.FieldRef<"PurchaseOrderItem", 'Int'>;
    readonly unitPrice: Prisma.FieldRef<"PurchaseOrderItem", 'Decimal'>;
    readonly totalPrice: Prisma.FieldRef<"PurchaseOrderItem", 'Decimal'>;
    readonly createdAt: Prisma.FieldRef<"PurchaseOrderItem", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"PurchaseOrderItem", 'DateTime'>;
}
export type PurchaseOrderItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderItemSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderItemOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderItemInclude<ExtArgs> | null;
    where: Prisma.PurchaseOrderItemWhereUniqueInput;
};
export type PurchaseOrderItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderItemSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderItemOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderItemInclude<ExtArgs> | null;
    where: Prisma.PurchaseOrderItemWhereUniqueInput;
};
export type PurchaseOrderItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PurchaseOrderItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PurchaseOrderItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PurchaseOrderItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderItemSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderItemOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PurchaseOrderItemCreateInput, Prisma.PurchaseOrderItemUncheckedCreateInput>;
};
export type PurchaseOrderItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PurchaseOrderItemCreateManyInput | Prisma.PurchaseOrderItemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PurchaseOrderItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderItemSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderItemOmit<ExtArgs> | null;
    data: Prisma.PurchaseOrderItemCreateManyInput | Prisma.PurchaseOrderItemCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PurchaseOrderItemIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PurchaseOrderItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderItemSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderItemOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PurchaseOrderItemUpdateInput, Prisma.PurchaseOrderItemUncheckedUpdateInput>;
    where: Prisma.PurchaseOrderItemWhereUniqueInput;
};
export type PurchaseOrderItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PurchaseOrderItemUpdateManyMutationInput, Prisma.PurchaseOrderItemUncheckedUpdateManyInput>;
    where?: Prisma.PurchaseOrderItemWhereInput;
    limit?: number;
};
export type PurchaseOrderItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderItemSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderItemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PurchaseOrderItemUpdateManyMutationInput, Prisma.PurchaseOrderItemUncheckedUpdateManyInput>;
    where?: Prisma.PurchaseOrderItemWhereInput;
    limit?: number;
    include?: Prisma.PurchaseOrderItemIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PurchaseOrderItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderItemSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderItemOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderItemInclude<ExtArgs> | null;
    where: Prisma.PurchaseOrderItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseOrderItemCreateInput, Prisma.PurchaseOrderItemUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PurchaseOrderItemUpdateInput, Prisma.PurchaseOrderItemUncheckedUpdateInput>;
};
export type PurchaseOrderItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderItemSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderItemOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderItemInclude<ExtArgs> | null;
    where: Prisma.PurchaseOrderItemWhereUniqueInput;
};
export type PurchaseOrderItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseOrderItemWhereInput;
    limit?: number;
};
export type PurchaseOrderItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderItemSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderItemOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderItemInclude<ExtArgs> | null;
};
export {};
