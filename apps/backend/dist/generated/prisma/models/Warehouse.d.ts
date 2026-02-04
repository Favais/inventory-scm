import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type WarehouseModel = runtime.Types.Result.DefaultSelection<Prisma.$WarehousePayload>;
export type AggregateWarehouse = {
    _count: WarehouseCountAggregateOutputType | null;
    _min: WarehouseMinAggregateOutputType | null;
    _max: WarehouseMaxAggregateOutputType | null;
};
export type WarehouseMinAggregateOutputType = {
    id: string | null;
    code: string | null;
    name: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    country: string | null;
    postalCode: string | null;
    managerId: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type WarehouseMaxAggregateOutputType = {
    id: string | null;
    code: string | null;
    name: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    country: string | null;
    postalCode: string | null;
    managerId: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type WarehouseCountAggregateOutputType = {
    id: number;
    code: number;
    name: number;
    address: number;
    city: number;
    state: number;
    country: number;
    postalCode: number;
    managerId: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type WarehouseMinAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    address?: true;
    city?: true;
    state?: true;
    country?: true;
    postalCode?: true;
    managerId?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type WarehouseMaxAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    address?: true;
    city?: true;
    state?: true;
    country?: true;
    postalCode?: true;
    managerId?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type WarehouseCountAggregateInputType = {
    id?: true;
    code?: true;
    name?: true;
    address?: true;
    city?: true;
    state?: true;
    country?: true;
    postalCode?: true;
    managerId?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type WarehouseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WarehouseWhereInput;
    orderBy?: Prisma.WarehouseOrderByWithRelationInput | Prisma.WarehouseOrderByWithRelationInput[];
    cursor?: Prisma.WarehouseWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WarehouseCountAggregateInputType;
    _min?: WarehouseMinAggregateInputType;
    _max?: WarehouseMaxAggregateInputType;
};
export type GetWarehouseAggregateType<T extends WarehouseAggregateArgs> = {
    [P in keyof T & keyof AggregateWarehouse]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWarehouse[P]> : Prisma.GetScalarType<T[P], AggregateWarehouse[P]>;
};
export type WarehouseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WarehouseWhereInput;
    orderBy?: Prisma.WarehouseOrderByWithAggregationInput | Prisma.WarehouseOrderByWithAggregationInput[];
    by: Prisma.WarehouseScalarFieldEnum[] | Prisma.WarehouseScalarFieldEnum;
    having?: Prisma.WarehouseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WarehouseCountAggregateInputType | true;
    _min?: WarehouseMinAggregateInputType;
    _max?: WarehouseMaxAggregateInputType;
};
export type WarehouseGroupByOutputType = {
    id: string;
    code: string;
    name: string;
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode: string | null;
    managerId: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: WarehouseCountAggregateOutputType | null;
    _min: WarehouseMinAggregateOutputType | null;
    _max: WarehouseMaxAggregateOutputType | null;
};
type GetWarehouseGroupByPayload<T extends WarehouseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WarehouseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WarehouseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WarehouseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WarehouseGroupByOutputType[P]>;
}>>;
export type WarehouseWhereInput = {
    AND?: Prisma.WarehouseWhereInput | Prisma.WarehouseWhereInput[];
    OR?: Prisma.WarehouseWhereInput[];
    NOT?: Prisma.WarehouseWhereInput | Prisma.WarehouseWhereInput[];
    id?: Prisma.StringFilter<"Warehouse"> | string;
    code?: Prisma.StringFilter<"Warehouse"> | string;
    name?: Prisma.StringFilter<"Warehouse"> | string;
    address?: Prisma.StringFilter<"Warehouse"> | string;
    city?: Prisma.StringFilter<"Warehouse"> | string;
    state?: Prisma.StringFilter<"Warehouse"> | string;
    country?: Prisma.StringFilter<"Warehouse"> | string;
    postalCode?: Prisma.StringNullableFilter<"Warehouse"> | string | null;
    managerId?: Prisma.StringFilter<"Warehouse"> | string;
    isActive?: Prisma.BoolFilter<"Warehouse"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Warehouse"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Warehouse"> | Date | string;
    manager?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    inventory?: Prisma.InventoryListRelationFilter;
    transactions?: Prisma.StockTransactionListRelationFilter;
    purchaseOrders?: Prisma.PurchaseOrderListRelationFilter;
};
export type WarehouseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    postalCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    managerId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    manager?: Prisma.UserOrderByWithRelationInput;
    inventory?: Prisma.InventoryOrderByRelationAggregateInput;
    transactions?: Prisma.StockTransactionOrderByRelationAggregateInput;
    purchaseOrders?: Prisma.PurchaseOrderOrderByRelationAggregateInput;
};
export type WarehouseWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.WarehouseWhereInput | Prisma.WarehouseWhereInput[];
    OR?: Prisma.WarehouseWhereInput[];
    NOT?: Prisma.WarehouseWhereInput | Prisma.WarehouseWhereInput[];
    name?: Prisma.StringFilter<"Warehouse"> | string;
    address?: Prisma.StringFilter<"Warehouse"> | string;
    city?: Prisma.StringFilter<"Warehouse"> | string;
    state?: Prisma.StringFilter<"Warehouse"> | string;
    country?: Prisma.StringFilter<"Warehouse"> | string;
    postalCode?: Prisma.StringNullableFilter<"Warehouse"> | string | null;
    managerId?: Prisma.StringFilter<"Warehouse"> | string;
    isActive?: Prisma.BoolFilter<"Warehouse"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Warehouse"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Warehouse"> | Date | string;
    manager?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    inventory?: Prisma.InventoryListRelationFilter;
    transactions?: Prisma.StockTransactionListRelationFilter;
    purchaseOrders?: Prisma.PurchaseOrderListRelationFilter;
}, "id" | "code">;
export type WarehouseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    postalCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    managerId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.WarehouseCountOrderByAggregateInput;
    _max?: Prisma.WarehouseMaxOrderByAggregateInput;
    _min?: Prisma.WarehouseMinOrderByAggregateInput;
};
export type WarehouseScalarWhereWithAggregatesInput = {
    AND?: Prisma.WarehouseScalarWhereWithAggregatesInput | Prisma.WarehouseScalarWhereWithAggregatesInput[];
    OR?: Prisma.WarehouseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WarehouseScalarWhereWithAggregatesInput | Prisma.WarehouseScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Warehouse"> | string;
    code?: Prisma.StringWithAggregatesFilter<"Warehouse"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Warehouse"> | string;
    address?: Prisma.StringWithAggregatesFilter<"Warehouse"> | string;
    city?: Prisma.StringWithAggregatesFilter<"Warehouse"> | string;
    state?: Prisma.StringWithAggregatesFilter<"Warehouse"> | string;
    country?: Prisma.StringWithAggregatesFilter<"Warehouse"> | string;
    postalCode?: Prisma.StringNullableWithAggregatesFilter<"Warehouse"> | string | null;
    managerId?: Prisma.StringWithAggregatesFilter<"Warehouse"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"Warehouse"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Warehouse"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Warehouse"> | Date | string;
};
export type WarehouseCreateInput = {
    id?: string;
    code: string;
    name: string;
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    manager: Prisma.UserCreateNestedOneWithoutManagedWarehousesInput;
    inventory?: Prisma.InventoryCreateNestedManyWithoutWarehouseInput;
    transactions?: Prisma.StockTransactionCreateNestedManyWithoutWarehouseInput;
    purchaseOrders?: Prisma.PurchaseOrderCreateNestedManyWithoutWarehouseInput;
};
export type WarehouseUncheckedCreateInput = {
    id?: string;
    code: string;
    name: string;
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode?: string | null;
    managerId: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inventory?: Prisma.InventoryUncheckedCreateNestedManyWithoutWarehouseInput;
    transactions?: Prisma.StockTransactionUncheckedCreateNestedManyWithoutWarehouseInput;
    purchaseOrders?: Prisma.PurchaseOrderUncheckedCreateNestedManyWithoutWarehouseInput;
};
export type WarehouseUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    manager?: Prisma.UserUpdateOneRequiredWithoutManagedWarehousesNestedInput;
    inventory?: Prisma.InventoryUpdateManyWithoutWarehouseNestedInput;
    transactions?: Prisma.StockTransactionUpdateManyWithoutWarehouseNestedInput;
    purchaseOrders?: Prisma.PurchaseOrderUpdateManyWithoutWarehouseNestedInput;
};
export type WarehouseUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    managerId?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: Prisma.InventoryUncheckedUpdateManyWithoutWarehouseNestedInput;
    transactions?: Prisma.StockTransactionUncheckedUpdateManyWithoutWarehouseNestedInput;
    purchaseOrders?: Prisma.PurchaseOrderUncheckedUpdateManyWithoutWarehouseNestedInput;
};
export type WarehouseCreateManyInput = {
    id?: string;
    code: string;
    name: string;
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode?: string | null;
    managerId: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WarehouseUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WarehouseUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    managerId?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WarehouseListRelationFilter = {
    every?: Prisma.WarehouseWhereInput;
    some?: Prisma.WarehouseWhereInput;
    none?: Prisma.WarehouseWhereInput;
};
export type WarehouseOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WarehouseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    postalCode?: Prisma.SortOrder;
    managerId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WarehouseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    postalCode?: Prisma.SortOrder;
    managerId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WarehouseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    postalCode?: Prisma.SortOrder;
    managerId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WarehouseScalarRelationFilter = {
    is?: Prisma.WarehouseWhereInput;
    isNot?: Prisma.WarehouseWhereInput;
};
export type WarehouseCreateNestedManyWithoutManagerInput = {
    create?: Prisma.XOR<Prisma.WarehouseCreateWithoutManagerInput, Prisma.WarehouseUncheckedCreateWithoutManagerInput> | Prisma.WarehouseCreateWithoutManagerInput[] | Prisma.WarehouseUncheckedCreateWithoutManagerInput[];
    connectOrCreate?: Prisma.WarehouseCreateOrConnectWithoutManagerInput | Prisma.WarehouseCreateOrConnectWithoutManagerInput[];
    createMany?: Prisma.WarehouseCreateManyManagerInputEnvelope;
    connect?: Prisma.WarehouseWhereUniqueInput | Prisma.WarehouseWhereUniqueInput[];
};
export type WarehouseUncheckedCreateNestedManyWithoutManagerInput = {
    create?: Prisma.XOR<Prisma.WarehouseCreateWithoutManagerInput, Prisma.WarehouseUncheckedCreateWithoutManagerInput> | Prisma.WarehouseCreateWithoutManagerInput[] | Prisma.WarehouseUncheckedCreateWithoutManagerInput[];
    connectOrCreate?: Prisma.WarehouseCreateOrConnectWithoutManagerInput | Prisma.WarehouseCreateOrConnectWithoutManagerInput[];
    createMany?: Prisma.WarehouseCreateManyManagerInputEnvelope;
    connect?: Prisma.WarehouseWhereUniqueInput | Prisma.WarehouseWhereUniqueInput[];
};
export type WarehouseUpdateManyWithoutManagerNestedInput = {
    create?: Prisma.XOR<Prisma.WarehouseCreateWithoutManagerInput, Prisma.WarehouseUncheckedCreateWithoutManagerInput> | Prisma.WarehouseCreateWithoutManagerInput[] | Prisma.WarehouseUncheckedCreateWithoutManagerInput[];
    connectOrCreate?: Prisma.WarehouseCreateOrConnectWithoutManagerInput | Prisma.WarehouseCreateOrConnectWithoutManagerInput[];
    upsert?: Prisma.WarehouseUpsertWithWhereUniqueWithoutManagerInput | Prisma.WarehouseUpsertWithWhereUniqueWithoutManagerInput[];
    createMany?: Prisma.WarehouseCreateManyManagerInputEnvelope;
    set?: Prisma.WarehouseWhereUniqueInput | Prisma.WarehouseWhereUniqueInput[];
    disconnect?: Prisma.WarehouseWhereUniqueInput | Prisma.WarehouseWhereUniqueInput[];
    delete?: Prisma.WarehouseWhereUniqueInput | Prisma.WarehouseWhereUniqueInput[];
    connect?: Prisma.WarehouseWhereUniqueInput | Prisma.WarehouseWhereUniqueInput[];
    update?: Prisma.WarehouseUpdateWithWhereUniqueWithoutManagerInput | Prisma.WarehouseUpdateWithWhereUniqueWithoutManagerInput[];
    updateMany?: Prisma.WarehouseUpdateManyWithWhereWithoutManagerInput | Prisma.WarehouseUpdateManyWithWhereWithoutManagerInput[];
    deleteMany?: Prisma.WarehouseScalarWhereInput | Prisma.WarehouseScalarWhereInput[];
};
export type WarehouseUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: Prisma.XOR<Prisma.WarehouseCreateWithoutManagerInput, Prisma.WarehouseUncheckedCreateWithoutManagerInput> | Prisma.WarehouseCreateWithoutManagerInput[] | Prisma.WarehouseUncheckedCreateWithoutManagerInput[];
    connectOrCreate?: Prisma.WarehouseCreateOrConnectWithoutManagerInput | Prisma.WarehouseCreateOrConnectWithoutManagerInput[];
    upsert?: Prisma.WarehouseUpsertWithWhereUniqueWithoutManagerInput | Prisma.WarehouseUpsertWithWhereUniqueWithoutManagerInput[];
    createMany?: Prisma.WarehouseCreateManyManagerInputEnvelope;
    set?: Prisma.WarehouseWhereUniqueInput | Prisma.WarehouseWhereUniqueInput[];
    disconnect?: Prisma.WarehouseWhereUniqueInput | Prisma.WarehouseWhereUniqueInput[];
    delete?: Prisma.WarehouseWhereUniqueInput | Prisma.WarehouseWhereUniqueInput[];
    connect?: Prisma.WarehouseWhereUniqueInput | Prisma.WarehouseWhereUniqueInput[];
    update?: Prisma.WarehouseUpdateWithWhereUniqueWithoutManagerInput | Prisma.WarehouseUpdateWithWhereUniqueWithoutManagerInput[];
    updateMany?: Prisma.WarehouseUpdateManyWithWhereWithoutManagerInput | Prisma.WarehouseUpdateManyWithWhereWithoutManagerInput[];
    deleteMany?: Prisma.WarehouseScalarWhereInput | Prisma.WarehouseScalarWhereInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type WarehouseCreateNestedOneWithoutInventoryInput = {
    create?: Prisma.XOR<Prisma.WarehouseCreateWithoutInventoryInput, Prisma.WarehouseUncheckedCreateWithoutInventoryInput>;
    connectOrCreate?: Prisma.WarehouseCreateOrConnectWithoutInventoryInput;
    connect?: Prisma.WarehouseWhereUniqueInput;
};
export type WarehouseUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: Prisma.XOR<Prisma.WarehouseCreateWithoutInventoryInput, Prisma.WarehouseUncheckedCreateWithoutInventoryInput>;
    connectOrCreate?: Prisma.WarehouseCreateOrConnectWithoutInventoryInput;
    upsert?: Prisma.WarehouseUpsertWithoutInventoryInput;
    connect?: Prisma.WarehouseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.WarehouseUpdateToOneWithWhereWithoutInventoryInput, Prisma.WarehouseUpdateWithoutInventoryInput>, Prisma.WarehouseUncheckedUpdateWithoutInventoryInput>;
};
export type WarehouseCreateNestedOneWithoutTransactionsInput = {
    create?: Prisma.XOR<Prisma.WarehouseCreateWithoutTransactionsInput, Prisma.WarehouseUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.WarehouseCreateOrConnectWithoutTransactionsInput;
    connect?: Prisma.WarehouseWhereUniqueInput;
};
export type WarehouseUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: Prisma.XOR<Prisma.WarehouseCreateWithoutTransactionsInput, Prisma.WarehouseUncheckedCreateWithoutTransactionsInput>;
    connectOrCreate?: Prisma.WarehouseCreateOrConnectWithoutTransactionsInput;
    upsert?: Prisma.WarehouseUpsertWithoutTransactionsInput;
    connect?: Prisma.WarehouseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.WarehouseUpdateToOneWithWhereWithoutTransactionsInput, Prisma.WarehouseUpdateWithoutTransactionsInput>, Prisma.WarehouseUncheckedUpdateWithoutTransactionsInput>;
};
export type WarehouseCreateNestedOneWithoutPurchaseOrdersInput = {
    create?: Prisma.XOR<Prisma.WarehouseCreateWithoutPurchaseOrdersInput, Prisma.WarehouseUncheckedCreateWithoutPurchaseOrdersInput>;
    connectOrCreate?: Prisma.WarehouseCreateOrConnectWithoutPurchaseOrdersInput;
    connect?: Prisma.WarehouseWhereUniqueInput;
};
export type WarehouseUpdateOneRequiredWithoutPurchaseOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.WarehouseCreateWithoutPurchaseOrdersInput, Prisma.WarehouseUncheckedCreateWithoutPurchaseOrdersInput>;
    connectOrCreate?: Prisma.WarehouseCreateOrConnectWithoutPurchaseOrdersInput;
    upsert?: Prisma.WarehouseUpsertWithoutPurchaseOrdersInput;
    connect?: Prisma.WarehouseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.WarehouseUpdateToOneWithWhereWithoutPurchaseOrdersInput, Prisma.WarehouseUpdateWithoutPurchaseOrdersInput>, Prisma.WarehouseUncheckedUpdateWithoutPurchaseOrdersInput>;
};
export type WarehouseCreateWithoutManagerInput = {
    id?: string;
    code: string;
    name: string;
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inventory?: Prisma.InventoryCreateNestedManyWithoutWarehouseInput;
    transactions?: Prisma.StockTransactionCreateNestedManyWithoutWarehouseInput;
    purchaseOrders?: Prisma.PurchaseOrderCreateNestedManyWithoutWarehouseInput;
};
export type WarehouseUncheckedCreateWithoutManagerInput = {
    id?: string;
    code: string;
    name: string;
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inventory?: Prisma.InventoryUncheckedCreateNestedManyWithoutWarehouseInput;
    transactions?: Prisma.StockTransactionUncheckedCreateNestedManyWithoutWarehouseInput;
    purchaseOrders?: Prisma.PurchaseOrderUncheckedCreateNestedManyWithoutWarehouseInput;
};
export type WarehouseCreateOrConnectWithoutManagerInput = {
    where: Prisma.WarehouseWhereUniqueInput;
    create: Prisma.XOR<Prisma.WarehouseCreateWithoutManagerInput, Prisma.WarehouseUncheckedCreateWithoutManagerInput>;
};
export type WarehouseCreateManyManagerInputEnvelope = {
    data: Prisma.WarehouseCreateManyManagerInput | Prisma.WarehouseCreateManyManagerInput[];
    skipDuplicates?: boolean;
};
export type WarehouseUpsertWithWhereUniqueWithoutManagerInput = {
    where: Prisma.WarehouseWhereUniqueInput;
    update: Prisma.XOR<Prisma.WarehouseUpdateWithoutManagerInput, Prisma.WarehouseUncheckedUpdateWithoutManagerInput>;
    create: Prisma.XOR<Prisma.WarehouseCreateWithoutManagerInput, Prisma.WarehouseUncheckedCreateWithoutManagerInput>;
};
export type WarehouseUpdateWithWhereUniqueWithoutManagerInput = {
    where: Prisma.WarehouseWhereUniqueInput;
    data: Prisma.XOR<Prisma.WarehouseUpdateWithoutManagerInput, Prisma.WarehouseUncheckedUpdateWithoutManagerInput>;
};
export type WarehouseUpdateManyWithWhereWithoutManagerInput = {
    where: Prisma.WarehouseScalarWhereInput;
    data: Prisma.XOR<Prisma.WarehouseUpdateManyMutationInput, Prisma.WarehouseUncheckedUpdateManyWithoutManagerInput>;
};
export type WarehouseScalarWhereInput = {
    AND?: Prisma.WarehouseScalarWhereInput | Prisma.WarehouseScalarWhereInput[];
    OR?: Prisma.WarehouseScalarWhereInput[];
    NOT?: Prisma.WarehouseScalarWhereInput | Prisma.WarehouseScalarWhereInput[];
    id?: Prisma.StringFilter<"Warehouse"> | string;
    code?: Prisma.StringFilter<"Warehouse"> | string;
    name?: Prisma.StringFilter<"Warehouse"> | string;
    address?: Prisma.StringFilter<"Warehouse"> | string;
    city?: Prisma.StringFilter<"Warehouse"> | string;
    state?: Prisma.StringFilter<"Warehouse"> | string;
    country?: Prisma.StringFilter<"Warehouse"> | string;
    postalCode?: Prisma.StringNullableFilter<"Warehouse"> | string | null;
    managerId?: Prisma.StringFilter<"Warehouse"> | string;
    isActive?: Prisma.BoolFilter<"Warehouse"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Warehouse"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Warehouse"> | Date | string;
};
export type WarehouseCreateWithoutInventoryInput = {
    id?: string;
    code: string;
    name: string;
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    manager: Prisma.UserCreateNestedOneWithoutManagedWarehousesInput;
    transactions?: Prisma.StockTransactionCreateNestedManyWithoutWarehouseInput;
    purchaseOrders?: Prisma.PurchaseOrderCreateNestedManyWithoutWarehouseInput;
};
export type WarehouseUncheckedCreateWithoutInventoryInput = {
    id?: string;
    code: string;
    name: string;
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode?: string | null;
    managerId: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    transactions?: Prisma.StockTransactionUncheckedCreateNestedManyWithoutWarehouseInput;
    purchaseOrders?: Prisma.PurchaseOrderUncheckedCreateNestedManyWithoutWarehouseInput;
};
export type WarehouseCreateOrConnectWithoutInventoryInput = {
    where: Prisma.WarehouseWhereUniqueInput;
    create: Prisma.XOR<Prisma.WarehouseCreateWithoutInventoryInput, Prisma.WarehouseUncheckedCreateWithoutInventoryInput>;
};
export type WarehouseUpsertWithoutInventoryInput = {
    update: Prisma.XOR<Prisma.WarehouseUpdateWithoutInventoryInput, Prisma.WarehouseUncheckedUpdateWithoutInventoryInput>;
    create: Prisma.XOR<Prisma.WarehouseCreateWithoutInventoryInput, Prisma.WarehouseUncheckedCreateWithoutInventoryInput>;
    where?: Prisma.WarehouseWhereInput;
};
export type WarehouseUpdateToOneWithWhereWithoutInventoryInput = {
    where?: Prisma.WarehouseWhereInput;
    data: Prisma.XOR<Prisma.WarehouseUpdateWithoutInventoryInput, Prisma.WarehouseUncheckedUpdateWithoutInventoryInput>;
};
export type WarehouseUpdateWithoutInventoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    manager?: Prisma.UserUpdateOneRequiredWithoutManagedWarehousesNestedInput;
    transactions?: Prisma.StockTransactionUpdateManyWithoutWarehouseNestedInput;
    purchaseOrders?: Prisma.PurchaseOrderUpdateManyWithoutWarehouseNestedInput;
};
export type WarehouseUncheckedUpdateWithoutInventoryInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    managerId?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    transactions?: Prisma.StockTransactionUncheckedUpdateManyWithoutWarehouseNestedInput;
    purchaseOrders?: Prisma.PurchaseOrderUncheckedUpdateManyWithoutWarehouseNestedInput;
};
export type WarehouseCreateWithoutTransactionsInput = {
    id?: string;
    code: string;
    name: string;
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    manager: Prisma.UserCreateNestedOneWithoutManagedWarehousesInput;
    inventory?: Prisma.InventoryCreateNestedManyWithoutWarehouseInput;
    purchaseOrders?: Prisma.PurchaseOrderCreateNestedManyWithoutWarehouseInput;
};
export type WarehouseUncheckedCreateWithoutTransactionsInput = {
    id?: string;
    code: string;
    name: string;
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode?: string | null;
    managerId: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inventory?: Prisma.InventoryUncheckedCreateNestedManyWithoutWarehouseInput;
    purchaseOrders?: Prisma.PurchaseOrderUncheckedCreateNestedManyWithoutWarehouseInput;
};
export type WarehouseCreateOrConnectWithoutTransactionsInput = {
    where: Prisma.WarehouseWhereUniqueInput;
    create: Prisma.XOR<Prisma.WarehouseCreateWithoutTransactionsInput, Prisma.WarehouseUncheckedCreateWithoutTransactionsInput>;
};
export type WarehouseUpsertWithoutTransactionsInput = {
    update: Prisma.XOR<Prisma.WarehouseUpdateWithoutTransactionsInput, Prisma.WarehouseUncheckedUpdateWithoutTransactionsInput>;
    create: Prisma.XOR<Prisma.WarehouseCreateWithoutTransactionsInput, Prisma.WarehouseUncheckedCreateWithoutTransactionsInput>;
    where?: Prisma.WarehouseWhereInput;
};
export type WarehouseUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: Prisma.WarehouseWhereInput;
    data: Prisma.XOR<Prisma.WarehouseUpdateWithoutTransactionsInput, Prisma.WarehouseUncheckedUpdateWithoutTransactionsInput>;
};
export type WarehouseUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    manager?: Prisma.UserUpdateOneRequiredWithoutManagedWarehousesNestedInput;
    inventory?: Prisma.InventoryUpdateManyWithoutWarehouseNestedInput;
    purchaseOrders?: Prisma.PurchaseOrderUpdateManyWithoutWarehouseNestedInput;
};
export type WarehouseUncheckedUpdateWithoutTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    managerId?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: Prisma.InventoryUncheckedUpdateManyWithoutWarehouseNestedInput;
    purchaseOrders?: Prisma.PurchaseOrderUncheckedUpdateManyWithoutWarehouseNestedInput;
};
export type WarehouseCreateWithoutPurchaseOrdersInput = {
    id?: string;
    code: string;
    name: string;
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    manager: Prisma.UserCreateNestedOneWithoutManagedWarehousesInput;
    inventory?: Prisma.InventoryCreateNestedManyWithoutWarehouseInput;
    transactions?: Prisma.StockTransactionCreateNestedManyWithoutWarehouseInput;
};
export type WarehouseUncheckedCreateWithoutPurchaseOrdersInput = {
    id?: string;
    code: string;
    name: string;
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode?: string | null;
    managerId: string;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inventory?: Prisma.InventoryUncheckedCreateNestedManyWithoutWarehouseInput;
    transactions?: Prisma.StockTransactionUncheckedCreateNestedManyWithoutWarehouseInput;
};
export type WarehouseCreateOrConnectWithoutPurchaseOrdersInput = {
    where: Prisma.WarehouseWhereUniqueInput;
    create: Prisma.XOR<Prisma.WarehouseCreateWithoutPurchaseOrdersInput, Prisma.WarehouseUncheckedCreateWithoutPurchaseOrdersInput>;
};
export type WarehouseUpsertWithoutPurchaseOrdersInput = {
    update: Prisma.XOR<Prisma.WarehouseUpdateWithoutPurchaseOrdersInput, Prisma.WarehouseUncheckedUpdateWithoutPurchaseOrdersInput>;
    create: Prisma.XOR<Prisma.WarehouseCreateWithoutPurchaseOrdersInput, Prisma.WarehouseUncheckedCreateWithoutPurchaseOrdersInput>;
    where?: Prisma.WarehouseWhereInput;
};
export type WarehouseUpdateToOneWithWhereWithoutPurchaseOrdersInput = {
    where?: Prisma.WarehouseWhereInput;
    data: Prisma.XOR<Prisma.WarehouseUpdateWithoutPurchaseOrdersInput, Prisma.WarehouseUncheckedUpdateWithoutPurchaseOrdersInput>;
};
export type WarehouseUpdateWithoutPurchaseOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    manager?: Prisma.UserUpdateOneRequiredWithoutManagedWarehousesNestedInput;
    inventory?: Prisma.InventoryUpdateManyWithoutWarehouseNestedInput;
    transactions?: Prisma.StockTransactionUpdateManyWithoutWarehouseNestedInput;
};
export type WarehouseUncheckedUpdateWithoutPurchaseOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    managerId?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: Prisma.InventoryUncheckedUpdateManyWithoutWarehouseNestedInput;
    transactions?: Prisma.StockTransactionUncheckedUpdateManyWithoutWarehouseNestedInput;
};
export type WarehouseCreateManyManagerInput = {
    id?: string;
    code: string;
    name: string;
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WarehouseUpdateWithoutManagerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: Prisma.InventoryUpdateManyWithoutWarehouseNestedInput;
    transactions?: Prisma.StockTransactionUpdateManyWithoutWarehouseNestedInput;
    purchaseOrders?: Prisma.PurchaseOrderUpdateManyWithoutWarehouseNestedInput;
};
export type WarehouseUncheckedUpdateWithoutManagerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inventory?: Prisma.InventoryUncheckedUpdateManyWithoutWarehouseNestedInput;
    transactions?: Prisma.StockTransactionUncheckedUpdateManyWithoutWarehouseNestedInput;
    purchaseOrders?: Prisma.PurchaseOrderUncheckedUpdateManyWithoutWarehouseNestedInput;
};
export type WarehouseUncheckedUpdateManyWithoutManagerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    state?: Prisma.StringFieldUpdateOperationsInput | string;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    postalCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WarehouseCountOutputType = {
    inventory: number;
    transactions: number;
    purchaseOrders: number;
};
export type WarehouseCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inventory?: boolean | WarehouseCountOutputTypeCountInventoryArgs;
    transactions?: boolean | WarehouseCountOutputTypeCountTransactionsArgs;
    purchaseOrders?: boolean | WarehouseCountOutputTypeCountPurchaseOrdersArgs;
};
export type WarehouseCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarehouseCountOutputTypeSelect<ExtArgs> | null;
};
export type WarehouseCountOutputTypeCountInventoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InventoryWhereInput;
};
export type WarehouseCountOutputTypeCountTransactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StockTransactionWhereInput;
};
export type WarehouseCountOutputTypeCountPurchaseOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PurchaseOrderWhereInput;
};
export type WarehouseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    address?: boolean;
    city?: boolean;
    state?: boolean;
    country?: boolean;
    postalCode?: boolean;
    managerId?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    manager?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    inventory?: boolean | Prisma.Warehouse$inventoryArgs<ExtArgs>;
    transactions?: boolean | Prisma.Warehouse$transactionsArgs<ExtArgs>;
    purchaseOrders?: boolean | Prisma.Warehouse$purchaseOrdersArgs<ExtArgs>;
    _count?: boolean | Prisma.WarehouseCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["warehouse"]>;
