import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ApprovalService } from "./approval.service";
import { ApprovalControllerBase } from "./base/approval.controller.base";

@swagger.ApiTags("approvals")
@common.Controller("approvals")
export class ApprovalController extends ApprovalControllerBase {
  constructor(protected readonly service: ApprovalService) {
    super(service);
  }
}
