import { PurchaseRequestUpdateManyWithoutEmployeesInput } from "./PurchaseRequestUpdateManyWithoutEmployeesInput";

export type EmployeeUpdateInput = {
  email?: string | null;
  name?: string | null;
  position?: string | null;
  purchaseRequests?: PurchaseRequestUpdateManyWithoutEmployeesInput;
};
