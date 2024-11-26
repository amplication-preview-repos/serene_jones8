import { ApprovalUpdateManyWithoutPurchaseRequestsInput } from "./ApprovalUpdateManyWithoutPurchaseRequestsInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { ItProductWhereUniqueInput } from "../itProduct/ItProductWhereUniqueInput";

export type PurchaseRequestUpdateInput = {
  approvals?: ApprovalUpdateManyWithoutPurchaseRequestsInput;
  employee?: EmployeeWhereUniqueInput | null;
  itProduct?: ItProductWhereUniqueInput | null;
  requestDate?: Date | null;
  status?: string | null;
};
