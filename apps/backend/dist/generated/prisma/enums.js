"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseOrderStatus = exports.TransactionType = exports.UserRole = void 0;
exports.UserRole = {
    ADMIN: 'ADMIN',
    MANAGER: 'MANAGER',
    CLERK: 'CLERK',
    VIEWER: 'VIEWER'
};
exports.TransactionType = {
    RECEIPT: 'RECEIPT',
    ISSUE: 'ISSUE',
    ADJUSTMENT: 'ADJUSTMENT',
    TRANSFER_OUT: 'TRANSFER_OUT',
    TRANSFER_IN: 'TRANSFER_IN'
};
exports.PurchaseOrderStatus = {
    DRAFT: 'DRAFT',
    PENDING: 'PENDING',
    APPROVED: 'APPROVED',
    RECEIVED: 'RECEIVED',
    CANCELLED: 'CANCELLED'
};
//# sourceMappingURL=enums.js.map