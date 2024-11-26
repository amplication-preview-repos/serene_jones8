import { PurchaseRequest as TPurchaseRequest } from "../api/purchaseRequest/PurchaseRequest";

export const PURCHASEREQUEST_TITLE_FIELD = "status";

export const PurchaseRequestTitle = (record: TPurchaseRequest): string => {
  return record.status?.toString() || String(record.id);
};
