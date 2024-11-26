/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ApprovalUpdateManyWithoutPurchaseRequestsInput } from "./ApprovalUpdateManyWithoutPurchaseRequestsInput";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { EmployeeWhereUniqueInput } from "../../employee/base/EmployeeWhereUniqueInput";
import { ItProductWhereUniqueInput } from "../../itProduct/base/ItProductWhereUniqueInput";

@InputType()
class PurchaseRequestUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ApprovalUpdateManyWithoutPurchaseRequestsInput,
  })
  @ValidateNested()
  @Type(() => ApprovalUpdateManyWithoutPurchaseRequestsInput)
  @IsOptional()
  @Field(() => ApprovalUpdateManyWithoutPurchaseRequestsInput, {
    nullable: true,
  })
  approvals?: ApprovalUpdateManyWithoutPurchaseRequestsInput;

  @ApiProperty({
    required: false,
    type: () => EmployeeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EmployeeWhereUniqueInput)
  @IsOptional()
  @Field(() => EmployeeWhereUniqueInput, {
    nullable: true,
  })
  employee?: EmployeeWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ItProductWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ItProductWhereUniqueInput)
  @IsOptional()
  @Field(() => ItProductWhereUniqueInput, {
    nullable: true,
  })
  itProduct?: ItProductWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  requestDate?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  status?: string | null;
}

export { PurchaseRequestUpdateInput as PurchaseRequestUpdateInput };
