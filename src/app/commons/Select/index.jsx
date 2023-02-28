import React from "react";
import { Formik } from "formik";
import {DropdownButton, Dropdown} from "react-bootstrap";
import { SCDropDown } from "./styles";

const Select = (props) => {
  return (
    <>
      <label>{props.label}</label>
      <SCDropDown
        title={props.title}
        className="shadow-none "
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>
          Active Item
        </Dropdown.Item>
      </SCDropDown>
    </>
  );
};

export default Select;
