import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApprovalServiceBase } from "./base/approval.service.base";

@Injectable()
export class ApprovalService extends ApprovalServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
