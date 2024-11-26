import { PurchaseRequestWhereUniqueInput } from "../purchaseRequest/PurchaseRequestWhereUniqueInput";

export type ApprovalUpdateInput = {
  approvalDate?: Date | null;
  approver?: string | null;
  purchaseRequest?: PurchaseRequestWhereUniqueInput | null;
  status?: string | null;
};
