import { Module } from "@nestjs/common";
import { PurchaseRequestModuleBase } from "./base/purchaseRequest.module.base";
import { PurchaseRequestService } from "./purchaseRequest.service";
import { PurchaseRequestController } from "./purchaseRequest.controller";
import { PurchaseRequestResolver } from "./purchaseRequest.resolver";

@Module({
  imports: [PurchaseRequestModuleBase],
  controllers: [PurchaseRequestController],
  providers: [PurchaseRequestService, PurchaseRequestResolver],
  exports: [PurchaseRequestService],
})
export class PurchaseRequestModule {}
