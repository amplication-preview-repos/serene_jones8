import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PurchaseRequestServiceBase } from "./base/purchaseRequest.service.base";

@Injectable()
export class PurchaseRequestService extends PurchaseRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
