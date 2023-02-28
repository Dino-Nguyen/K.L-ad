import React from "react";
import { Formik } from "formik";
import { Form, Button } from "react-bootstrap";
import { SCInput } from "./styles";

const Input = (props) => {
  return (
    <>
      {props.label ? <label>{props.label}</label> : ""}
      <SCInput
        id={props.id}
        name={props.name}
        className="form-control shadow-none"
        placeholder={props.placeholder}
        type={props.type}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
      />
    </>
  );
};

export default Input;
