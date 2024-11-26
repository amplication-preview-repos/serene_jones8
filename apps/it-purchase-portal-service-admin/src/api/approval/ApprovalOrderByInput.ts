import { SortOrder } from "../../util/SortOrder";

export type ApprovalOrderByInput = {
  approvalDate?: SortOrder;
  approver?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  purchaseRequestId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
