import { PurchaseRequestUpdateManyWithoutItProductsInput } from "./PurchaseRequestUpdateManyWithoutItProductsInput";

export type ItProductUpdateInput = {
  availability?: boolean | null;
  description?: string | null;
  price?: number | null;
  productName?: string | null;
  purchaseRequests?: PurchaseRequestUpdateManyWithoutItProductsInput;
};
