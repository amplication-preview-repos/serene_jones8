import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PurchaseRequestService } from "./purchaseRequest.service";
import { PurchaseRequestControllerBase } from "./base/purchaseRequest.controller.base";

@swagger.ApiTags("purchaseRequests")
@common.Controller("purchaseRequests")
export class PurchaseRequestController extends PurchaseRequestControllerBase {
  constructor(protected readonly service: PurchaseRequestService) {
    super(service);
  }
}
