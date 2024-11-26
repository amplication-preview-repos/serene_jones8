import { PurchaseRequest } from "../purchaseRequest/PurchaseRequest";

export type ItProduct = {
  availability: boolean | null;
  createdAt: Date;
  description: string | null;
  id: string;
  price: number | null;
  productName: string | null;
  purchaseRequests?: Array<PurchaseRequest>;
  updatedAt: Date;
};
