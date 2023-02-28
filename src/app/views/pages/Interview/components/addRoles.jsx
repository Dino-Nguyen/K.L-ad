import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Col, Row, Dropdown, DropdownButton, Form } from "react-bootstrap";
import AddRolesCpn from "./addRolesCpn";
import {
  SCTitleInterview,
  SCBoxCard,
  SCBoxSubtitle,
  SCFormCheckBox,
  SCTextArea,
  SCButtonFilter,
  SCButtonOutlie,
  SCButtonPrimary,
  SCDropdownLable,
  SCInput,
  SCDropDown,
  LabelText,
} from "./../styles";
import { Input, Select } from "app/commons";
const AddRoles = () => {
  const onChange = () => {};
  const onBlur = () => {};
  const department = ["Select an option", "Department", "Department"];
  return (
    <>
      <SCTitleInterview>Create a Role (1/2)</SCTitleInterview>
      <AddRolesCpn />
      <div style={{ margin: "40px 0" }} className="d-flex justify-content-end">
        <SCButtonOutlie>Cancel</SCButtonOutlie>
        <Link to="/last-roles/add">
          <SCButtonPrimary>Next</SCButtonPrimary>
        </Link>
      </div>
    </>
  );
};

export default withRouter(AddRoles);
