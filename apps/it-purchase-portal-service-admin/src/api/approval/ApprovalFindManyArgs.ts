import { ApprovalWhereInput } from "./ApprovalWhereInput";
import { ApprovalOrderByInput } from "./ApprovalOrderByInput";

export type ApprovalFindManyArgs = {
  where?: ApprovalWhereInput;
  orderBy?: Array<ApprovalOrderByInput>;
  skip?: number;
  take?: number;
};
