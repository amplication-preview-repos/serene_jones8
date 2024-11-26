import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { ITPRODUCT_TITLE_FIELD } from "../itProduct/ItProductTitle";

export const PurchaseRequestList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"PurchaseRequests"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
