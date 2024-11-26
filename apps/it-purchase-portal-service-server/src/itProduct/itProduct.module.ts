import { Module } from "@nestjs/common";
import { ItProductModuleBase } from "./base/itProduct.module.base";
import { ItProductService } from "./itProduct.service";
import { ItProductController } from "./itProduct.controller";
import { ItProductResolver } from "./itProduct.resolver";

@Module({
  imports: [ItProductModuleBase],
  controllers: [ItProductController],
  providers: [ItProductService, ItProductResolver],
  exports: [ItProductService],
})
export class ItProductModule {}
