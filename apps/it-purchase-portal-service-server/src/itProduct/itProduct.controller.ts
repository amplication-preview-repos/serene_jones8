import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ItProductService } from "./itProduct.service";
import { ItProductControllerBase } from "./base/itProduct.controller.base";

@swagger.ApiTags("itProducts")
@common.Controller("itProducts")
export class ItProductController extends ItProductControllerBase {
  constructor(protected readonly service: ItProductService) {
    super(service);
  }
}
