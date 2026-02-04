"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonNullValueFilter = exports.NullsOrder = exports.QueryMode = exports.NullableJsonNullValueInput = exports.SortOrder = exports.AuditLogScalarFieldEnum = exports.CategoryScalarFieldEnum = exports.SupplierScalarFieldEnum = exports.PurchaseOrderItemScalarFieldEnum = exports.PurchaseOrderScalarFieldEnum = exports.ProductScalarFieldEnum = exports.StockTransactionScalarFieldEnum = exports.InventoryScalarFieldEnum = exports.WarehouseScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = require("@prisma/client/runtime/index-browser");
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    Warehouse: 'Warehouse',
    Inventory: 'Inventory',
    StockTransaction: 'StockTransaction',
    Product: 'Product',
    PurchaseOrder: 'PurchaseOrder',
    PurchaseOrderItem: 'PurchaseOrderItem',
    Supplier: 'Supplier',
    Category: 'Category',
    AuditLog: 'AuditLog'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    firstName: 'firstName',
    lastName: 'lastName',
    role: 'role',
    isActive: 'isActive',
    lastLogin: 'lastLogin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.WarehouseScalarFieldEnum = {
    id: 'id',
    code: 'code',
    name: 'name',
    address: 'address',
    city: 'city',
    state: 'state',
    country: 'country',
    postalCode: 'postalCode',
    managerId: 'managerId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.InventoryScalarFieldEnum = {
    id: 'id',
    productId: 'productId',
    warehouseId: 'warehouseId',
    quantityOnHand: 'quantityOnHand',
    quantityReserved: 'quantityReserved',
    lastCounted: 'lastCounted',
    binLocation: 'binLocation',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.StockTransactionScalarFieldEnum = {
    id: 'id',
    productId: 'productId',
    warehouseId: 'warehouseId',
    transactionType: 'transactionType',
    quantity: 'quantity',
    unitCost: 'unitCost',
    referenceNumber: 'referenceNumber',
    notes: 'notes',
    performedBy: 'performedBy',
    createdAt: 'createdAt'
};
exports.ProductScalarFieldEnum = {
    id: 'id',
    sku: 'sku',
    name: 'name',
    description: 'description',
    categoryId: 'categoryId',
    unitOfMeasure: 'unitOfMeasure',
    reorderPoint: 'reorderPoint',
    reorderQuantity: 'reorderQuantity',
    unitPrice: 'unitPrice',
    barcode: 'barcode',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PurchaseOrderScalarFieldEnum = {
    id: 'id',
    poNumber: 'poNumber',
    supplierId: 'supplierId',
    warehouseId: 'warehouseId',
    status: 'status',
    orderDate: 'orderDate',
    expectedDelivery: 'expectedDelivery',
    totalAmount: 'totalAmount',
    notes: 'notes',
    createdBy: 'createdBy',
    approvedBy: 'approvedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PurchaseOrderItemScalarFieldEnum = {
    id: 'id',
    purchaseOrderId: 'purchaseOrderId',
    productId: 'productId',
    quantityOrdered: 'quantityOrdered',
    quantityReceived: 'quantityReceived',
    unitPrice: 'unitPrice',
    totalPrice: 'totalPrice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SupplierScalarFieldEnum = {
    id: 'id',
    code: 'code',
    name: 'name',
    contactPerson: 'contactPerson',
    email: 'email',
    phone: 'phone',
    address: 'address',
    paymentTerms: 'paymentTerms',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.CategoryScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    parentId: 'parentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.AuditLogScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    action: 'action',
    entityType: 'entityType',
    entityId: 'entityId',
    oldValues: 'oldValues',
    newValues: 'newValues',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    createdAt: 'createdAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map