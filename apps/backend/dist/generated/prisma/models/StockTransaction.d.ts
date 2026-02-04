import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type StockTransactionModel = runtime.Types.Result.DefaultSelection<Prisma.$StockTransactionPayload>;
export type AggregateStockTransaction = {
    _count: StockTransactionCountAggregateOutputType | null;
    _avg: StockTransactionAvgAggregateOutputType | null;
    _sum: StockTransactionSumAggregateOutputType | null;
    _min: StockTransactionMinAggregateOutputType | null;
    _max: StockTransactionMaxAggregateOutputType | null;
};
export type StockTransactionAvgAggregateOutputType = {
    quantity: number | null;
    unitCost: runtime.Decimal | null;
};
export type StockTransactionSumAggregateOutputType = {
    quantity: number | null;
    unitCost: runtime.Decimal | null;
};
export type StockTransactionMinAggregateOutputType = {
    id: string | null;
    productId: string | null;
    warehouseId: string | null;
    transactionType: $Enums.TransactionType | null;
    quantity: number | null;
    unitCost: runtime.Decimal | null;
    referenceNumber: string | null;
    notes: string | null;
    performedBy: string | null;
    createdAt: Date | null;
};
export type StockTransactionMaxAggregateOutputType = {
    id: string | null;
    productId: string | null;
    warehouseId: string | null;
    transactionType: $Enums.TransactionType | null;
    quantity: number | null;
    unitCost: runtime.Decimal | null;
    referenceNumber: string | null;
    notes: string | null;
    performedBy: string | null;
    createdAt: Date | null;
};
export type StockTransactionCountAggregateOutputType = {
    id: number;
    productId: number;
    warehouseId: number;
    transactionType: number;
    quantity: number;
    unitCost: number;
    referenceNumber: number;
    notes: number;
    performedBy: number;
    createdAt: number;
    _all: number;
};
export type StockTransactionAvgAggregateInputType = {
    quantity?: true;
    unitCost?: true;
};
export type StockTransactionSumAggregateInputType = {
    quantity?: true;
    unitCost?: true;
};
export type StockTransactionMinAggregateInputType = {
    id?: true;
    productId?: true;
    warehouseId?: true;
    transactionType?: true;
    quantity?: true;
    unitCost?: true;
    referenceNumber?: true;
    notes?: true;
    performedBy?: true;
    createdAt?: true;
};
export type StockTransactionMaxAggregateInputType = {
    id?: true;
    productId?: true;
    warehouseId?: true;
    transactionType?: true;
    quantity?: true;
    unitCost?: true;
    referenceNumber?: true;
    notes?: true;
    performedBy?: true;
    createdAt?: true;
};
export type StockTransactionCountAggregateInputType = {
    id?: true;
    productId?: true;
    warehouseId?: true;
    transactionType?: true;
    quantity?: true;
    unitCost?: true;
    referenceNumber?: true;
    notes?: true;
    performedBy?: true;
    createdAt?: true;
    _all?: true;
};
export type StockTransactionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StockTransactionWhereInput;
    orderBy?: Prisma.StockTransactionOrderByWithRelationInput | Prisma.StockTransactionOrderByWithRelationInput[];
    cursor?: Prisma.StockTransactionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StockTransactionCountAggregateInputType;
    _avg?: StockTransactionAvgAggregateInputType;
    _sum?: StockTransactionSumAggregateInputType;
    _min?: StockTransactionMinAggregateInputType;
    _max?: StockTransactionMaxAggregateInputType;
};
export type GetStockTransactionAggregateType<T extends StockTransactionAggregateArgs> = {
    [P in keyof T & keyof AggregateStockTransaction]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStockTransaction[P]> : Prisma.GetScalarType<T[P], AggregateStockTransaction[P]>;
};
export type StockTransactionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StockTransactionWhereInput;
    orderBy?: Prisma.StockTransactionOrderByWithAggregationInput | Prisma.StockTransactionOrderByWithAggregationInput[];
    by: Prisma.StockTransactionScalarFieldEnum[] | Prisma.StockTransactionScalarFieldEnum;
    having?: Prisma.StockTransactionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StockTransactionCountAggregateInputType | true;
    _avg?: StockTransactionAvgAggregateInputType;
    _sum?: StockTransactionSumAggregateInputType;
    _min?: StockTransactionMinAggregateInputType;
    _max?: StockTransactionMaxAggregateInputType;
};
export type StockTransactionGroupByOutputType = {
    id: string;
    productId: string;
    warehouseId: string;
    transactionType: $Enums.TransactionType;
    quantity: number;
    unitCost: runtime.Decimal | null;
    referenceNumber: string | null;
    notes: string | null;
    performedBy: string;
    createdAt: Date;
    _count: StockTransactionCountAggregateOutputType | null;
    _avg: StockTransactionAvgAggregateOutputType | null;
    _sum: StockTransactionSumAggregateOutputType | null;
    _min: StockTransactionMinAggregateOutputType | null;
    _max: StockTransactionMaxAggregateOutputType | null;
};
type GetStockTransactionGroupByPayload<T extends StockTransactionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StockTransactionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StockTransactionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StockTransactionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StockTransactionGroupByOutputType[P]>;
}>>;
export type StockTransactionWhereInput = {
    AND?: Prisma.StockTransactionWhereInput | Prisma.StockTransactionWhereInput[];
    OR?: Prisma.StockTransactionWhereInput[];
    NOT?: Prisma.StockTransactionWhereInput | Prisma.StockTransactionWhereInput[];
    id?: Prisma.StringFilter<"StockTransaction"> | string;
    productId?: Prisma.StringFilter<"StockTransaction"> | string;
    warehouseId?: Prisma.StringFilter<"StockTransaction"> | string;
    transactionType?: Prisma.EnumTransactionTypeFilter<"StockTransaction"> | $Enums.TransactionType;
    quantity?: Prisma.IntFilter<"StockTransaction"> | number;
    unitCost?: Prisma.DecimalNullableFilter<"StockTransaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    referenceNumber?: Prisma.StringNullableFilter<"StockTransaction"> | string | null;
    notes?: Prisma.StringNullableFilter<"StockTransaction"> | string | null;
    performedBy?: Prisma.StringFilter<"StockTransaction"> | string;
    createdAt?: Prisma.DateTimeFilter<"StockTransaction"> | Date | string;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    warehouse?: Prisma.XOR<Prisma.WarehouseScalarRelationFilter, Prisma.WarehouseWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type StockTransactionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    warehouseId?: Prisma.SortOrder;
    transactionType?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitCost?: Prisma.SortOrderInput | Prisma.SortOrder;
    referenceNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    performedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    product?: Prisma.ProductOrderByWithRelationInput;
    warehouse?: Prisma.WarehouseOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type StockTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.StockTransactionWhereInput | Prisma.StockTransactionWhereInput[];
    OR?: Prisma.StockTransactionWhereInput[];
    NOT?: Prisma.StockTransactionWhereInput | Prisma.StockTransactionWhereInput[];
    productId?: Prisma.StringFilter<"StockTransaction"> | string;
    warehouseId?: Prisma.StringFilter<"StockTransaction"> | string;
    transactionType?: Prisma.EnumTransactionTypeFilter<"StockTransaction"> | $Enums.TransactionType;
    quantity?: Prisma.IntFilter<"StockTransaction"> | number;
    unitCost?: Prisma.DecimalNullableFilter<"StockTransaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    referenceNumber?: Prisma.StringNullableFilter<"StockTransaction"> | string | null;
    notes?: Prisma.StringNullableFilter<"StockTransaction"> | string | null;
    performedBy?: Prisma.StringFilter<"StockTransaction"> | string;
    createdAt?: Prisma.DateTimeFilter<"StockTransaction"> | Date | string;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    warehouse?: Prisma.XOR<Prisma.WarehouseScalarRelationFilter, Prisma.WarehouseWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type StockTransactionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    warehouseId?: Prisma.SortOrder;
    transactionType?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitCost?: Prisma.SortOrderInput | Prisma.SortOrder;
    referenceNumber?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    performedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.StockTransactionCountOrderByAggregateInput;
    _avg?: Prisma.StockTransactionAvgOrderByAggregateInput;
    _max?: Prisma.StockTransactionMaxOrderByAggregateInput;
    _min?: Prisma.StockTransactionMinOrderByAggregateInput;
    _sum?: Prisma.StockTransactionSumOrderByAggregateInput;
};
export type StockTransactionScalarWhereWithAggregatesInput = {
    AND?: Prisma.StockTransactionScalarWhereWithAggregatesInput | Prisma.StockTransactionScalarWhereWithAggregatesInput[];
    OR?: Prisma.StockTransactionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StockTransactionScalarWhereWithAggregatesInput | Prisma.StockTransactionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"StockTransaction"> | string;
    productId?: Prisma.StringWithAggregatesFilter<"StockTransaction"> | string;
    warehouseId?: Prisma.StringWithAggregatesFilter<"StockTransaction"> | string;
    transactionType?: Prisma.EnumTransactionTypeWithAggregatesFilter<"StockTransaction"> | $Enums.TransactionType;
    quantity?: Prisma.IntWithAggregatesFilter<"StockTransaction"> | number;
    unitCost?: Prisma.DecimalNullableWithAggregatesFilter<"StockTransaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    referenceNumber?: Prisma.StringNullableWithAggregatesFilter<"StockTransaction"> | string | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"StockTransaction"> | string | null;
    performedBy?: Prisma.StringWithAggregatesFilter<"StockTransaction"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"StockTransaction"> | Date | string;
};
export type StockTransactionCreateInput = {
    id?: string;
    transactionType: $Enums.TransactionType;
    quantity: number;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    referenceNumber?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutTransactionsInput;
    warehouse: Prisma.WarehouseCreateNestedOneWithoutTransactionsInput;
    user: Prisma.UserCreateNestedOneWithoutTransactionsInput;
};
export type StockTransactionUncheckedCreateInput = {
    id?: string;
    productId: string;
    warehouseId: string;
    transactionType: $Enums.TransactionType;
    quantity: number;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    referenceNumber?: string | null;
    notes?: string | null;
    performedBy: string;
    createdAt?: Date | string;
};
export type StockTransactionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionType?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    referenceNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutTransactionsNestedInput;
    warehouse?: Prisma.WarehouseUpdateOneRequiredWithoutTransactionsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutTransactionsNestedInput;
};
export type StockTransactionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    warehouseId?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionType?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    referenceNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    performedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StockTransactionCreateManyInput = {
    id?: string;
    productId: string;
    warehouseId: string;
    transactionType: $Enums.TransactionType;
    quantity: number;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    referenceNumber?: string | null;
    notes?: string | null;
    performedBy: string;
    createdAt?: Date | string;
};
export type StockTransactionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionType?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    referenceNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StockTransactionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    warehouseId?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionType?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    referenceNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    performedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StockTransactionListRelationFilter = {
    every?: Prisma.StockTransactionWhereInput;
    some?: Prisma.StockTransactionWhereInput;
    none?: Prisma.StockTransactionWhereInput;
};
export type StockTransactionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StockTransactionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    warehouseId?: Prisma.SortOrder;
    transactionType?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitCost?: Prisma.SortOrder;
    referenceNumber?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    performedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type StockTransactionAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    unitCost?: Prisma.SortOrder;
};
export type StockTransactionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    warehouseId?: Prisma.SortOrder;
    transactionType?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitCost?: Prisma.SortOrder;
    referenceNumber?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    performedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type StockTransactionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    warehouseId?: Prisma.SortOrder;
    transactionType?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitCost?: Prisma.SortOrder;
    referenceNumber?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    performedBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type StockTransactionSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    unitCost?: Prisma.SortOrder;
};
export type StockTransactionCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.StockTransactionCreateWithoutUserInput, Prisma.StockTransactionUncheckedCreateWithoutUserInput> | Prisma.StockTransactionCreateWithoutUserInput[] | Prisma.StockTransactionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.StockTransactionCreateOrConnectWithoutUserInput | Prisma.StockTransactionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.StockTransactionCreateManyUserInputEnvelope;
    connect?: Prisma.StockTransactionWhereUniqueInput | Prisma.StockTransactionWhereUniqueInput[];
};
export type StockTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.StockTransactionCreateWithoutUserInput, Prisma.StockTransactionUncheckedCreateWithoutUserInput> | Prisma.StockTransactionCreateWithoutUserInput[] | Prisma.StockTransactionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.StockTransactionCreateOrConnectWithoutUserInput | Prisma.StockTransactionCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.StockTransactionCreateManyUserInputEnvelope;
    connect?: Prisma.StockTransactionWhereUniqueInput | Prisma.StockTransactionWhereUniqueInput[];
};
export type StockTransactionUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.StockTransactionCreateWithoutUserInput, Prisma.StockTransactionUncheckedCreateWithoutUserInput> | Prisma.StockTransactionCreateWithoutUserInput[] | Prisma.StockTransactionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.StockTransactionCreateOrConnectWithoutUserInput | Prisma.StockTransactionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.StockTransactionUpsertWithWhereUniqueWithoutUserInput | Prisma.StockTransactionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.StockTransactionCreateManyUserInputEnvelope;
    set?: Prisma.StockTransactionWhereUniqueInput | Prisma.StockTransactionWhereUniqueInput[];
    disconnect?: Prisma.StockTransactionWhereUniqueInput | Prisma.StockTransactionWhereUniqueInput[];
    delete?: Prisma.StockTransactionWhereUniqueInput | Prisma.StockTransactionWhereUniqueInput[];
    connect?: Prisma.StockTransactionWhereUniqueInput | Prisma.StockTransactionWhereUniqueInput[];
    update?: Prisma.StockTransactionUpdateWithWhereUniqueWithoutUserInput | Prisma.StockTransactionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.StockTransactionUpdateManyWithWhereWithoutUserInput | Prisma.StockTransactionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.StockTransactionScalarWhereInput | Prisma.StockTransactionScalarWhereInput[];
};
export type StockTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.StockTransactionCreateWithoutUserInput, Prisma.StockTransactionUncheckedCreateWithoutUserInput> | Prisma.StockTransactionCreateWithoutUserInput[] | Prisma.StockTransactionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.StockTransactionCreateOrConnectWithoutUserInput | Prisma.StockTransactionCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.StockTransactionUpsertWithWhereUniqueWithoutUserInput | Prisma.StockTransactionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.StockTransactionCreateManyUserInputEnvelope;
    set?: Prisma.StockTransactionWhereUniqueInput | Prisma.StockTransactionWhereUniqueInput[];
    disconnect?: Prisma.StockTransactionWhereUniqueInput | Prisma.StockTransactionWhereUniqueInput[];
    delete?: Prisma.StockTransactionWhereUniqueInput | Prisma.StockTransactionWhereUniqueInput[];
    connect?: Prisma.StockTransactionWhereUniqueInput | Prisma.StockTransactionWhereUniqueInput[];
    update?: Prisma.StockTransactionUpdateWithWhereUniqueWithoutUserInput | Prisma.StockTransactionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.StockTransactionUpdateManyWithWhereWithoutUserInput | Prisma.StockTransactionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.StockTransactionScalarWhereInput | Prisma.StockTransactionScalarWhereInput[];
};
export type StockTransactionCreateNestedManyWithoutWarehouseInput = {
    create?: Prisma.XOR<Prisma.StockTransactionCreateWithoutWarehouseInput, Prisma.StockTransactionUncheckedCreateWithoutWarehouseInput> | Prisma.StockTransactionCreateWithoutWarehouseInput[] | Prisma.StockTransactionUncheckedCreateWithoutWarehouseInput[];
    connectOrCreate?: Prisma.StockTransactionCreateOrConnectWithoutWarehouseInput | Prisma.StockTransactionCreateOrConnectWithoutWarehouseInput[];
    createMany?: Prisma.StockTransactionCreateManyWarehouseInputEnvelope;
    connect?: Prisma.StockTransactionWhereUniqueInput | Prisma.StockTransactionWhereUniqueInput[];
};
export type StockTransactionUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: Prisma.XOR<Prisma.StockTransactionCreateWithoutWarehouseInput, Prisma.StockTransactionUncheckedCreateWithoutWarehouseInput> | Prisma.StockTransactionCreateWithoutWarehouseInput[] | Prisma.StockTransactionUncheckedCreateWithoutWarehouseInput[];
    connectOrCreate?: Prisma.StockTransactionCreateOrConnectWithoutWarehouseInput | Prisma.StockTransactionCreateOrConnectWithoutWarehouseInput[];
    createMany?: Prisma.StockTransactionCreateManyWarehouseInputEnvelope;
    connect?: Prisma.StockTransactionWhereUniqueInput | Prisma.StockTransactionWhereUniqueInput[];
};
export type StockTransactionUpdateManyWithoutWarehouseNestedInput = {
    create?: Prisma.XOR<Prisma.StockTransactionCreateWithoutWarehouseInput, Prisma.StockTransactionUncheckedCreateWithoutWarehouseInput> | Prisma.StockTransactionCreateWithoutWarehouseInput[] | Prisma.StockTransactionUncheckedCreateWithoutWarehouseInput[];
    connectOrCreate?: Prisma.StockTransactionCreateOrConnectWithoutWarehouseInput | Prisma.StockTransactionCreateOrConnectWithoutWarehouseInput[];
    upsert?: Prisma.StockTransactionUpsertWithWhereUniqueWithoutWarehouseInput | Prisma.StockTransactionUpsertWithWhereUniqueWithoutWarehouseInput[];
    createMany?: Prisma.StockTransactionCreateManyWarehouseInputEnvelope;
    set?: Prisma.StockTransactionWhereUniqueInput | Prisma.StockTransactionWhereUniqueInput[];
    disconnect?: Prisma.StockTransactionWhereUniqueInput | Prisma.StockTransactionWhereUniqueInput[];
    delete?: Prisma.StockTransactionWhereUniqueInput | Prisma.StockTransactionWhereUniqueInput[];
    connect?: Prisma.StockTransactionWhereUniqueInput | Prisma.StockTransactionWhereUniqueInput[];
    update?: Prisma.StockTransactionUpdateWithWhereUniqueWithoutWarehouseInput | Prisma.StockTransactionUpdateWithWhereUniqueWithoutWarehouseInput[];
    updateMany?: Prisma.StockTransactionUpdateManyWithWhereWithoutWarehouseInput | Prisma.StockTransactionUpdateManyWithWhereWithoutWarehouseInput[];
    deleteMany?: Prisma.StockTransactionScalarWhereInput | Prisma.StockTransactionScalarWhereInput[];
};
export type StockTransactionUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: Prisma.XOR<Prisma.StockTransactionCreateWithoutWarehouseInput, Prisma.StockTransactionUncheckedCreateWithoutWarehouseInput> | Prisma.StockTransactionCreateWithoutWarehouseInput[] | Prisma.StockTransactionUncheckedCreateWithoutWarehouseInput[];
    connectOrCreate?: Prisma.StockTransactionCreateOrConnectWithoutWarehouseInput | Prisma.StockTransactionCreateOrConnectWithoutWarehouseInput[];
    upsert?: Prisma.StockTransactionUpsertWithWhereUniqueWithoutWarehouseInput | Prisma.StockTransactionUpsertWithWhereUniqueWithoutWarehouseInput[];
    createMany?: Prisma.StockTransactionCreateManyWarehouseInputEnvelope;
    set?: Prisma.StockTransactionWhereUniqueInput | Prisma.StockTransactionWhereUniqueInput[];
    disconnect?: Prisma.StockTransactionWhereUniqueInput | Prisma.StockTransactionWhereUniqueInput[];
    delete?: Prisma.StockTransactionWhereUniqueInput | Prisma.StockTransactionWhereUniqueInput[];
    connect?: Prisma.StockTransactionWhereUniqueInput | Prisma.StockTransactionWhereUniqueInput[];
    update?: Prisma.StockTransactionUpdateWithWhereUniqueWithoutWarehouseInput | Prisma.StockTransactionUpdateWithWhereUniqueWithoutWarehouseInput[];
    updateMany?: Prisma.StockTransactionUpdateManyWithWhereWithoutWarehouseInput | Prisma.StockTransactionUpdateManyWithWhereWithoutWarehouseInput[];
    deleteMany?: Prisma.StockTransactionScalarWhereInput | Prisma.StockTransactionScalarWhereInput[];
};
export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType;
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type StockTransactionCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.StockTransactionCreateWithoutProductInput, Prisma.StockTransactionUncheckedCreateWithoutProductInput> | Prisma.StockTransactionCreateWithoutProductInput[] | Prisma.StockTransactionUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.StockTransactionCreateOrConnectWithoutProductInput | Prisma.StockTransactionCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.StockTransactionCreateManyProductInputEnvelope;
    connect?: Prisma.StockTransactionWhereUniqueInput | Prisma.StockTransactionWhereUniqueInput[];
};
export type StockTransactionUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.StockTransactionCreateWithoutProductInput, Prisma.StockTransactionUncheckedCreateWithoutProductInput> | Prisma.StockTransactionCreateWithoutProductInput[] | Prisma.StockTransactionUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.StockTransactionCreateOrConnectWithoutProductInput | Prisma.StockTransactionCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.StockTransactionCreateManyProductInputEnvelope;
    connect?: Prisma.StockTransactionWhereUniqueInput | Prisma.StockTransactionWhereUniqueInput[];
};
export type StockTransactionUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.StockTransactionCreateWithoutProductInput, Prisma.StockTransactionUncheckedCreateWithoutProductInput> | Prisma.StockTransactionCreateWithoutProductInput[] | Prisma.StockTransactionUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.StockTransactionCreateOrConnectWithoutProductInput | Prisma.StockTransactionCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.StockTransactionUpsertWithWhereUniqueWithoutProductInput | Prisma.StockTransactionUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.StockTransactionCreateManyProductInputEnvelope;
    set?: Prisma.StockTransactionWhereUniqueInput | Prisma.StockTransactionWhereUniqueInput[];
    disconnect?: Prisma.StockTransactionWhereUniqueInput | Prisma.StockTransactionWhereUniqueInput[];
    delete?: Prisma.StockTransactionWhereUniqueInput | Prisma.StockTransactionWhereUniqueInput[];
    connect?: Prisma.StockTransactionWhereUniqueInput | Prisma.StockTransactionWhereUniqueInput[];
    update?: Prisma.StockTransactionUpdateWithWhereUniqueWithoutProductInput | Prisma.StockTransactionUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.StockTransactionUpdateManyWithWhereWithoutProductInput | Prisma.StockTransactionUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.StockTransactionScalarWhereInput | Prisma.StockTransactionScalarWhereInput[];
};
export type StockTransactionUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.StockTransactionCreateWithoutProductInput, Prisma.StockTransactionUncheckedCreateWithoutProductInput> | Prisma.StockTransactionCreateWithoutProductInput[] | Prisma.StockTransactionUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.StockTransactionCreateOrConnectWithoutProductInput | Prisma.StockTransactionCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.StockTransactionUpsertWithWhereUniqueWithoutProductInput | Prisma.StockTransactionUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.StockTransactionCreateManyProductInputEnvelope;
    set?: Prisma.StockTransactionWhereUniqueInput | Prisma.StockTransactionWhereUniqueInput[];
    disconnect?: Prisma.StockTransactionWhereUniqueInput | Prisma.StockTransactionWhereUniqueInput[];
    delete?: Prisma.StockTransactionWhereUniqueInput | Prisma.StockTransactionWhereUniqueInput[];
    connect?: Prisma.StockTransactionWhereUniqueInput | Prisma.StockTransactionWhereUniqueInput[];
    update?: Prisma.StockTransactionUpdateWithWhereUniqueWithoutProductInput | Prisma.StockTransactionUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.StockTransactionUpdateManyWithWhereWithoutProductInput | Prisma.StockTransactionUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.StockTransactionScalarWhereInput | Prisma.StockTransactionScalarWhereInput[];
};
export type StockTransactionCreateWithoutUserInput = {
    id?: string;
    transactionType: $Enums.TransactionType;
    quantity: number;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    referenceNumber?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutTransactionsInput;
    warehouse: Prisma.WarehouseCreateNestedOneWithoutTransactionsInput;
};
export type StockTransactionUncheckedCreateWithoutUserInput = {
    id?: string;
    productId: string;
    warehouseId: string;
    transactionType: $Enums.TransactionType;
    quantity: number;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    referenceNumber?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
};
export type StockTransactionCreateOrConnectWithoutUserInput = {
    where: Prisma.StockTransactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.StockTransactionCreateWithoutUserInput, Prisma.StockTransactionUncheckedCreateWithoutUserInput>;
};
export type StockTransactionCreateManyUserInputEnvelope = {
    data: Prisma.StockTransactionCreateManyUserInput | Prisma.StockTransactionCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type StockTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.StockTransactionWhereUniqueInput;
    update: Prisma.XOR<Prisma.StockTransactionUpdateWithoutUserInput, Prisma.StockTransactionUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.StockTransactionCreateWithoutUserInput, Prisma.StockTransactionUncheckedCreateWithoutUserInput>;
};
export type StockTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.StockTransactionWhereUniqueInput;
    data: Prisma.XOR<Prisma.StockTransactionUpdateWithoutUserInput, Prisma.StockTransactionUncheckedUpdateWithoutUserInput>;
};
export type StockTransactionUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.StockTransactionScalarWhereInput;
    data: Prisma.XOR<Prisma.StockTransactionUpdateManyMutationInput, Prisma.StockTransactionUncheckedUpdateManyWithoutUserInput>;
};
export type StockTransactionScalarWhereInput = {
    AND?: Prisma.StockTransactionScalarWhereInput | Prisma.StockTransactionScalarWhereInput[];
    OR?: Prisma.StockTransactionScalarWhereInput[];
    NOT?: Prisma.StockTransactionScalarWhereInput | Prisma.StockTransactionScalarWhereInput[];
    id?: Prisma.StringFilter<"StockTransaction"> | string;
    productId?: Prisma.StringFilter<"StockTransaction"> | string;
    warehouseId?: Prisma.StringFilter<"StockTransaction"> | string;
    transactionType?: Prisma.EnumTransactionTypeFilter<"StockTransaction"> | $Enums.TransactionType;
    quantity?: Prisma.IntFilter<"StockTransaction"> | number;
    unitCost?: Prisma.DecimalNullableFilter<"StockTransaction"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    referenceNumber?: Prisma.StringNullableFilter<"StockTransaction"> | string | null;
    notes?: Prisma.StringNullableFilter<"StockTransaction"> | string | null;
    performedBy?: Prisma.StringFilter<"StockTransaction"> | string;
    createdAt?: Prisma.DateTimeFilter<"StockTransaction"> | Date | string;
};
export type StockTransactionCreateWithoutWarehouseInput = {
    id?: string;
    transactionType: $Enums.TransactionType;
    quantity: number;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    referenceNumber?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutTransactionsInput;
    user: Prisma.UserCreateNestedOneWithoutTransactionsInput;
};
export type StockTransactionUncheckedCreateWithoutWarehouseInput = {
    id?: string;
    productId: string;
    transactionType: $Enums.TransactionType;
    quantity: number;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    referenceNumber?: string | null;
    notes?: string | null;
    performedBy: string;
    createdAt?: Date | string;
};
export type StockTransactionCreateOrConnectWithoutWarehouseInput = {
    where: Prisma.StockTransactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.StockTransactionCreateWithoutWarehouseInput, Prisma.StockTransactionUncheckedCreateWithoutWarehouseInput>;
};
export type StockTransactionCreateManyWarehouseInputEnvelope = {
    data: Prisma.StockTransactionCreateManyWarehouseInput | Prisma.StockTransactionCreateManyWarehouseInput[];
    skipDuplicates?: boolean;
};
export type StockTransactionUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: Prisma.StockTransactionWhereUniqueInput;
    update: Prisma.XOR<Prisma.StockTransactionUpdateWithoutWarehouseInput, Prisma.StockTransactionUncheckedUpdateWithoutWarehouseInput>;
    create: Prisma.XOR<Prisma.StockTransactionCreateWithoutWarehouseInput, Prisma.StockTransactionUncheckedCreateWithoutWarehouseInput>;
};
export type StockTransactionUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: Prisma.StockTransactionWhereUniqueInput;
    data: Prisma.XOR<Prisma.StockTransactionUpdateWithoutWarehouseInput, Prisma.StockTransactionUncheckedUpdateWithoutWarehouseInput>;
};
export type StockTransactionUpdateManyWithWhereWithoutWarehouseInput = {
    where: Prisma.StockTransactionScalarWhereInput;
    data: Prisma.XOR<Prisma.StockTransactionUpdateManyMutationInput, Prisma.StockTransactionUncheckedUpdateManyWithoutWarehouseInput>;
};
export type StockTransactionCreateWithoutProductInput = {
    id?: string;
    transactionType: $Enums.TransactionType;
    quantity: number;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    referenceNumber?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    warehouse: Prisma.WarehouseCreateNestedOneWithoutTransactionsInput;
    user: Prisma.UserCreateNestedOneWithoutTransactionsInput;
};
export type StockTransactionUncheckedCreateWithoutProductInput = {
    id?: string;
    warehouseId: string;
    transactionType: $Enums.TransactionType;
    quantity: number;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    referenceNumber?: string | null;
    notes?: string | null;
    performedBy: string;
    createdAt?: Date | string;
};
export type StockTransactionCreateOrConnectWithoutProductInput = {
    where: Prisma.StockTransactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.StockTransactionCreateWithoutProductInput, Prisma.StockTransactionUncheckedCreateWithoutProductInput>;
};
export type StockTransactionCreateManyProductInputEnvelope = {
    data: Prisma.StockTransactionCreateManyProductInput | Prisma.StockTransactionCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type StockTransactionUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.StockTransactionWhereUniqueInput;
    update: Prisma.XOR<Prisma.StockTransactionUpdateWithoutProductInput, Prisma.StockTransactionUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.StockTransactionCreateWithoutProductInput, Prisma.StockTransactionUncheckedCreateWithoutProductInput>;
};
export type StockTransactionUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.StockTransactionWhereUniqueInput;
    data: Prisma.XOR<Prisma.StockTransactionUpdateWithoutProductInput, Prisma.StockTransactionUncheckedUpdateWithoutProductInput>;
};
export type StockTransactionUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.StockTransactionScalarWhereInput;
    data: Prisma.XOR<Prisma.StockTransactionUpdateManyMutationInput, Prisma.StockTransactionUncheckedUpdateManyWithoutProductInput>;
};
export type StockTransactionCreateManyUserInput = {
    id?: string;
    productId: string;
    warehouseId: string;
    transactionType: $Enums.TransactionType;
    quantity: number;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    referenceNumber?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
};
export type StockTransactionUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionType?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    referenceNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutTransactionsNestedInput;
    warehouse?: Prisma.WarehouseUpdateOneRequiredWithoutTransactionsNestedInput;
};
export type StockTransactionUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    warehouseId?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionType?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    referenceNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StockTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    warehouseId?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionType?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    referenceNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StockTransactionCreateManyWarehouseInput = {
    id?: string;
    productId: string;
    transactionType: $Enums.TransactionType;
    quantity: number;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    referenceNumber?: string | null;
    notes?: string | null;
    performedBy: string;
    createdAt?: Date | string;
};
export type StockTransactionUpdateWithoutWarehouseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionType?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    referenceNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutTransactionsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutTransactionsNestedInput;
};
export type StockTransactionUncheckedUpdateWithoutWarehouseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionType?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    referenceNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    performedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StockTransactionUncheckedUpdateManyWithoutWarehouseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionType?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    referenceNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    performedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StockTransactionCreateManyProductInput = {
    id?: string;
    warehouseId: string;
    transactionType: $Enums.TransactionType;
    quantity: number;
    unitCost?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    referenceNumber?: string | null;
    notes?: string | null;
    performedBy: string;
    createdAt?: Date | string;
};
export type StockTransactionUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionType?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    referenceNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    warehouse?: Prisma.WarehouseUpdateOneRequiredWithoutTransactionsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutTransactionsNestedInput;
};
export type StockTransactionUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    warehouseId?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionType?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    referenceNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    performedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StockTransactionUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    warehouseId?: Prisma.StringFieldUpdateOperationsInput | string;
    transactionType?: Prisma.EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unitCost?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    referenceNumber?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    performedBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StockTransactionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    warehouseId?: boolean;
    transactionType?: boolean;
    quantity?: boolean;
    unitCost?: boolean;
    referenceNumber?: boolean;
    notes?: boolean;
    performedBy?: boolean;
    createdAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["stockTransaction"]>;
