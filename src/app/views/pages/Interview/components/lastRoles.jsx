import React from "react";
import { withRouter, Link } from "react-router-dom";
import LastRolesCpn from "./lastRolesCpn";
import {
  SCTitleInterview,
  SCButtonOutlie,
  SCButtonPrimary,

} from "./../styles";
import { Input, Select } from "app/commons";
const LastRoles = () => {
  const onChange = () => {};
  const onBlur = () => {};
  const department = ["Select an option", "Department", "Department"];
  return (
    <>
      <SCTitleInterview>Create a Role (2/2)</SCTitleInterview>
      <LastRolesCpn />
      <div style={{ margin: "40px 0" }} className="d-flex justify-content-end">
        <SCButtonOutlie>Back</SCButtonOutlie>
        <Link to="/maketing-excutive">
          <SCButtonPrimary>Submit</SCButtonPrimary>
        </Link>
      </div>
    </>
  );
};

export default withRouter(LastRoles);
