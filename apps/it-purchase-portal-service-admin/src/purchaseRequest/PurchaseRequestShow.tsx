import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PURCHASEREQUEST_TITLE_FIELD } from "./PurchaseRequestTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { ITPRODUCT_TITLE_FIELD } from "../itProduct/ItProductTitle";

export const PurchaseRequestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="employee"
          source="employee.id"
          reference="Employee"
        >
          <TextField source={EMPLOYEE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="itProduct"
          source="itproduct.id"
          reference="ItProduct"
        >
          <TextField source={ITPRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="requestDate" source="requestDate" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Approval"
          target="purchaseRequestId"
          label="Approvals"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
