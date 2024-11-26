import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PURCHASEREQUEST_TITLE_FIELD } from "../purchaseRequest/PurchaseRequestTitle";

export const ApprovalList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Approvals"}
      perPage={50}
      pagination={<Pagination />}
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
