export declare const UserRole: {
    readonly ADMIN: "ADMIN";
    readonly MANAGER: "MANAGER";
    readonly CLERK: "CLERK";
    readonly VIEWER: "VIEWER";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const TransactionType: {
    readonly RECEIPT: "RECEIPT";
    readonly ISSUE: "ISSUE";
    readonly ADJUSTMENT: "ADJUSTMENT";
    readonly TRANSFER_OUT: "TRANSFER_OUT";
    readonly TRANSFER_IN: "TRANSFER_IN";
};
export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType];
export declare const PurchaseOrderStatus: {
    readonly DRAFT: "DRAFT";
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly RECEIVED: "RECEIVED";
    readonly CANCELLED: "CANCELLED";
};
export type PurchaseOrderStatus = (typeof PurchaseOrderStatus)[keyof typeof PurchaseOrderStatus];