export type StockTransactionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    warehouseId?: boolean;
    transactionType?: boolean;
    quantity?: boolean;
    unitCost?: boolean;
    referenceNumber?: boolean;
    notes?: boolean;
    performedBy?: boolean;
    createdAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["stockTransaction"]>;
export type StockTransactionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    warehouseId?: boolean;
    transactionType?: boolean;
    quantity?: boolean;
    unitCost?: boolean;
    referenceNumber?: boolean;
    notes?: boolean;
    performedBy?: boolean;
    createdAt?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["stockTransaction"]>;
export type StockTransactionSelectScalar = {
    id?: boolean;
    productId?: boolean;
    warehouseId?: boolean;
    transactionType?: boolean;
    quantity?: boolean;
    unitCost?: boolean;
    referenceNumber?: boolean;
    notes?: boolean;
    performedBy?: boolean;
    createdAt?: boolean;
};
export type StockTransactionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "productId" | "warehouseId" | "transactionType" | "quantity" | "unitCost" | "referenceNumber" | "notes" | "performedBy" | "createdAt", ExtArgs["result"]["stockTransaction"]>;
export type StockTransactionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type StockTransactionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type StockTransactionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $StockTransactionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StockTransaction";
    objects: {
        product: Prisma.$ProductPayload<ExtArgs>;
        warehouse: Prisma.$WarehousePayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        productId: string;
        warehouseId: string;
        transactionType: $Enums.TransactionType;
        quantity: number;
        unitCost: runtime.Decimal | null;
        referenceNumber: string | null;
        notes: string | null;
        performedBy: string;
        createdAt: Date;
    }, ExtArgs["result"]["stockTransaction"]>;
    composites: {};
};
export type StockTransactionGetPayload<S extends boolean | null | undefined | StockTransactionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StockTransactionPayload, S>;
export type StockTransactionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StockTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StockTransactionCountAggregateInputType | true;
};
export interface StockTransactionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StockTransaction'];
        meta: {
            name: 'StockTransaction';
        };
    };
    findUnique<T extends StockTransactionFindUniqueArgs>(args: Prisma.SelectSubset<T, StockTransactionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StockTransactionClient<runtime.Types.Result.GetResult<Prisma.$StockTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StockTransactionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StockTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StockTransactionClient<runtime.Types.Result.GetResult<Prisma.$StockTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StockTransactionFindFirstArgs>(args?: Prisma.SelectSubset<T, StockTransactionFindFirstArgs<ExtArgs>>): Prisma.Prisma__StockTransactionClient<runtime.Types.Result.GetResult<Prisma.$StockTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StockTransactionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StockTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StockTransactionClient<runtime.Types.Result.GetResult<Prisma.$StockTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StockTransactionFindManyArgs>(args?: Prisma.SelectSubset<T, StockTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StockTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StockTransactionCreateArgs>(args: Prisma.SelectSubset<T, StockTransactionCreateArgs<ExtArgs>>): Prisma.Prisma__StockTransactionClient<runtime.Types.Result.GetResult<Prisma.$StockTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StockTransactionCreateManyArgs>(args?: Prisma.SelectSubset<T, StockTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StockTransactionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StockTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StockTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StockTransactionDeleteArgs>(args: Prisma.SelectSubset<T, StockTransactionDeleteArgs<ExtArgs>>): Prisma.Prisma__StockTransactionClient<runtime.Types.Result.GetResult<Prisma.$StockTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StockTransactionUpdateArgs>(args: Prisma.SelectSubset<T, StockTransactionUpdateArgs<ExtArgs>>): Prisma.Prisma__StockTransactionClient<runtime.Types.Result.GetResult<Prisma.$StockTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StockTransactionDeleteManyArgs>(args?: Prisma.SelectSubset<T, StockTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StockTransactionUpdateManyArgs>(args: Prisma.SelectSubset<T, StockTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StockTransactionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StockTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StockTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StockTransactionUpsertArgs>(args: Prisma.SelectSubset<T, StockTransactionUpsertArgs<ExtArgs>>): Prisma.Prisma__StockTransactionClient<runtime.Types.Result.GetResult<Prisma.$StockTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StockTransactionCountArgs>(args?: Prisma.Subset<T, StockTransactionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StockTransactionCountAggregateOutputType> : number>;
    aggregate<T extends StockTransactionAggregateArgs>(args: Prisma.Subset<T, StockTransactionAggregateArgs>): Prisma.PrismaPromise<GetStockTransactionAggregateType<T>>;
    groupBy<T extends StockTransactionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StockTransactionGroupByArgs['orderBy'];
    } : {
        orderBy?: StockTransactionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StockTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StockTransactionFieldRefs;
}
export interface Prisma__StockTransactionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    warehouse<T extends Prisma.WarehouseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WarehouseDefaultArgs<ExtArgs>>): Prisma.Prisma__WarehouseClient<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StockTransactionFieldRefs {
    readonly id: Prisma.FieldRef<"StockTransaction", 'String'>;
    readonly productId: Prisma.FieldRef<"StockTransaction", 'String'>;
    readonly warehouseId: Prisma.FieldRef<"StockTransaction", 'String'>;
    readonly transactionType: Prisma.FieldRef<"StockTransaction", 'TransactionType'>;
    readonly quantity: Prisma.FieldRef<"StockTransaction", 'Int'>;
    readonly unitCost: Prisma.FieldRef<"StockTransaction", 'Decimal'>;
    readonly referenceNumber: Prisma.FieldRef<"StockTransaction", 'String'>;
    readonly notes: Prisma.FieldRef<"StockTransaction", 'String'>;
    readonly performedBy: Prisma.FieldRef<"StockTransaction", 'String'>;
    readonly createdAt: Prisma.FieldRef<"StockTransaction", 'DateTime'>;
}
export type StockTransactionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StockTransactionSelect<ExtArgs> | null;
    omit?: Prisma.StockTransactionOmit<ExtArgs> | null;
    include?: Prisma.StockTransactionInclude<ExtArgs> | null;
    where: Prisma.StockTransactionWhereUniqueInput;
};
export type StockTransactionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StockTransactionSelect<ExtArgs> | null;
    omit?: Prisma.StockTransactionOmit<ExtArgs> | null;
    include?: Prisma.StockTransactionInclude<ExtArgs> | null;
    where: Prisma.StockTransactionWhereUniqueInput;
};
export type StockTransactionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StockTransactionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StockTransactionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type StockTransactionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StockTransactionSelect<ExtArgs> | null;
    omit?: Prisma.StockTransactionOmit<ExtArgs> | null;
    include?: Prisma.StockTransactionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StockTransactionCreateInput, Prisma.StockTransactionUncheckedCreateInput>;
};
export type StockTransactionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StockTransactionCreateManyInput | Prisma.StockTransactionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StockTransactionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StockTransactionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StockTransactionOmit<ExtArgs> | null;
    data: Prisma.StockTransactionCreateManyInput | Prisma.StockTransactionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.StockTransactionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type StockTransactionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StockTransactionSelect<ExtArgs> | null;
    omit?: Prisma.StockTransactionOmit<ExtArgs> | null;
    include?: Prisma.StockTransactionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StockTransactionUpdateInput, Prisma.StockTransactionUncheckedUpdateInput>;
    where: Prisma.StockTransactionWhereUniqueInput;
};
export type StockTransactionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StockTransactionUpdateManyMutationInput, Prisma.StockTransactionUncheckedUpdateManyInput>;
    where?: Prisma.StockTransactionWhereInput;
    limit?: number;
};
export type StockTransactionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StockTransactionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StockTransactionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StockTransactionUpdateManyMutationInput, Prisma.StockTransactionUncheckedUpdateManyInput>;
    where?: Prisma.StockTransactionWhereInput;
    limit?: number;
    include?: Prisma.StockTransactionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type StockTransactionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StockTransactionSelect<ExtArgs> | null;
    omit?: Prisma.StockTransactionOmit<ExtArgs> | null;
    include?: Prisma.StockTransactionInclude<ExtArgs> | null;
    where: Prisma.StockTransactionWhereUniqueInput;
    create: Prisma.XOR<Prisma.StockTransactionCreateInput, Prisma.StockTransactionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StockTransactionUpdateInput, Prisma.StockTransactionUncheckedUpdateInput>;
};
export type StockTransactionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StockTransactionSelect<ExtArgs> | null;
    omit?: Prisma.StockTransactionOmit<ExtArgs> | null;
    include?: Prisma.StockTransactionInclude<ExtArgs> | null;
    where: Prisma.StockTransactionWhereUniqueInput;
};
export type StockTransactionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StockTransactionWhereInput;
    limit?: number;
};
export type StockTransactionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StockTransactionSelect<ExtArgs> | null;
    omit?: Prisma.StockTransactionOmit<ExtArgs> | null;
    include?: Prisma.StockTransactionInclude<ExtArgs> | null;
};
export {};
