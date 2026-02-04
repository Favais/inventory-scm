import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type PurchaseOrderModel = runtime.Types.Result.DefaultSelection<Prisma.$PurchaseOrderPayload>;
export type AggregatePurchaseOrder = {
    _count: PurchaseOrderCountAggregateOutputType | null;
    _avg: PurchaseOrderAvgAggregateOutputType | null;
    _sum: PurchaseOrderSumAggregateOutputType | null;
    _min: PurchaseOrderMinAggregateOutputType | null;
    _max: PurchaseOrderMaxAggregateOutputType | null;
};
export type PurchaseOrderAvgAggregateOutputType = {
    totalAmount: runtime.Decimal | null;
};
export type PurchaseOrderSumAggregateOutputType = {
    totalAmount: runtime.Decimal | null;
};
export type PurchaseOrderMinAggregateOutputType = {
    id: string | null;
    poNumber: string | null;
    supplierId: string | null;
    warehouseId: string | null;
    status: $Enums.PurchaseOrderStatus | null;
    orderDate: Date | null;
    expectedDelivery: Date | null;
    totalAmount: runtime.Decimal | null;
    notes: string | null;
    createdBy: string | null;
    approvedBy: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PurchaseOrderMaxAggregateOutputType = {
    id: string | null;
    poNumber: string | null;
    supplierId: string | null;
    warehouseId: string | null;
    status: $Enums.PurchaseOrderStatus | null;
    orderDate: Date | null;
    expectedDelivery: Date | null;
    totalAmount: runtime.Decimal | null;
    notes: string | null;
    createdBy: string | null;
    approvedBy: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PurchaseOrderCountAggregateOutputType = {
    id: number;
    poNumber: number;
    supplierId: number;
    warehouseId: number;
    status: number;
    orderDate: number;
    expectedDelivery: number;
    totalAmount: number;
    notes: number;
    createdBy: number;
    approvedBy: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PurchaseOrderAvgAggregateInputType = {
    totalAmount?: true;
};
export type PurchaseOrderSumAggregateInputType = {
    totalAmount?: true;
};
export type PurchaseOrderMinAggregateInputType = {
    id?: true;
    poNumber?: true;
    supplierId?: true;
    warehouseId?: true;
    status?: true;
    orderDate?: true;
    expectedDelivery?: true;
    totalAmount?: true;
    notes?: true;
    createdBy?: true;
    approvedBy?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PurchaseOrderMaxAggregateInputType = {
    id?: true;
    poNumber?: true;
    supplierId?: true;
    warehouseId?: true;
    status?: true;
    orderDate?: true;
    expectedDelivery?: true;
    totalAmount?: true;
    notes?: true;
    createdBy?: true;
    approvedBy?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PurchaseOrderCountAggregateInputType = {
    id?: true;
    poNumber?: true;
    supplierId?: true;
    warehouseId?: true;
    status?: true;
    orderDate?: true;
    expectedDelivery?: true;
    totalAmount?: true;
    notes?: true;
    createdBy?: true;
    approvedBy?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PurchaseOrderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseOrderWhereInput;
    orderBy?: Prisma.PurchaseOrderOrderByWithRelationInput | Prisma.PurchaseOrderOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PurchaseOrderCountAggregateInputType;
    _avg?: PurchaseOrderAvgAggregateInputType;
    _sum?: PurchaseOrderSumAggregateInputType;
    _min?: PurchaseOrderMinAggregateInputType;
    _max?: PurchaseOrderMaxAggregateInputType;
};
export type GetPurchaseOrderAggregateType<T extends PurchaseOrderAggregateArgs> = {
    [P in keyof T & keyof AggregatePurchaseOrder]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePurchaseOrder[P]> : Prisma.GetScalarType<T[P], AggregatePurchaseOrder[P]>;
};
export type PurchaseOrderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseOrderWhereInput;
    orderBy?: Prisma.PurchaseOrderOrderByWithAggregationInput | Prisma.PurchaseOrderOrderByWithAggregationInput[];
    by: Prisma.PurchaseOrderScalarFieldEnum[] | Prisma.PurchaseOrderScalarFieldEnum;
    having?: Prisma.PurchaseOrderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PurchaseOrderCountAggregateInputType | true;
    _avg?: PurchaseOrderAvgAggregateInputType;
    _sum?: PurchaseOrderSumAggregateInputType;
    _min?: PurchaseOrderMinAggregateInputType;
    _max?: PurchaseOrderMaxAggregateInputType;
};
export type PurchaseOrderGroupByOutputType = {
    id: string;
    poNumber: string;
    supplierId: string;
    warehouseId: string;
    status: $Enums.PurchaseOrderStatus;
    orderDate: Date;
    expectedDelivery: Date | null;
    totalAmount: runtime.Decimal;
    notes: string | null;
    createdBy: string;
    approvedBy: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PurchaseOrderCountAggregateOutputType | null;
    _avg: PurchaseOrderAvgAggregateOutputType | null;
    _sum: PurchaseOrderSumAggregateOutputType | null;
    _min: PurchaseOrderMinAggregateOutputType | null;
    _max: PurchaseOrderMaxAggregateOutputType | null;
};
type GetPurchaseOrderGroupByPayload<T extends PurchaseOrderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PurchaseOrderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PurchaseOrderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PurchaseOrderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PurchaseOrderGroupByOutputType[P]>;
}>>;
export type PurchaseOrderWhereInput = {
    AND?: Prisma.PurchaseOrderWhereInput | Prisma.PurchaseOrderWhereInput[];
    OR?: Prisma.PurchaseOrderWhereInput[];
    NOT?: Prisma.PurchaseOrderWhereInput | Prisma.PurchaseOrderWhereInput[];
    id?: Prisma.StringFilter<"PurchaseOrder"> | string;
    poNumber?: Prisma.StringFilter<"PurchaseOrder"> | string;
    supplierId?: Prisma.StringFilter<"PurchaseOrder"> | string;
    warehouseId?: Prisma.StringFilter<"PurchaseOrder"> | string;
    status?: Prisma.EnumPurchaseOrderStatusFilter<"PurchaseOrder"> | $Enums.PurchaseOrderStatus;
    orderDate?: Prisma.DateTimeFilter<"PurchaseOrder"> | Date | string;
    expectedDelivery?: Prisma.DateTimeNullableFilter<"PurchaseOrder"> | Date | string | null;
    totalAmount?: Prisma.DecimalFilter<"PurchaseOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.StringNullableFilter<"PurchaseOrder"> | string | null;
    createdBy?: Prisma.StringFilter<"PurchaseOrder"> | string;
    approvedBy?: Prisma.StringNullableFilter<"PurchaseOrder"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PurchaseOrder"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PurchaseOrder"> | Date | string;
    supplier?: Prisma.XOR<Prisma.SupplierScalarRelationFilter, Prisma.SupplierWhereInput>;
    warehouse?: Prisma.XOR<Prisma.WarehouseScalarRelationFilter, Prisma.WarehouseWhereInput>;
    creator?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    approver?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    items?: Prisma.PurchaseOrderItemListRelationFilter;
};
export type PurchaseOrderOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    poNumber?: Prisma.SortOrder;
    supplierId?: Prisma.SortOrder;
    warehouseId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    orderDate?: Prisma.SortOrder;
    expectedDelivery?: Prisma.SortOrderInput | Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    approvedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    supplier?: Prisma.SupplierOrderByWithRelationInput;
    warehouse?: Prisma.WarehouseOrderByWithRelationInput;
    creator?: Prisma.UserOrderByWithRelationInput;
    approver?: Prisma.UserOrderByWithRelationInput;
    items?: Prisma.PurchaseOrderItemOrderByRelationAggregateInput;
};
export type PurchaseOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    poNumber?: string;
    AND?: Prisma.PurchaseOrderWhereInput | Prisma.PurchaseOrderWhereInput[];
    OR?: Prisma.PurchaseOrderWhereInput[];
    NOT?: Prisma.PurchaseOrderWhereInput | Prisma.PurchaseOrderWhereInput[];
    supplierId?: Prisma.StringFilter<"PurchaseOrder"> | string;
    warehouseId?: Prisma.StringFilter<"PurchaseOrder"> | string;
    status?: Prisma.EnumPurchaseOrderStatusFilter<"PurchaseOrder"> | $Enums.PurchaseOrderStatus;
    orderDate?: Prisma.DateTimeFilter<"PurchaseOrder"> | Date | string;
    expectedDelivery?: Prisma.DateTimeNullableFilter<"PurchaseOrder"> | Date | string | null;
    totalAmount?: Prisma.DecimalFilter<"PurchaseOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.StringNullableFilter<"PurchaseOrder"> | string | null;
    createdBy?: Prisma.StringFilter<"PurchaseOrder"> | string;
    approvedBy?: Prisma.StringNullableFilter<"PurchaseOrder"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PurchaseOrder"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PurchaseOrder"> | Date | string;
    supplier?: Prisma.XOR<Prisma.SupplierScalarRelationFilter, Prisma.SupplierWhereInput>;
    warehouse?: Prisma.XOR<Prisma.WarehouseScalarRelationFilter, Prisma.WarehouseWhereInput>;
    creator?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    approver?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    items?: Prisma.PurchaseOrderItemListRelationFilter;
}, "id" | "poNumber">;
export type PurchaseOrderOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    poNumber?: Prisma.SortOrder;
    supplierId?: Prisma.SortOrder;
    warehouseId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    orderDate?: Prisma.SortOrder;
    expectedDelivery?: Prisma.SortOrderInput | Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    approvedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PurchaseOrderCountOrderByAggregateInput;
    _avg?: Prisma.PurchaseOrderAvgOrderByAggregateInput;
    _max?: Prisma.PurchaseOrderMaxOrderByAggregateInput;
    _min?: Prisma.PurchaseOrderMinOrderByAggregateInput;
    _sum?: Prisma.PurchaseOrderSumOrderByAggregateInput;
};
export type PurchaseOrderScalarWhereWithAggregatesInput = {
    AND?: Prisma.PurchaseOrderScalarWhereWithAggregatesInput | Prisma.PurchaseOrderScalarWhereWithAggregatesInput[];
    OR?: Prisma.PurchaseOrderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PurchaseOrderScalarWhereWithAggregatesInput | Prisma.PurchaseOrderScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PurchaseOrder"> | string;
    poNumber?: Prisma.StringWithAggregatesFilter<"PurchaseOrder"> | string;
    supplierId?: Prisma.StringWithAggregatesFilter<"PurchaseOrder"> | string;
    warehouseId?: Prisma.StringWithAggregatesFilter<"PurchaseOrder"> | string;
    status?: Prisma.EnumPurchaseOrderStatusWithAggregatesFilter<"PurchaseOrder"> | $Enums.PurchaseOrderStatus;
    orderDate?: Prisma.DateTimeWithAggregatesFilter<"PurchaseOrder"> | Date | string;
    expectedDelivery?: Prisma.DateTimeNullableWithAggregatesFilter<"PurchaseOrder"> | Date | string | null;
    totalAmount?: Prisma.DecimalWithAggregatesFilter<"PurchaseOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.StringNullableWithAggregatesFilter<"PurchaseOrder"> | string | null;
    createdBy?: Prisma.StringWithAggregatesFilter<"PurchaseOrder"> | string;
    approvedBy?: Prisma.StringNullableWithAggregatesFilter<"PurchaseOrder"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PurchaseOrder"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"PurchaseOrder"> | Date | string;
};
export type PurchaseOrderCreateInput = {
    id?: string;
    poNumber: string;
    status: $Enums.PurchaseOrderStatus;
    orderDate: Date | string;
    expectedDelivery?: Date | string | null;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    supplier: Prisma.SupplierCreateNestedOneWithoutPurchaseOrdersInput;
    warehouse: Prisma.WarehouseCreateNestedOneWithoutPurchaseOrdersInput;
    creator: Prisma.UserCreateNestedOneWithoutPurchaseOrdersInput;
    approver?: Prisma.UserCreateNestedOneWithoutApprovedPOsInput;
    items?: Prisma.PurchaseOrderItemCreateNestedManyWithoutPurchaseOrderInput;
};
export type PurchaseOrderUncheckedCreateInput = {
    id?: string;
    poNumber: string;
    supplierId: string;
    warehouseId: string;
    status: $Enums.PurchaseOrderStatus;
    orderDate: Date | string;
    expectedDelivery?: Date | string | null;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdBy: string;
    approvedBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.PurchaseOrderItemUncheckedCreateNestedManyWithoutPurchaseOrderInput;
};
export type PurchaseOrderUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    orderDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedDelivery?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplier?: Prisma.SupplierUpdateOneRequiredWithoutPurchaseOrdersNestedInput;
    warehouse?: Prisma.WarehouseUpdateOneRequiredWithoutPurchaseOrdersNestedInput;
    creator?: Prisma.UserUpdateOneRequiredWithoutPurchaseOrdersNestedInput;
    approver?: Prisma.UserUpdateOneWithoutApprovedPOsNestedInput;
    items?: Prisma.PurchaseOrderItemUpdateManyWithoutPurchaseOrderNestedInput;
};
export type PurchaseOrderUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierId?: Prisma.StringFieldUpdateOperationsInput | string;
    warehouseId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    orderDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedDelivery?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.PurchaseOrderItemUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
};
export type PurchaseOrderCreateManyInput = {
    id?: string;
    poNumber: string;
    supplierId: string;
    warehouseId: string;
    status: $Enums.PurchaseOrderStatus;
    orderDate: Date | string;
    expectedDelivery?: Date | string | null;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdBy: string;
    approvedBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PurchaseOrderUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    orderDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedDelivery?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PurchaseOrderUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierId?: Prisma.StringFieldUpdateOperationsInput | string;
    warehouseId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    orderDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedDelivery?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PurchaseOrderListRelationFilter = {
    every?: Prisma.PurchaseOrderWhereInput;
    some?: Prisma.PurchaseOrderWhereInput;
    none?: Prisma.PurchaseOrderWhereInput;
};
export type PurchaseOrderOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PurchaseOrderCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    poNumber?: Prisma.SortOrder;
    supplierId?: Prisma.SortOrder;
    warehouseId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    orderDate?: Prisma.SortOrder;
    expectedDelivery?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    approvedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PurchaseOrderAvgOrderByAggregateInput = {
    totalAmount?: Prisma.SortOrder;
};
export type PurchaseOrderMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    poNumber?: Prisma.SortOrder;
    supplierId?: Prisma.SortOrder;
    warehouseId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    orderDate?: Prisma.SortOrder;
    expectedDelivery?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    approvedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PurchaseOrderMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    poNumber?: Prisma.SortOrder;
    supplierId?: Prisma.SortOrder;
    warehouseId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    orderDate?: Prisma.SortOrder;
    expectedDelivery?: Prisma.SortOrder;
    totalAmount?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    approvedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PurchaseOrderSumOrderByAggregateInput = {
    totalAmount?: Prisma.SortOrder;
};
export type PurchaseOrderScalarRelationFilter = {
    is?: Prisma.PurchaseOrderWhereInput;
    isNot?: Prisma.PurchaseOrderWhereInput;
};
export type PurchaseOrderCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutCreatorInput, Prisma.PurchaseOrderUncheckedCreateWithoutCreatorInput> | Prisma.PurchaseOrderCreateWithoutCreatorInput[] | Prisma.PurchaseOrderUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutCreatorInput | Prisma.PurchaseOrderCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.PurchaseOrderCreateManyCreatorInputEnvelope;
    connect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
};
export type PurchaseOrderCreateNestedManyWithoutApproverInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutApproverInput, Prisma.PurchaseOrderUncheckedCreateWithoutApproverInput> | Prisma.PurchaseOrderCreateWithoutApproverInput[] | Prisma.PurchaseOrderUncheckedCreateWithoutApproverInput[];
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutApproverInput | Prisma.PurchaseOrderCreateOrConnectWithoutApproverInput[];
    createMany?: Prisma.PurchaseOrderCreateManyApproverInputEnvelope;
    connect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
};
export type PurchaseOrderUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutCreatorInput, Prisma.PurchaseOrderUncheckedCreateWithoutCreatorInput> | Prisma.PurchaseOrderCreateWithoutCreatorInput[] | Prisma.PurchaseOrderUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutCreatorInput | Prisma.PurchaseOrderCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.PurchaseOrderCreateManyCreatorInputEnvelope;
    connect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
};
export type PurchaseOrderUncheckedCreateNestedManyWithoutApproverInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutApproverInput, Prisma.PurchaseOrderUncheckedCreateWithoutApproverInput> | Prisma.PurchaseOrderCreateWithoutApproverInput[] | Prisma.PurchaseOrderUncheckedCreateWithoutApproverInput[];
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutApproverInput | Prisma.PurchaseOrderCreateOrConnectWithoutApproverInput[];
    createMany?: Prisma.PurchaseOrderCreateManyApproverInputEnvelope;
    connect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
};
export type PurchaseOrderUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutCreatorInput, Prisma.PurchaseOrderUncheckedCreateWithoutCreatorInput> | Prisma.PurchaseOrderCreateWithoutCreatorInput[] | Prisma.PurchaseOrderUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutCreatorInput | Prisma.PurchaseOrderCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.PurchaseOrderUpsertWithWhereUniqueWithoutCreatorInput | Prisma.PurchaseOrderUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.PurchaseOrderCreateManyCreatorInputEnvelope;
    set?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    disconnect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    delete?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    connect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    update?: Prisma.PurchaseOrderUpdateWithWhereUniqueWithoutCreatorInput | Prisma.PurchaseOrderUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.PurchaseOrderUpdateManyWithWhereWithoutCreatorInput | Prisma.PurchaseOrderUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.PurchaseOrderScalarWhereInput | Prisma.PurchaseOrderScalarWhereInput[];
};
export type PurchaseOrderUpdateManyWithoutApproverNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutApproverInput, Prisma.PurchaseOrderUncheckedCreateWithoutApproverInput> | Prisma.PurchaseOrderCreateWithoutApproverInput[] | Prisma.PurchaseOrderUncheckedCreateWithoutApproverInput[];
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutApproverInput | Prisma.PurchaseOrderCreateOrConnectWithoutApproverInput[];
    upsert?: Prisma.PurchaseOrderUpsertWithWhereUniqueWithoutApproverInput | Prisma.PurchaseOrderUpsertWithWhereUniqueWithoutApproverInput[];
    createMany?: Prisma.PurchaseOrderCreateManyApproverInputEnvelope;
    set?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    disconnect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    delete?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    connect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    update?: Prisma.PurchaseOrderUpdateWithWhereUniqueWithoutApproverInput | Prisma.PurchaseOrderUpdateWithWhereUniqueWithoutApproverInput[];
    updateMany?: Prisma.PurchaseOrderUpdateManyWithWhereWithoutApproverInput | Prisma.PurchaseOrderUpdateManyWithWhereWithoutApproverInput[];
    deleteMany?: Prisma.PurchaseOrderScalarWhereInput | Prisma.PurchaseOrderScalarWhereInput[];
};
export type PurchaseOrderUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutCreatorInput, Prisma.PurchaseOrderUncheckedCreateWithoutCreatorInput> | Prisma.PurchaseOrderCreateWithoutCreatorInput[] | Prisma.PurchaseOrderUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutCreatorInput | Prisma.PurchaseOrderCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.PurchaseOrderUpsertWithWhereUniqueWithoutCreatorInput | Prisma.PurchaseOrderUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.PurchaseOrderCreateManyCreatorInputEnvelope;
    set?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    disconnect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    delete?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    connect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    update?: Prisma.PurchaseOrderUpdateWithWhereUniqueWithoutCreatorInput | Prisma.PurchaseOrderUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.PurchaseOrderUpdateManyWithWhereWithoutCreatorInput | Prisma.PurchaseOrderUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.PurchaseOrderScalarWhereInput | Prisma.PurchaseOrderScalarWhereInput[];
};
export type PurchaseOrderUncheckedUpdateManyWithoutApproverNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutApproverInput, Prisma.PurchaseOrderUncheckedCreateWithoutApproverInput> | Prisma.PurchaseOrderCreateWithoutApproverInput[] | Prisma.PurchaseOrderUncheckedCreateWithoutApproverInput[];
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutApproverInput | Prisma.PurchaseOrderCreateOrConnectWithoutApproverInput[];
    upsert?: Prisma.PurchaseOrderUpsertWithWhereUniqueWithoutApproverInput | Prisma.PurchaseOrderUpsertWithWhereUniqueWithoutApproverInput[];
    createMany?: Prisma.PurchaseOrderCreateManyApproverInputEnvelope;
    set?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    disconnect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    delete?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    connect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    update?: Prisma.PurchaseOrderUpdateWithWhereUniqueWithoutApproverInput | Prisma.PurchaseOrderUpdateWithWhereUniqueWithoutApproverInput[];
    updateMany?: Prisma.PurchaseOrderUpdateManyWithWhereWithoutApproverInput | Prisma.PurchaseOrderUpdateManyWithWhereWithoutApproverInput[];
    deleteMany?: Prisma.PurchaseOrderScalarWhereInput | Prisma.PurchaseOrderScalarWhereInput[];
};
export type PurchaseOrderCreateNestedManyWithoutWarehouseInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutWarehouseInput, Prisma.PurchaseOrderUncheckedCreateWithoutWarehouseInput> | Prisma.PurchaseOrderCreateWithoutWarehouseInput[] | Prisma.PurchaseOrderUncheckedCreateWithoutWarehouseInput[];
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutWarehouseInput | Prisma.PurchaseOrderCreateOrConnectWithoutWarehouseInput[];
    createMany?: Prisma.PurchaseOrderCreateManyWarehouseInputEnvelope;
    connect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
};
export type PurchaseOrderUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutWarehouseInput, Prisma.PurchaseOrderUncheckedCreateWithoutWarehouseInput> | Prisma.PurchaseOrderCreateWithoutWarehouseInput[] | Prisma.PurchaseOrderUncheckedCreateWithoutWarehouseInput[];
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutWarehouseInput | Prisma.PurchaseOrderCreateOrConnectWithoutWarehouseInput[];
    createMany?: Prisma.PurchaseOrderCreateManyWarehouseInputEnvelope;
    connect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
};
export type PurchaseOrderUpdateManyWithoutWarehouseNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutWarehouseInput, Prisma.PurchaseOrderUncheckedCreateWithoutWarehouseInput> | Prisma.PurchaseOrderCreateWithoutWarehouseInput[] | Prisma.PurchaseOrderUncheckedCreateWithoutWarehouseInput[];
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutWarehouseInput | Prisma.PurchaseOrderCreateOrConnectWithoutWarehouseInput[];
    upsert?: Prisma.PurchaseOrderUpsertWithWhereUniqueWithoutWarehouseInput | Prisma.PurchaseOrderUpsertWithWhereUniqueWithoutWarehouseInput[];
    createMany?: Prisma.PurchaseOrderCreateManyWarehouseInputEnvelope;
    set?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    disconnect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    delete?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    connect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    update?: Prisma.PurchaseOrderUpdateWithWhereUniqueWithoutWarehouseInput | Prisma.PurchaseOrderUpdateWithWhereUniqueWithoutWarehouseInput[];
    updateMany?: Prisma.PurchaseOrderUpdateManyWithWhereWithoutWarehouseInput | Prisma.PurchaseOrderUpdateManyWithWhereWithoutWarehouseInput[];
    deleteMany?: Prisma.PurchaseOrderScalarWhereInput | Prisma.PurchaseOrderScalarWhereInput[];
};
export type PurchaseOrderUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutWarehouseInput, Prisma.PurchaseOrderUncheckedCreateWithoutWarehouseInput> | Prisma.PurchaseOrderCreateWithoutWarehouseInput[] | Prisma.PurchaseOrderUncheckedCreateWithoutWarehouseInput[];
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutWarehouseInput | Prisma.PurchaseOrderCreateOrConnectWithoutWarehouseInput[];
    upsert?: Prisma.PurchaseOrderUpsertWithWhereUniqueWithoutWarehouseInput | Prisma.PurchaseOrderUpsertWithWhereUniqueWithoutWarehouseInput[];
    createMany?: Prisma.PurchaseOrderCreateManyWarehouseInputEnvelope;
    set?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    disconnect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    delete?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    connect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    update?: Prisma.PurchaseOrderUpdateWithWhereUniqueWithoutWarehouseInput | Prisma.PurchaseOrderUpdateWithWhereUniqueWithoutWarehouseInput[];
    updateMany?: Prisma.PurchaseOrderUpdateManyWithWhereWithoutWarehouseInput | Prisma.PurchaseOrderUpdateManyWithWhereWithoutWarehouseInput[];
    deleteMany?: Prisma.PurchaseOrderScalarWhereInput | Prisma.PurchaseOrderScalarWhereInput[];
};
export type EnumPurchaseOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.PurchaseOrderStatus;
};
export type PurchaseOrderCreateNestedOneWithoutItemsInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutItemsInput, Prisma.PurchaseOrderUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutItemsInput;
    connect?: Prisma.PurchaseOrderWhereUniqueInput;
};
export type PurchaseOrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutItemsInput, Prisma.PurchaseOrderUncheckedCreateWithoutItemsInput>;
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutItemsInput;
    upsert?: Prisma.PurchaseOrderUpsertWithoutItemsInput;
    connect?: Prisma.PurchaseOrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PurchaseOrderUpdateToOneWithWhereWithoutItemsInput, Prisma.PurchaseOrderUpdateWithoutItemsInput>, Prisma.PurchaseOrderUncheckedUpdateWithoutItemsInput>;
};
export type PurchaseOrderCreateNestedManyWithoutSupplierInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutSupplierInput, Prisma.PurchaseOrderUncheckedCreateWithoutSupplierInput> | Prisma.PurchaseOrderCreateWithoutSupplierInput[] | Prisma.PurchaseOrderUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutSupplierInput | Prisma.PurchaseOrderCreateOrConnectWithoutSupplierInput[];
    createMany?: Prisma.PurchaseOrderCreateManySupplierInputEnvelope;
    connect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
};
export type PurchaseOrderUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutSupplierInput, Prisma.PurchaseOrderUncheckedCreateWithoutSupplierInput> | Prisma.PurchaseOrderCreateWithoutSupplierInput[] | Prisma.PurchaseOrderUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutSupplierInput | Prisma.PurchaseOrderCreateOrConnectWithoutSupplierInput[];
    createMany?: Prisma.PurchaseOrderCreateManySupplierInputEnvelope;
    connect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
};
export type PurchaseOrderUpdateManyWithoutSupplierNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutSupplierInput, Prisma.PurchaseOrderUncheckedCreateWithoutSupplierInput> | Prisma.PurchaseOrderCreateWithoutSupplierInput[] | Prisma.PurchaseOrderUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutSupplierInput | Prisma.PurchaseOrderCreateOrConnectWithoutSupplierInput[];
    upsert?: Prisma.PurchaseOrderUpsertWithWhereUniqueWithoutSupplierInput | Prisma.PurchaseOrderUpsertWithWhereUniqueWithoutSupplierInput[];
    createMany?: Prisma.PurchaseOrderCreateManySupplierInputEnvelope;
    set?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    disconnect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    delete?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    connect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    update?: Prisma.PurchaseOrderUpdateWithWhereUniqueWithoutSupplierInput | Prisma.PurchaseOrderUpdateWithWhereUniqueWithoutSupplierInput[];
    updateMany?: Prisma.PurchaseOrderUpdateManyWithWhereWithoutSupplierInput | Prisma.PurchaseOrderUpdateManyWithWhereWithoutSupplierInput[];
    deleteMany?: Prisma.PurchaseOrderScalarWhereInput | Prisma.PurchaseOrderScalarWhereInput[];
};
export type PurchaseOrderUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutSupplierInput, Prisma.PurchaseOrderUncheckedCreateWithoutSupplierInput> | Prisma.PurchaseOrderCreateWithoutSupplierInput[] | Prisma.PurchaseOrderUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.PurchaseOrderCreateOrConnectWithoutSupplierInput | Prisma.PurchaseOrderCreateOrConnectWithoutSupplierInput[];
    upsert?: Prisma.PurchaseOrderUpsertWithWhereUniqueWithoutSupplierInput | Prisma.PurchaseOrderUpsertWithWhereUniqueWithoutSupplierInput[];
    createMany?: Prisma.PurchaseOrderCreateManySupplierInputEnvelope;
    set?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    disconnect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    delete?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    connect?: Prisma.PurchaseOrderWhereUniqueInput | Prisma.PurchaseOrderWhereUniqueInput[];
    update?: Prisma.PurchaseOrderUpdateWithWhereUniqueWithoutSupplierInput | Prisma.PurchaseOrderUpdateWithWhereUniqueWithoutSupplierInput[];
    updateMany?: Prisma.PurchaseOrderUpdateManyWithWhereWithoutSupplierInput | Prisma.PurchaseOrderUpdateManyWithWhereWithoutSupplierInput[];
    deleteMany?: Prisma.PurchaseOrderScalarWhereInput | Prisma.PurchaseOrderScalarWhereInput[];
};
export type PurchaseOrderCreateWithoutCreatorInput = {
    id?: string;
    poNumber: string;
    status: $Enums.PurchaseOrderStatus;
    orderDate: Date | string;
    expectedDelivery?: Date | string | null;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    supplier: Prisma.SupplierCreateNestedOneWithoutPurchaseOrdersInput;
    warehouse: Prisma.WarehouseCreateNestedOneWithoutPurchaseOrdersInput;
    approver?: Prisma.UserCreateNestedOneWithoutApprovedPOsInput;
    items?: Prisma.PurchaseOrderItemCreateNestedManyWithoutPurchaseOrderInput;
};
export type PurchaseOrderUncheckedCreateWithoutCreatorInput = {
    id?: string;
    poNumber: string;
    supplierId: string;
    warehouseId: string;
    status: $Enums.PurchaseOrderStatus;
    orderDate: Date | string;
    expectedDelivery?: Date | string | null;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    approvedBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.PurchaseOrderItemUncheckedCreateNestedManyWithoutPurchaseOrderInput;
};
export type PurchaseOrderCreateOrConnectWithoutCreatorInput = {
    where: Prisma.PurchaseOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutCreatorInput, Prisma.PurchaseOrderUncheckedCreateWithoutCreatorInput>;
};
export type PurchaseOrderCreateManyCreatorInputEnvelope = {
    data: Prisma.PurchaseOrderCreateManyCreatorInput | Prisma.PurchaseOrderCreateManyCreatorInput[];
    skipDuplicates?: boolean;
};
export type PurchaseOrderCreateWithoutApproverInput = {
    id?: string;
    poNumber: string;
    status: $Enums.PurchaseOrderStatus;
    orderDate: Date | string;
    expectedDelivery?: Date | string | null;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    supplier: Prisma.SupplierCreateNestedOneWithoutPurchaseOrdersInput;
    warehouse: Prisma.WarehouseCreateNestedOneWithoutPurchaseOrdersInput;
    creator: Prisma.UserCreateNestedOneWithoutPurchaseOrdersInput;
    items?: Prisma.PurchaseOrderItemCreateNestedManyWithoutPurchaseOrderInput;
};
export type PurchaseOrderUncheckedCreateWithoutApproverInput = {
    id?: string;
    poNumber: string;
    supplierId: string;
    warehouseId: string;
    status: $Enums.PurchaseOrderStatus;
    orderDate: Date | string;
    expectedDelivery?: Date | string | null;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdBy: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.PurchaseOrderItemUncheckedCreateNestedManyWithoutPurchaseOrderInput;
};
export type PurchaseOrderCreateOrConnectWithoutApproverInput = {
    where: Prisma.PurchaseOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutApproverInput, Prisma.PurchaseOrderUncheckedCreateWithoutApproverInput>;
};
export type PurchaseOrderCreateManyApproverInputEnvelope = {
    data: Prisma.PurchaseOrderCreateManyApproverInput | Prisma.PurchaseOrderCreateManyApproverInput[];
    skipDuplicates?: boolean;
};
export type PurchaseOrderUpsertWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.PurchaseOrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.PurchaseOrderUpdateWithoutCreatorInput, Prisma.PurchaseOrderUncheckedUpdateWithoutCreatorInput>;
    create: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutCreatorInput, Prisma.PurchaseOrderUncheckedCreateWithoutCreatorInput>;
};
export type PurchaseOrderUpdateWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.PurchaseOrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.PurchaseOrderUpdateWithoutCreatorInput, Prisma.PurchaseOrderUncheckedUpdateWithoutCreatorInput>;
};
export type PurchaseOrderUpdateManyWithWhereWithoutCreatorInput = {
    where: Prisma.PurchaseOrderScalarWhereInput;
    data: Prisma.XOR<Prisma.PurchaseOrderUpdateManyMutationInput, Prisma.PurchaseOrderUncheckedUpdateManyWithoutCreatorInput>;
};
export type PurchaseOrderScalarWhereInput = {
    AND?: Prisma.PurchaseOrderScalarWhereInput | Prisma.PurchaseOrderScalarWhereInput[];
    OR?: Prisma.PurchaseOrderScalarWhereInput[];
    NOT?: Prisma.PurchaseOrderScalarWhereInput | Prisma.PurchaseOrderScalarWhereInput[];
    id?: Prisma.StringFilter<"PurchaseOrder"> | string;
    poNumber?: Prisma.StringFilter<"PurchaseOrder"> | string;
    supplierId?: Prisma.StringFilter<"PurchaseOrder"> | string;
    warehouseId?: Prisma.StringFilter<"PurchaseOrder"> | string;
    status?: Prisma.EnumPurchaseOrderStatusFilter<"PurchaseOrder"> | $Enums.PurchaseOrderStatus;
    orderDate?: Prisma.DateTimeFilter<"PurchaseOrder"> | Date | string;
    expectedDelivery?: Prisma.DateTimeNullableFilter<"PurchaseOrder"> | Date | string | null;
    totalAmount?: Prisma.DecimalFilter<"PurchaseOrder"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.StringNullableFilter<"PurchaseOrder"> | string | null;
    createdBy?: Prisma.StringFilter<"PurchaseOrder"> | string;
    approvedBy?: Prisma.StringNullableFilter<"PurchaseOrder"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"PurchaseOrder"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"PurchaseOrder"> | Date | string;
};
export type PurchaseOrderUpsertWithWhereUniqueWithoutApproverInput = {
    where: Prisma.PurchaseOrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.PurchaseOrderUpdateWithoutApproverInput, Prisma.PurchaseOrderUncheckedUpdateWithoutApproverInput>;
    create: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutApproverInput, Prisma.PurchaseOrderUncheckedCreateWithoutApproverInput>;
};
export type PurchaseOrderUpdateWithWhereUniqueWithoutApproverInput = {
    where: Prisma.PurchaseOrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.PurchaseOrderUpdateWithoutApproverInput, Prisma.PurchaseOrderUncheckedUpdateWithoutApproverInput>;
};
export type PurchaseOrderUpdateManyWithWhereWithoutApproverInput = {
    where: Prisma.PurchaseOrderScalarWhereInput;
    data: Prisma.XOR<Prisma.PurchaseOrderUpdateManyMutationInput, Prisma.PurchaseOrderUncheckedUpdateManyWithoutApproverInput>;
};
export type PurchaseOrderCreateWithoutWarehouseInput = {
    id?: string;
    poNumber: string;
    status: $Enums.PurchaseOrderStatus;
    orderDate: Date | string;
    expectedDelivery?: Date | string | null;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    supplier: Prisma.SupplierCreateNestedOneWithoutPurchaseOrdersInput;
    creator: Prisma.UserCreateNestedOneWithoutPurchaseOrdersInput;
    approver?: Prisma.UserCreateNestedOneWithoutApprovedPOsInput;
    items?: Prisma.PurchaseOrderItemCreateNestedManyWithoutPurchaseOrderInput;
};
export type PurchaseOrderUncheckedCreateWithoutWarehouseInput = {
    id?: string;
    poNumber: string;
    supplierId: string;
    status: $Enums.PurchaseOrderStatus;
    orderDate: Date | string;
    expectedDelivery?: Date | string | null;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdBy: string;
    approvedBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.PurchaseOrderItemUncheckedCreateNestedManyWithoutPurchaseOrderInput;
};
export type PurchaseOrderCreateOrConnectWithoutWarehouseInput = {
    where: Prisma.PurchaseOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutWarehouseInput, Prisma.PurchaseOrderUncheckedCreateWithoutWarehouseInput>;
};
export type PurchaseOrderCreateManyWarehouseInputEnvelope = {
    data: Prisma.PurchaseOrderCreateManyWarehouseInput | Prisma.PurchaseOrderCreateManyWarehouseInput[];
    skipDuplicates?: boolean;
};
export type PurchaseOrderUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: Prisma.PurchaseOrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.PurchaseOrderUpdateWithoutWarehouseInput, Prisma.PurchaseOrderUncheckedUpdateWithoutWarehouseInput>;
    create: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutWarehouseInput, Prisma.PurchaseOrderUncheckedCreateWithoutWarehouseInput>;
};
export type PurchaseOrderUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: Prisma.PurchaseOrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.PurchaseOrderUpdateWithoutWarehouseInput, Prisma.PurchaseOrderUncheckedUpdateWithoutWarehouseInput>;
};
export type PurchaseOrderUpdateManyWithWhereWithoutWarehouseInput = {
    where: Prisma.PurchaseOrderScalarWhereInput;
    data: Prisma.XOR<Prisma.PurchaseOrderUpdateManyMutationInput, Prisma.PurchaseOrderUncheckedUpdateManyWithoutWarehouseInput>;
};
export type PurchaseOrderCreateWithoutItemsInput = {
    id?: string;
    poNumber: string;
    status: $Enums.PurchaseOrderStatus;
    orderDate: Date | string;
    expectedDelivery?: Date | string | null;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    supplier: Prisma.SupplierCreateNestedOneWithoutPurchaseOrdersInput;
    warehouse: Prisma.WarehouseCreateNestedOneWithoutPurchaseOrdersInput;
    creator: Prisma.UserCreateNestedOneWithoutPurchaseOrdersInput;
    approver?: Prisma.UserCreateNestedOneWithoutApprovedPOsInput;
};
export type PurchaseOrderUncheckedCreateWithoutItemsInput = {
    id?: string;
    poNumber: string;
    supplierId: string;
    warehouseId: string;
    status: $Enums.PurchaseOrderStatus;
    orderDate: Date | string;
    expectedDelivery?: Date | string | null;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdBy: string;
    approvedBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PurchaseOrderCreateOrConnectWithoutItemsInput = {
    where: Prisma.PurchaseOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutItemsInput, Prisma.PurchaseOrderUncheckedCreateWithoutItemsInput>;
};
export type PurchaseOrderUpsertWithoutItemsInput = {
    update: Prisma.XOR<Prisma.PurchaseOrderUpdateWithoutItemsInput, Prisma.PurchaseOrderUncheckedUpdateWithoutItemsInput>;
    create: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutItemsInput, Prisma.PurchaseOrderUncheckedCreateWithoutItemsInput>;
    where?: Prisma.PurchaseOrderWhereInput;
};
export type PurchaseOrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: Prisma.PurchaseOrderWhereInput;
    data: Prisma.XOR<Prisma.PurchaseOrderUpdateWithoutItemsInput, Prisma.PurchaseOrderUncheckedUpdateWithoutItemsInput>;
};
export type PurchaseOrderUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    orderDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedDelivery?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplier?: Prisma.SupplierUpdateOneRequiredWithoutPurchaseOrdersNestedInput;
    warehouse?: Prisma.WarehouseUpdateOneRequiredWithoutPurchaseOrdersNestedInput;
    creator?: Prisma.UserUpdateOneRequiredWithoutPurchaseOrdersNestedInput;
    approver?: Prisma.UserUpdateOneWithoutApprovedPOsNestedInput;
};
export type PurchaseOrderUncheckedUpdateWithoutItemsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierId?: Prisma.StringFieldUpdateOperationsInput | string;
    warehouseId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    orderDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedDelivery?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PurchaseOrderCreateWithoutSupplierInput = {
    id?: string;
    poNumber: string;
    status: $Enums.PurchaseOrderStatus;
    orderDate: Date | string;
    expectedDelivery?: Date | string | null;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    warehouse: Prisma.WarehouseCreateNestedOneWithoutPurchaseOrdersInput;
    creator: Prisma.UserCreateNestedOneWithoutPurchaseOrdersInput;
    approver?: Prisma.UserCreateNestedOneWithoutApprovedPOsInput;
    items?: Prisma.PurchaseOrderItemCreateNestedManyWithoutPurchaseOrderInput;
};
export type PurchaseOrderUncheckedCreateWithoutSupplierInput = {
    id?: string;
    poNumber: string;
    warehouseId: string;
    status: $Enums.PurchaseOrderStatus;
    orderDate: Date | string;
    expectedDelivery?: Date | string | null;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdBy: string;
    approvedBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    items?: Prisma.PurchaseOrderItemUncheckedCreateNestedManyWithoutPurchaseOrderInput;
};
export type PurchaseOrderCreateOrConnectWithoutSupplierInput = {
    where: Prisma.PurchaseOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutSupplierInput, Prisma.PurchaseOrderUncheckedCreateWithoutSupplierInput>;
};
export type PurchaseOrderCreateManySupplierInputEnvelope = {
    data: Prisma.PurchaseOrderCreateManySupplierInput | Prisma.PurchaseOrderCreateManySupplierInput[];
    skipDuplicates?: boolean;
};
export type PurchaseOrderUpsertWithWhereUniqueWithoutSupplierInput = {
    where: Prisma.PurchaseOrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.PurchaseOrderUpdateWithoutSupplierInput, Prisma.PurchaseOrderUncheckedUpdateWithoutSupplierInput>;
    create: Prisma.XOR<Prisma.PurchaseOrderCreateWithoutSupplierInput, Prisma.PurchaseOrderUncheckedCreateWithoutSupplierInput>;
};
export type PurchaseOrderUpdateWithWhereUniqueWithoutSupplierInput = {
    where: Prisma.PurchaseOrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.PurchaseOrderUpdateWithoutSupplierInput, Prisma.PurchaseOrderUncheckedUpdateWithoutSupplierInput>;
};
export type PurchaseOrderUpdateManyWithWhereWithoutSupplierInput = {
    where: Prisma.PurchaseOrderScalarWhereInput;
    data: Prisma.XOR<Prisma.PurchaseOrderUpdateManyMutationInput, Prisma.PurchaseOrderUncheckedUpdateManyWithoutSupplierInput>;
};
export type PurchaseOrderCreateManyCreatorInput = {
    id?: string;
    poNumber: string;
    supplierId: string;
    warehouseId: string;
    status: $Enums.PurchaseOrderStatus;
    orderDate: Date | string;
    expectedDelivery?: Date | string | null;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    approvedBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PurchaseOrderCreateManyApproverInput = {
    id?: string;
    poNumber: string;
    supplierId: string;
    warehouseId: string;
    status: $Enums.PurchaseOrderStatus;
    orderDate: Date | string;
    expectedDelivery?: Date | string | null;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdBy: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PurchaseOrderUpdateWithoutCreatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    orderDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedDelivery?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplier?: Prisma.SupplierUpdateOneRequiredWithoutPurchaseOrdersNestedInput;
    warehouse?: Prisma.WarehouseUpdateOneRequiredWithoutPurchaseOrdersNestedInput;
    approver?: Prisma.UserUpdateOneWithoutApprovedPOsNestedInput;
    items?: Prisma.PurchaseOrderItemUpdateManyWithoutPurchaseOrderNestedInput;
};
export type PurchaseOrderUncheckedUpdateWithoutCreatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierId?: Prisma.StringFieldUpdateOperationsInput | string;
    warehouseId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    orderDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedDelivery?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.PurchaseOrderItemUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
};
export type PurchaseOrderUncheckedUpdateManyWithoutCreatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierId?: Prisma.StringFieldUpdateOperationsInput | string;
    warehouseId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    orderDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedDelivery?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PurchaseOrderUpdateWithoutApproverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    orderDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedDelivery?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplier?: Prisma.SupplierUpdateOneRequiredWithoutPurchaseOrdersNestedInput;
    warehouse?: Prisma.WarehouseUpdateOneRequiredWithoutPurchaseOrdersNestedInput;
    creator?: Prisma.UserUpdateOneRequiredWithoutPurchaseOrdersNestedInput;
    items?: Prisma.PurchaseOrderItemUpdateManyWithoutPurchaseOrderNestedInput;
};
export type PurchaseOrderUncheckedUpdateWithoutApproverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierId?: Prisma.StringFieldUpdateOperationsInput | string;
    warehouseId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    orderDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedDelivery?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.PurchaseOrderItemUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
};
export type PurchaseOrderUncheckedUpdateManyWithoutApproverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierId?: Prisma.StringFieldUpdateOperationsInput | string;
    warehouseId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    orderDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedDelivery?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PurchaseOrderCreateManyWarehouseInput = {
    id?: string;
    poNumber: string;
    supplierId: string;
    status: $Enums.PurchaseOrderStatus;
    orderDate: Date | string;
    expectedDelivery?: Date | string | null;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdBy: string;
    approvedBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PurchaseOrderUpdateWithoutWarehouseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    orderDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedDelivery?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplier?: Prisma.SupplierUpdateOneRequiredWithoutPurchaseOrdersNestedInput;
    creator?: Prisma.UserUpdateOneRequiredWithoutPurchaseOrdersNestedInput;
    approver?: Prisma.UserUpdateOneWithoutApprovedPOsNestedInput;
    items?: Prisma.PurchaseOrderItemUpdateManyWithoutPurchaseOrderNestedInput;
};
export type PurchaseOrderUncheckedUpdateWithoutWarehouseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    orderDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedDelivery?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.PurchaseOrderItemUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
};
export type PurchaseOrderUncheckedUpdateManyWithoutWarehouseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    supplierId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    orderDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedDelivery?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PurchaseOrderCreateManySupplierInput = {
    id?: string;
    poNumber: string;
    warehouseId: string;
    status: $Enums.PurchaseOrderStatus;
    orderDate: Date | string;
    expectedDelivery?: Date | string | null;
    totalAmount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: string | null;
    createdBy: string;
    approvedBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PurchaseOrderUpdateWithoutSupplierInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    orderDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedDelivery?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    warehouse?: Prisma.WarehouseUpdateOneRequiredWithoutPurchaseOrdersNestedInput;
    creator?: Prisma.UserUpdateOneRequiredWithoutPurchaseOrdersNestedInput;
    approver?: Prisma.UserUpdateOneWithoutApprovedPOsNestedInput;
    items?: Prisma.PurchaseOrderItemUpdateManyWithoutPurchaseOrderNestedInput;
};
export type PurchaseOrderUncheckedUpdateWithoutSupplierInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    warehouseId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    orderDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedDelivery?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    items?: Prisma.PurchaseOrderItemUncheckedUpdateManyWithoutPurchaseOrderNestedInput;
};
export type PurchaseOrderUncheckedUpdateManyWithoutSupplierInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    poNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    warehouseId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumPurchaseOrderStatusFieldUpdateOperationsInput | $Enums.PurchaseOrderStatus;
    orderDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expectedDelivery?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    totalAmount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PurchaseOrderCountOutputType = {
    items: number;
};
export type PurchaseOrderCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    items?: boolean | PurchaseOrderCountOutputTypeCountItemsArgs;
};
export type PurchaseOrderCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderCountOutputTypeSelect<ExtArgs> | null;
};
export type PurchaseOrderCountOutputTypeCountItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseOrderItemWhereInput;
};
export type PurchaseOrderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    poNumber?: boolean;
    supplierId?: boolean;
    warehouseId?: boolean;
    status?: boolean;
    orderDate?: boolean;
    expectedDelivery?: boolean;
    totalAmount?: boolean;
    notes?: boolean;
    createdBy?: boolean;
    approvedBy?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    approver?: boolean | Prisma.PurchaseOrder$approverArgs<ExtArgs>;
    items?: boolean | Prisma.PurchaseOrder$itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.PurchaseOrderCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["purchaseOrder"]>;
