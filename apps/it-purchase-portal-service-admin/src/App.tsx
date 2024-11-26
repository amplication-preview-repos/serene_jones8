import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ItProductList } from "./itProduct/ItProductList";
import { ItProductCreate } from "./itProduct/ItProductCreate";
import { ItProductEdit } from "./itProduct/ItProductEdit";
import { ItProductShow } from "./itProduct/ItProductShow";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeCreate } from "./employee/EmployeeCreate";
import { EmployeeEdit } from "./employee/EmployeeEdit";
import { EmployeeShow } from "./employee/EmployeeShow";
import { PurchaseRequestList } from "./purchaseRequest/PurchaseRequestList";
import { PurchaseRequestCreate } from "./purchaseRequest/PurchaseRequestCreate";
import { PurchaseRequestEdit } from "./purchaseRequest/PurchaseRequestEdit";
import { PurchaseRequestShow } from "./purchaseRequest/PurchaseRequestShow";
import { ApprovalList } from "./approval/ApprovalList";
import { ApprovalCreate } from "./approval/ApprovalCreate";
import { ApprovalEdit } from "./approval/ApprovalEdit";
import { ApprovalShow } from "./approval/ApprovalShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"ITPurchasePortalService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ItProduct"
          list={ItProductList}
          edit={ItProductEdit}
          create={ItProductCreate}
          show={ItProductShow}
        />
        <Resource
          name="Employee"
          list={EmployeeList}
          edit={EmployeeEdit}
          create={EmployeeCreate}
          show={EmployeeShow}
        />
        <Resource
          name="PurchaseRequest"
          list={PurchaseRequestList}
          edit={PurchaseRequestEdit}
          create={PurchaseRequestCreate}
          show={PurchaseRequestShow}
        />
        <Resource
          name="Approval"
          list={ApprovalList}
          edit={ApprovalEdit}
          create={ApprovalCreate}
          show={ApprovalShow}
        />
      </Admin>
    </div>
  );
};

export default App;
