import { ApprovalCreateNestedManyWithoutPurchaseRequestsInput } from "./ApprovalCreateNestedManyWithoutPurchaseRequestsInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { ItProductWhereUniqueInput } from "../itProduct/ItProductWhereUniqueInput";

export type PurchaseRequestCreateInput = {
  approvals?: ApprovalCreateNestedManyWithoutPurchaseRequestsInput;
  employee?: EmployeeWhereUniqueInput | null;
  itProduct?: ItProductWhereUniqueInput | null;
  requestDate?: Date | null;
  status?: string | null;
};
