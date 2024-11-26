import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { PURCHASEREQUEST_TITLE_FIELD } from "../purchaseRequest/PurchaseRequestTitle";

export const ApprovalShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="approvalDate" source="approvalDate" />
        <TextField label="approver" source="approver" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="purchaseRequest"
          source="purchaserequest.id"
          reference="PurchaseRequest"
        >
          <TextField source={PURCHASEREQUEST_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
