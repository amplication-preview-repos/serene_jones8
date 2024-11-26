import * as graphql from "@nestjs/graphql";
import { PurchaseRequestResolverBase } from "./base/purchaseRequest.resolver.base";
import { PurchaseRequest } from "./base/PurchaseRequest";
import { PurchaseRequestService } from "./purchaseRequest.service";

@graphql.Resolver(() => PurchaseRequest)
export class PurchaseRequestResolver extends PurchaseRequestResolverBase {
  constructor(protected readonly service: PurchaseRequestService) {
    super(service);
  }
}
