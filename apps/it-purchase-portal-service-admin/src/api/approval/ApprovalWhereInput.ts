import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PurchaseRequestWhereUniqueInput } from "../purchaseRequest/PurchaseRequestWhereUniqueInput";

export type ApprovalWhereInput = {
  approvalDate?: DateTimeNullableFilter;
  approver?: StringNullableFilter;
  id?: StringFilter;
  purchaseRequest?: PurchaseRequestWhereUniqueInput;
  status?: StringNullableFilter;
};
