import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PurchaseRequestTitle } from "../purchaseRequest/PurchaseRequestTitle";

export const ApprovalCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="approvalDate" source="approvalDate" />
        <TextInput label="approver" source="approver" />
        <ReferenceInput
          source="purchaseRequest.id"
          reference="PurchaseRequest"
          label="purchaseRequest"
        >
          <SelectInput optionText={PurchaseRequestTitle} />
        </ReferenceInput>
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};
