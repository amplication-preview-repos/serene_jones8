import * as graphql from "@nestjs/graphql";
import { ApprovalResolverBase } from "./base/approval.resolver.base";
import { Approval } from "./base/Approval";
import { ApprovalService } from "./approval.service";

@graphql.Resolver(() => Approval)
export class ApprovalResolver extends ApprovalResolverBase {
  constructor(protected readonly service: ApprovalService) {
    super(service);
  }
}
