import React, { useState, Fragment } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { Input, Select } from "./../index";
import {
  SCModal,
  SCModalBody,
  SCModalTitle,
  SCModalFooter,
  SCButtonPrimary,
  SCButtonOutlie,
  SCManualUploadLable,
  SCMarginBottom,
  SCLastRolesDelete,
  SCSwitch
} from "./styles";

const ModalProcessInterview = ({ name, ...props }) => {
  const onChange = () => {};
  const onBlur = () => {};
  return (
    <Fragment>
      <SCModal show={true} onHide={props.handleClose} {...props}>
        <SCModalBody>
          <SCModalTitle>Add Process</SCModalTitle>
          <Col lg={12} md={12} sm={12} xs={12}>
            <Row>
              <Col lg={6} md={6} sm={12} xs={12}>
                <SCMarginBottom>
                  <Input
                    label="Process’s Name*"
                    id="name"
                    name="name"
                    type="text"
                    onChange={() => onChange()}
                    onBlur={() => onBlur()}
                    placeholder="Fill in the name"
                    value=""
                  />
                </SCMarginBottom>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <SCManualUploadLable>
                  Default Process (turning on will overide the existing
                  default)
                </SCManualUploadLable>
                <SCSwitch
                  type="switch"
                  id="custom-switch"
                />
              </Col>
            </Row>
            <SCMarginBottom>
              <Input
                label="Hiring Status"
                id="name"
                name="name"
                type="text"
                onChange={() => onChange()}
                onBlur={() => onBlur()}
                placeholder=""
                value="New"
              />
            </SCMarginBottom>
            <SCMarginBottom>
              <div className="d-flex justify-content-between align-items-center">
                <div className="flex-grow-1">
                  <Input
                    className='m-0'
                    label=""
                    id="name"
                    name="name"
                    type="text"
                    onChange={() => onChange()}
                    onBlur={() => onBlur()}
                    placeholder="Please fill in the stage name"
                    value=""
                  />
                </div>
                <SCLastRolesDelete>
                  <img src="../assets/images/delete.svg" />
                </SCLastRolesDelete>
              </div>
            </SCMarginBottom>
            <SCMarginBottom>
              <Input
                label=""
                id="name"
                name="name"
                type="text"
                onChange={() => onChange()}
                onBlur={() => onBlur()}
                placeholder=""
                value="Hired"
              />
            </SCMarginBottom>
          </Col>
        </SCModalBody>
        <SCModalFooter>
          <SCButtonOutlie onClick={props.handleClose}>Cancel</SCButtonOutlie>
          <SCButtonPrimary onClick={props.handleClose}>Add</SCButtonPrimary>
        </SCModalFooter>
      </SCModal>
    </Fragment>
  );
};

export default ModalProcessInterview;