export type WarehouseSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    address?: boolean;
    city?: boolean;
    state?: boolean;
    country?: boolean;
    postalCode?: boolean;
    managerId?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    manager?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["warehouse"]>;
export type WarehouseSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    name?: boolean;
    address?: boolean;
    city?: boolean;
    state?: boolean;
    country?: boolean;
    postalCode?: boolean;
    managerId?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    manager?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["warehouse"]>;
export type WarehouseSelectScalar = {
    id?: boolean;
    code?: boolean;
    name?: boolean;
    address?: boolean;
    city?: boolean;
    state?: boolean;
    country?: boolean;
    postalCode?: boolean;
    managerId?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type WarehouseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "name" | "address" | "city" | "state" | "country" | "postalCode" | "managerId" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["warehouse"]>;
export type WarehouseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    manager?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    inventory?: boolean | Prisma.Warehouse$inventoryArgs<ExtArgs>;
    transactions?: boolean | Prisma.Warehouse$transactionsArgs<ExtArgs>;
    purchaseOrders?: boolean | Prisma.Warehouse$purchaseOrdersArgs<ExtArgs>;
    _count?: boolean | Prisma.WarehouseCountOutputTypeDefaultArgs<ExtArgs>;
};
export type WarehouseIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    manager?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type WarehouseIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    manager?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $WarehousePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Warehouse";
    objects: {
        manager: Prisma.$UserPayload<ExtArgs>;
        inventory: Prisma.$InventoryPayload<ExtArgs>[];
        transactions: Prisma.$StockTransactionPayload<ExtArgs>[];
        purchaseOrders: Prisma.$PurchaseOrderPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        code: string;
        name: string;
        address: string;
        city: string;
        state: string;
        country: string;
        postalCode: string | null;
        managerId: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["warehouse"]>;
    composites: {};
};
export type WarehouseGetPayload<S extends boolean | null | undefined | WarehouseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WarehousePayload, S>;
export type WarehouseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WarehouseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WarehouseCountAggregateInputType | true;
};
export interface WarehouseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Warehouse'];
        meta: {
            name: 'Warehouse';
        };
    };
    findUnique<T extends WarehouseFindUniqueArgs>(args: Prisma.SelectSubset<T, WarehouseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WarehouseClient<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WarehouseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WarehouseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WarehouseClient<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WarehouseFindFirstArgs>(args?: Prisma.SelectSubset<T, WarehouseFindFirstArgs<ExtArgs>>): Prisma.Prisma__WarehouseClient<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WarehouseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WarehouseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WarehouseClient<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WarehouseFindManyArgs>(args?: Prisma.SelectSubset<T, WarehouseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WarehouseCreateArgs>(args: Prisma.SelectSubset<T, WarehouseCreateArgs<ExtArgs>>): Prisma.Prisma__WarehouseClient<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WarehouseCreateManyArgs>(args?: Prisma.SelectSubset<T, WarehouseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WarehouseCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WarehouseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WarehouseDeleteArgs>(args: Prisma.SelectSubset<T, WarehouseDeleteArgs<ExtArgs>>): Prisma.Prisma__WarehouseClient<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WarehouseUpdateArgs>(args: Prisma.SelectSubset<T, WarehouseUpdateArgs<ExtArgs>>): Prisma.Prisma__WarehouseClient<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WarehouseDeleteManyArgs>(args?: Prisma.SelectSubset<T, WarehouseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WarehouseUpdateManyArgs>(args: Prisma.SelectSubset<T, WarehouseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WarehouseUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WarehouseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WarehouseUpsertArgs>(args: Prisma.SelectSubset<T, WarehouseUpsertArgs<ExtArgs>>): Prisma.Prisma__WarehouseClient<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WarehouseCountArgs>(args?: Prisma.Subset<T, WarehouseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WarehouseCountAggregateOutputType> : number>;
    aggregate<T extends WarehouseAggregateArgs>(args: Prisma.Subset<T, WarehouseAggregateArgs>): Prisma.PrismaPromise<GetWarehouseAggregateType<T>>;
    groupBy<T extends WarehouseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WarehouseGroupByArgs['orderBy'];
    } : {
        orderBy?: WarehouseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WarehouseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarehouseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WarehouseFieldRefs;
}
export interface Prisma__WarehouseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    manager<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    inventory<T extends Prisma.Warehouse$inventoryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Warehouse$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    transactions<T extends Prisma.Warehouse$transactionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Warehouse$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StockTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    purchaseOrders<T extends Prisma.Warehouse$purchaseOrdersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Warehouse$purchaseOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PurchaseOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WarehouseFieldRefs {
    readonly id: Prisma.FieldRef<"Warehouse", 'String'>;
    readonly code: Prisma.FieldRef<"Warehouse", 'String'>;
    readonly name: Prisma.FieldRef<"Warehouse", 'String'>;
    readonly address: Prisma.FieldRef<"Warehouse", 'String'>;
    readonly city: Prisma.FieldRef<"Warehouse", 'String'>;
    readonly state: Prisma.FieldRef<"Warehouse", 'String'>;
    readonly country: Prisma.FieldRef<"Warehouse", 'String'>;
    readonly postalCode: Prisma.FieldRef<"Warehouse", 'String'>;
    readonly managerId: Prisma.FieldRef<"Warehouse", 'String'>;
    readonly isActive: Prisma.FieldRef<"Warehouse", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Warehouse", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Warehouse", 'DateTime'>;
}
export type WarehouseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarehouseSelect<ExtArgs> | null;
    omit?: Prisma.WarehouseOmit<ExtArgs> | null;
    include?: Prisma.WarehouseInclude<ExtArgs> | null;
    where: Prisma.WarehouseWhereUniqueInput;
};
export type WarehouseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarehouseSelect<ExtArgs> | null;
    omit?: Prisma.WarehouseOmit<ExtArgs> | null;
    include?: Prisma.WarehouseInclude<ExtArgs> | null;
    where: Prisma.WarehouseWhereUniqueInput;
};
export type WarehouseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarehouseSelect<ExtArgs> | null;
    omit?: Prisma.WarehouseOmit<ExtArgs> | null;
    include?: Prisma.WarehouseInclude<ExtArgs> | null;
    where?: Prisma.WarehouseWhereInput;
    orderBy?: Prisma.WarehouseOrderByWithRelationInput | Prisma.WarehouseOrderByWithRelationInput[];
    cursor?: Prisma.WarehouseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WarehouseScalarFieldEnum | Prisma.WarehouseScalarFieldEnum[];
};
export type WarehouseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarehouseSelect<ExtArgs> | null;
    omit?: Prisma.WarehouseOmit<ExtArgs> | null;
    include?: Prisma.WarehouseInclude<ExtArgs> | null;
    where?: Prisma.WarehouseWhereInput;
    orderBy?: Prisma.WarehouseOrderByWithRelationInput | Prisma.WarehouseOrderByWithRelationInput[];
    cursor?: Prisma.WarehouseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WarehouseScalarFieldEnum | Prisma.WarehouseScalarFieldEnum[];
};
export type WarehouseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarehouseSelect<ExtArgs> | null;
    omit?: Prisma.WarehouseOmit<ExtArgs> | null;
    include?: Prisma.WarehouseInclude<ExtArgs> | null;
    where?: Prisma.WarehouseWhereInput;
    orderBy?: Prisma.WarehouseOrderByWithRelationInput | Prisma.WarehouseOrderByWithRelationInput[];
    cursor?: Prisma.WarehouseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WarehouseScalarFieldEnum | Prisma.WarehouseScalarFieldEnum[];
};
export type WarehouseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarehouseSelect<ExtArgs> | null;
    omit?: Prisma.WarehouseOmit<ExtArgs> | null;
    include?: Prisma.WarehouseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WarehouseCreateInput, Prisma.WarehouseUncheckedCreateInput>;
};
export type WarehouseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WarehouseCreateManyInput | Prisma.WarehouseCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WarehouseCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarehouseSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WarehouseOmit<ExtArgs> | null;
    data: Prisma.WarehouseCreateManyInput | Prisma.WarehouseCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.WarehouseIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type WarehouseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarehouseSelect<ExtArgs> | null;
    omit?: Prisma.WarehouseOmit<ExtArgs> | null;
    include?: Prisma.WarehouseInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WarehouseUpdateInput, Prisma.WarehouseUncheckedUpdateInput>;
    where: Prisma.WarehouseWhereUniqueInput;
};
export type WarehouseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WarehouseUpdateManyMutationInput, Prisma.WarehouseUncheckedUpdateManyInput>;
    where?: Prisma.WarehouseWhereInput;
    limit?: number;
};
export type WarehouseUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarehouseSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WarehouseOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WarehouseUpdateManyMutationInput, Prisma.WarehouseUncheckedUpdateManyInput>;
    where?: Prisma.WarehouseWhereInput;
    limit?: number;
    include?: Prisma.WarehouseIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type WarehouseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarehouseSelect<ExtArgs> | null;
    omit?: Prisma.WarehouseOmit<ExtArgs> | null;
    include?: Prisma.WarehouseInclude<ExtArgs> | null;
    where: Prisma.WarehouseWhereUniqueInput;
    create: Prisma.XOR<Prisma.WarehouseCreateInput, Prisma.WarehouseUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WarehouseUpdateInput, Prisma.WarehouseUncheckedUpdateInput>;
};
export type WarehouseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarehouseSelect<ExtArgs> | null;
    omit?: Prisma.WarehouseOmit<ExtArgs> | null;
    include?: Prisma.WarehouseInclude<ExtArgs> | null;
    where: Prisma.WarehouseWhereUniqueInput;
};
export type WarehouseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WarehouseWhereInput;
    limit?: number;
};
export type Warehouse$inventoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Warehouse$transactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Warehouse$purchaseOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type WarehouseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WarehouseSelect<ExtArgs> | null;
    omit?: Prisma.WarehouseOmit<ExtArgs> | null;
    include?: Prisma.WarehouseInclude<ExtArgs> | null;
};
export {};
