import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { ApprovalTitle } from "../approval/ApprovalTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { ItProductTitle } from "../itProduct/ItProductTitle";

export const PurchaseRequestCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="approvals" reference="Approval">
          <SelectArrayInput
            optionText={ApprovalTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="employee.id"
          reference="Employee"
          label="employee"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="itProduct.id"
          reference="ItProduct"
          label="itProduct"
        >
          <SelectInput optionText={ItProductTitle} />
        </ReferenceInput>
        <DateTimeInput label="requestDate" source="requestDate" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};
