import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PurchaseRequestTitle } from "../purchaseRequest/PurchaseRequestTitle";

export const ApprovalEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
