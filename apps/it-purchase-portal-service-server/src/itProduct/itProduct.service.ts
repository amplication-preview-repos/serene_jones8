import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ItProductServiceBase } from "./base/itProduct.service.base";

@Injectable()
export class ItProductService extends ItProductServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