export type PurchaseOrderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    poNumber?: boolean;
    supplierId?: boolean;
    warehouseId?: boolean;
    status?: boolean;
    orderDate?: boolean;
    expectedDelivery?: boolean;
    totalAmount?: boolean;
    notes?: boolean;
    createdBy?: boolean;
    approvedBy?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    approver?: boolean | Prisma.PurchaseOrder$approverArgs<ExtArgs>;
}, ExtArgs["result"]["purchaseOrder"]>;
export type PurchaseOrderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    poNumber?: boolean;
    supplierId?: boolean;
    warehouseId?: boolean;
    status?: boolean;
    orderDate?: boolean;
    expectedDelivery?: boolean;
    totalAmount?: boolean;
    notes?: boolean;
    createdBy?: boolean;
    approvedBy?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    approver?: boolean | Prisma.PurchaseOrder$approverArgs<ExtArgs>;
}, ExtArgs["result"]["purchaseOrder"]>;
export type PurchaseOrderSelectScalar = {
    id?: boolean;
    poNumber?: boolean;
    supplierId?: boolean;
    warehouseId?: boolean;
    status?: boolean;
    orderDate?: boolean;
    expectedDelivery?: boolean;
    totalAmount?: boolean;
    notes?: boolean;
    createdBy?: boolean;
    approvedBy?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PurchaseOrderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "poNumber" | "supplierId" | "warehouseId" | "status" | "orderDate" | "expectedDelivery" | "totalAmount" | "notes" | "createdBy" | "approvedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["purchaseOrder"]>;
export type PurchaseOrderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    approver?: boolean | Prisma.PurchaseOrder$approverArgs<ExtArgs>;
    items?: boolean | Prisma.PurchaseOrder$itemsArgs<ExtArgs>;
    _count?: boolean | Prisma.PurchaseOrderCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PurchaseOrderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    approver?: boolean | Prisma.PurchaseOrder$approverArgs<ExtArgs>;
};
export type PurchaseOrderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
    creator?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    approver?: boolean | Prisma.PurchaseOrder$approverArgs<ExtArgs>;
};
export type $PurchaseOrderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PurchaseOrder";
    objects: {
        supplier: Prisma.$SupplierPayload<ExtArgs>;
        warehouse: Prisma.$WarehousePayload<ExtArgs>;
        creator: Prisma.$UserPayload<ExtArgs>;
        approver: Prisma.$UserPayload<ExtArgs> | null;
        items: Prisma.$PurchaseOrderItemPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        poNumber: string;
        supplierId: string;
        warehouseId: string;
        status: $Enums.PurchaseOrderStatus;
        orderDate: Date;
        expectedDelivery: Date | null;
        totalAmount: runtime.Decimal;
        notes: string | null;
        createdBy: string;
        approvedBy: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["purchaseOrder"]>;
    composites: {};
};
export type PurchaseOrderGetPayload<S extends boolean | null | undefined | PurchaseOrderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload, S>;
export type PurchaseOrderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PurchaseOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PurchaseOrderCountAggregateInputType | true;
};
export interface PurchaseOrderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PurchaseOrder'];
        meta: {
            name: 'PurchaseOrder';
        };
    };
    findUnique<T extends PurchaseOrderFindUniqueArgs>(args: Prisma.SelectSubset<T, PurchaseOrderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PurchaseOrderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PurchaseOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PurchaseOrderFindFirstArgs>(args?: Prisma.SelectSubset<T, PurchaseOrderFindFirstArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PurchaseOrderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PurchaseOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PurchaseOrderFindManyArgs>(args?: Prisma.SelectSubset<T, PurchaseOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PurchaseOrderCreateArgs>(args: Prisma.SelectSubset<T, PurchaseOrderCreateArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PurchaseOrderCreateManyArgs>(args?: Prisma.SelectSubset<T, PurchaseOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PurchaseOrderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PurchaseOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PurchaseOrderDeleteArgs>(args: Prisma.SelectSubset<T, PurchaseOrderDeleteArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PurchaseOrderUpdateArgs>(args: Prisma.SelectSubset<T, PurchaseOrderUpdateArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PurchaseOrderDeleteManyArgs>(args?: Prisma.SelectSubset<T, PurchaseOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PurchaseOrderUpdateManyArgs>(args: Prisma.SelectSubset<T, PurchaseOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PurchaseOrderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PurchaseOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PurchaseOrderUpsertArgs>(args: Prisma.SelectSubset<T, PurchaseOrderUpsertArgs<ExtArgs>>): Prisma.Prisma__PurchaseOrderClient<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PurchaseOrderCountArgs>(args?: Prisma.Subset<T, PurchaseOrderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PurchaseOrderCountAggregateOutputType> : number>;
    aggregate<T extends PurchaseOrderAggregateArgs>(args: Prisma.Subset<T, PurchaseOrderAggregateArgs>): Prisma.PrismaPromise<GetPurchaseOrderAggregateType<T>>;
    groupBy<T extends PurchaseOrderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PurchaseOrderGroupByArgs['orderBy'];
    } : {
        orderBy?: PurchaseOrderGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PurchaseOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PurchaseOrderFieldRefs;
}
export interface Prisma__PurchaseOrderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    supplier<T extends Prisma.SupplierDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SupplierDefaultArgs<ExtArgs>>): Prisma.Prisma__SupplierClient<runtime.Types.Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    warehouse<T extends Prisma.WarehouseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WarehouseDefaultArgs<ExtArgs>>): Prisma.Prisma__WarehouseClient<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    creator<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    approver<T extends Prisma.PurchaseOrder$approverArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PurchaseOrder$approverArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    items<T extends Prisma.PurchaseOrder$itemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PurchaseOrder$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PurchaseOrderFieldRefs {
    readonly id: Prisma.FieldRef<"PurchaseOrder", 'String'>;
    readonly poNumber: Prisma.FieldRef<"PurchaseOrder", 'String'>;
    readonly supplierId: Prisma.FieldRef<"PurchaseOrder", 'String'>;
    readonly warehouseId: Prisma.FieldRef<"PurchaseOrder", 'String'>;
    readonly status: Prisma.FieldRef<"PurchaseOrder", 'PurchaseOrderStatus'>;
    readonly orderDate: Prisma.FieldRef<"PurchaseOrder", 'DateTime'>;
    readonly expectedDelivery: Prisma.FieldRef<"PurchaseOrder", 'DateTime'>;
    readonly totalAmount: Prisma.FieldRef<"PurchaseOrder", 'Decimal'>;
    readonly notes: Prisma.FieldRef<"PurchaseOrder", 'String'>;
    readonly createdBy: Prisma.FieldRef<"PurchaseOrder", 'String'>;
    readonly approvedBy: Prisma.FieldRef<"PurchaseOrder", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PurchaseOrder", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"PurchaseOrder", 'DateTime'>;
}
export type PurchaseOrderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderInclude<ExtArgs> | null;
    where: Prisma.PurchaseOrderWhereUniqueInput;
};
export type PurchaseOrderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderInclude<ExtArgs> | null;
    where: Prisma.PurchaseOrderWhereUniqueInput;
};
export type PurchaseOrderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderInclude<ExtArgs> | null;
    where?: Prisma.PurchaseOrderWhereInput;
    orderBy?: Prisma.PurchaseOrderOrderByWithRelationInput | Prisma.PurchaseOrderOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PurchaseOrderScalarFieldEnum | Prisma.PurchaseOrderScalarFieldEnum[];
};
export type PurchaseOrderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderInclude<ExtArgs> | null;
    where?: Prisma.PurchaseOrderWhereInput;
    orderBy?: Prisma.PurchaseOrderOrderByWithRelationInput | Prisma.PurchaseOrderOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PurchaseOrderScalarFieldEnum | Prisma.PurchaseOrderScalarFieldEnum[];
};
export type PurchaseOrderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderInclude<ExtArgs> | null;
    where?: Prisma.PurchaseOrderWhereInput;
    orderBy?: Prisma.PurchaseOrderOrderByWithRelationInput | Prisma.PurchaseOrderOrderByWithRelationInput[];
    cursor?: Prisma.PurchaseOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PurchaseOrderScalarFieldEnum | Prisma.PurchaseOrderScalarFieldEnum[];
};
export type PurchaseOrderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PurchaseOrderCreateInput, Prisma.PurchaseOrderUncheckedCreateInput>;
};
export type PurchaseOrderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PurchaseOrderCreateManyInput | Prisma.PurchaseOrderCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PurchaseOrderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null;
    data: Prisma.PurchaseOrderCreateManyInput | Prisma.PurchaseOrderCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PurchaseOrderIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PurchaseOrderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PurchaseOrderUpdateInput, Prisma.PurchaseOrderUncheckedUpdateInput>;
    where: Prisma.PurchaseOrderWhereUniqueInput;
};
export type PurchaseOrderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PurchaseOrderUpdateManyMutationInput, Prisma.PurchaseOrderUncheckedUpdateManyInput>;
    where?: Prisma.PurchaseOrderWhereInput;
    limit?: number;
};
export type PurchaseOrderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PurchaseOrderUpdateManyMutationInput, Prisma.PurchaseOrderUncheckedUpdateManyInput>;
    where?: Prisma.PurchaseOrderWhereInput;
    limit?: number;
    include?: Prisma.PurchaseOrderIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PurchaseOrderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderInclude<ExtArgs> | null;
    where: Prisma.PurchaseOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.PurchaseOrderCreateInput, Prisma.PurchaseOrderUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PurchaseOrderUpdateInput, Prisma.PurchaseOrderUncheckedUpdateInput>;
};
export type PurchaseOrderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderInclude<ExtArgs> | null;
    where: Prisma.PurchaseOrderWhereUniqueInput;
};
export type PurchaseOrderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseOrderWhereInput;
    limit?: number;
};
export type PurchaseOrder$approverArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
export type PurchaseOrder$itemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PurchaseOrderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PurchaseOrderSelect<ExtArgs> | null;
    omit?: Prisma.PurchaseOrderOmit<ExtArgs> | null;
    include?: Prisma.PurchaseOrderInclude<ExtArgs> | null;
};
export {};
