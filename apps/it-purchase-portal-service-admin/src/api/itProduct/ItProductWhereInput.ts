import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { PurchaseRequestListRelationFilter } from "../purchaseRequest/PurchaseRequestListRelationFilter";

export type ItProductWhereInput = {
  availability?: BooleanNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  productName?: StringNullableFilter;
  purchaseRequests?: PurchaseRequestListRelationFilter;
};
