import { PurchaseRequestCreateNestedManyWithoutItProductsInput } from "./PurchaseRequestCreateNestedManyWithoutItProductsInput";

export type ItProductCreateInput = {
  availability?: boolean | null;
  description?: string | null;
  price?: number | null;
  productName?: string | null;
  purchaseRequests?: PurchaseRequestCreateNestedManyWithoutItProductsInput;
};
