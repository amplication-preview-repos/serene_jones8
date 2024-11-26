import { Module } from "@nestjs/common";
import { ApprovalModuleBase } from "./base/approval.module.base";
import { ApprovalService } from "./approval.service";
import { ApprovalController } from "./approval.controller";
import { ApprovalResolver } from "./approval.resolver";

@Module({
  imports: [ApprovalModuleBase],
  controllers: [ApprovalController],
  providers: [ApprovalService, ApprovalResolver],
  exports: [ApprovalService],
})
export class ApprovalModule {}
