import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PurchaseRequestListRelationFilter } from "../purchaseRequest/PurchaseRequestListRelationFilter";

export type EmployeeWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  position?: StringNullableFilter;
  purchaseRequests?: PurchaseRequestListRelationFilter;
};
