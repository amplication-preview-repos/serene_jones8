import { Approval } from "../approval/Approval";
import { Employee } from "../employee/Employee";
import { ItProduct } from "../itProduct/ItProduct";

export type PurchaseRequest = {
  approvals?: Array<Approval>;
  createdAt: Date;
  employee?: Employee | null;
  id: string;
  itProduct?: ItProduct | null;
  requestDate: Date | null;
  status: string | null;
  updatedAt: Date;
};
