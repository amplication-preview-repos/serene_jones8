import { ApprovalListRelationFilter } from "../approval/ApprovalListRelationFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ItProductWhereUniqueInput } from "../itProduct/ItProductWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PurchaseRequestWhereInput = {
  approvals?: ApprovalListRelationFilter;
  employee?: EmployeeWhereUniqueInput;
  id?: StringFilter;
  itProduct?: ItProductWhereUniqueInput;
  requestDate?: DateTimeNullableFilter;
  status?: StringNullableFilter;
};
