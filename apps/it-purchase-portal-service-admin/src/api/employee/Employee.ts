import { PurchaseRequest } from "../purchaseRequest/PurchaseRequest";

export type Employee = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  position: string | null;
  purchaseRequests?: Array<PurchaseRequest>;
  updatedAt: Date;
};
