/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { PurchaseRequest } from "./PurchaseRequest";
import { PurchaseRequestCountArgs } from "./PurchaseRequestCountArgs";
import { PurchaseRequestFindManyArgs } from "./PurchaseRequestFindManyArgs";
import { PurchaseRequestFindUniqueArgs } from "./PurchaseRequestFindUniqueArgs";
import { CreatePurchaseRequestArgs } from "./CreatePurchaseRequestArgs";
import { UpdatePurchaseRequestArgs } from "./UpdatePurchaseRequestArgs";
import { DeletePurchaseRequestArgs } from "./DeletePurchaseRequestArgs";
import { ApprovalFindManyArgs } from "../../approval/base/ApprovalFindManyArgs";
import { Approval } from "../../approval/base/Approval";
import { Employee } from "../../employee/base/Employee";
import { ItProduct } from "../../itProduct/base/ItProduct";
import { PurchaseRequestService } from "../purchaseRequest.service";
@graphql.Resolver(() => PurchaseRequest)
export class PurchaseRequestResolverBase {
  constructor(protected readonly service: PurchaseRequestService) {}

  async _purchaseRequestsMeta(
    @graphql.Args() args: PurchaseRequestCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [PurchaseRequest])
  async purchaseRequests(
    @graphql.Args() args: PurchaseRequestFindManyArgs
  ): Promise<PurchaseRequest[]> {
    return this.service.purchaseRequests(args);
  }

  @graphql.Query(() => PurchaseRequest, { nullable: true })
  async purchaseRequest(
    @graphql.Args() args: PurchaseRequestFindUniqueArgs
  ): Promise<PurchaseRequest | null> {
    const result = await this.service.purchaseRequest(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => PurchaseRequest)
  async createPurchaseRequest(
    @graphql.Args() args: CreatePurchaseRequestArgs
  ): Promise<PurchaseRequest> {
    return await this.service.createPurchaseRequest({
      ...args,
      data: {
        ...args.data,

        employee: args.data.employee
          ? {
              connect: args.data.employee,
            }
          : undefined,

        itProduct: args.data.itProduct
          ? {
              connect: args.data.itProduct,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => PurchaseRequest)
  async updatePurchaseRequest(
    @graphql.Args() args: UpdatePurchaseRequestArgs
  ): Promise<PurchaseRequest | null> {
    try {
      return await this.service.updatePurchaseRequest({
        ...args,
        data: {
          ...args.data,

          employee: args.data.employee
            ? {
                connect: args.data.employee,
              }
            : undefined,

          itProduct: args.data.itProduct
            ? {
                connect: args.data.itProduct,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => PurchaseRequest)
  async deletePurchaseRequest(
    @graphql.Args() args: DeletePurchaseRequestArgs
  ): Promise<PurchaseRequest | null> {
    try {
      return await this.service.deletePurchaseRequest(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Approval], { name: "approvals" })
  async findApprovals(
    @graphql.Parent() parent: PurchaseRequest,
    @graphql.Args() args: ApprovalFindManyArgs
  ): Promise<Approval[]> {
    const results = await this.service.findApprovals(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Employee, {
    nullable: true,
    name: "employee",
  })
  async getEmployee(
    @graphql.Parent() parent: PurchaseRequest
  ): Promise<Employee | null> {
    const result = await this.service.getEmployee(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => ItProduct, {
    nullable: true,
    name: "itProduct",
  })
  async getItProduct(
    @graphql.Parent() parent: PurchaseRequest
  ): Promise<ItProduct | null> {
    const result = await this.service.getItProduct(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}