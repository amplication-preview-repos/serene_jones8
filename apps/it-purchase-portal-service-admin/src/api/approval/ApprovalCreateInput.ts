import { PurchaseRequestWhereUniqueInput } from "../purchaseRequest/PurchaseRequestWhereUniqueInput";

export type ApprovalCreateInput = {
  approvalDate?: Date | null;
  approver?: string | null;
  purchaseRequest?: PurchaseRequestWhereUniqueInput | null;
  status?: string | null;
};
