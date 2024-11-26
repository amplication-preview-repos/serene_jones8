import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PurchaseRequestTitle } from "../purchaseRequest/PurchaseRequestTitle";

export const ItProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
