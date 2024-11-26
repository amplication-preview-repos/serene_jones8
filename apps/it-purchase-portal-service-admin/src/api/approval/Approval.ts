import { PurchaseRequest } from "../purchaseRequest/PurchaseRequest";

export type Approval = {
  approvalDate: Date | null;
  approver: string | null;
  createdAt: Date;
  id: string;
  purchaseRequest?: PurchaseRequest | null;
  status: string | null;
  updatedAt: Date;
};
