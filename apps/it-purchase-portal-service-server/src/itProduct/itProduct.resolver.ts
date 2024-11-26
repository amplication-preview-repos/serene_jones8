import * as graphql from "@nestjs/graphql";
import { ItProductResolverBase } from "./base/itProduct.resolver.base";
import { ItProduct } from "./base/ItProduct";
import { ItProductService } from "./itProduct.service";

@graphql.Resolver(() => ItProduct)
export class ItProductResolver extends ItProductResolverBase {
  constructor(protected readonly service: ItProductService) {
    super(service);
  }
}
