import { SortOrder } from "../../util/SortOrder";

export type ItProductOrderByInput = {
  availability?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  productName?: SortOrder;
  updatedAt?: SortOrder;
};
