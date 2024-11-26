import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PurchaseRequestTitle } from "../purchaseRequest/PurchaseRequestTitle";

export const ItProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="availability" source="availability" />
        <TextInput label="description" multiline source="description" />
        <NumberInput label="price" source="price" />
        <TextInput label="productName" source="productName" />
        <ReferenceArrayInput
          source="purchaseRequests"
          reference="PurchaseRequest"
        >
          <SelectArrayInput
            optionText={PurchaseRequestTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
