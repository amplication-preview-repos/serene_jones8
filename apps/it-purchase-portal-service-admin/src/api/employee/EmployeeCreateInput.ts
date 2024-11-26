import { PurchaseRequestCreateNestedManyWithoutEmployeesInput } from "./PurchaseRequestCreateNestedManyWithoutEmployeesInput";

export type EmployeeCreateInput = {
  email?: string | null;
  name?: string | null;
  position?: string | null;
  purchaseRequests?: PurchaseRequestCreateNestedManyWithoutEmployeesInput;
};
