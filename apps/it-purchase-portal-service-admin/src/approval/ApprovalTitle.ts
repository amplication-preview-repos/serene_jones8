import { Approval as TApproval } from "../api/approval/Approval";

export const APPROVAL_TITLE_FIELD = "approver";

export const ApprovalTitle = (record: TApproval): string => {
  return record.approver?.toString() || String(record.id);
};
