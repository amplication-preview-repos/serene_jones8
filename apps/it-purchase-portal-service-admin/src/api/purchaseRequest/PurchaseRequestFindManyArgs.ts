import { PurchaseRequestWhereInput } from "./PurchaseRequestWhereInput";
import { PurchaseRequestOrderByInput } from "./PurchaseRequestOrderByInput";

export type PurchaseRequestFindManyArgs = {
  where?: PurchaseRequestWhereInput;
  orderBy?: Array<PurchaseRequestOrderByInput>;
  skip?: number;
  take?: number;
};
