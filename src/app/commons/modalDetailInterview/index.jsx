import React, { useState, Fragment } from "react";
import {
  Modal,
  Button,
  Row,
  Col,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { Input, Select } from "./../index";
import {
  SCModal,
  SCModalBody,
  SCModalTitle,
  SCModalFooter,
  SCButtonPrimary,
  SCButtonOutlie,
  SCModalUploadBox,
  SCModalUploadText,
  SCManualUploadLable,
  SCMarginBottom,
  SCInput,
  LabelText,
  SCDropDown,
  SCUploadIcon,
} from "./styles";

const ModalDetailInterview = ({ name, ...props }) => {
  const onChange = () => {};
  const onBlur = () => {};
  return (
    <Fragment>
      <SCModal show={true} onHide={props.handleClose} {...props}>
        <SCModalBody>
          <SCModalTitle>Add New Candidate</SCModalTitle>
          <Col lg={12} md={12} sm={12} xs={12}>
            <Row>
              <Col lg={6} md={6} sm={12} xs={12}>
                <SCMarginBottom>
                  <Input
                    label="Applied Role"
                    id="applied"
                    name="applied"
                    type="text"
                    onChange={() => onChange()}
                    onBlur={() => onBlur()}
                    placeholder=""
                    value="Marketing Executive"
                  />
                </SCMarginBottom>
                <SCMarginBottom>
                  <Input
                    label="Candidate’s Name*"
                    id="candidate"
                    name="candidate"
                    type="text"
                    onChange={() => onChange()}
                    onBlur={() => onBlur()}
                    value=""
                    placeholder="Candidate’s Name"
                  />
                </SCMarginBottom>
                <Select title="Singaporean" label="Nationality" />
                <SCMarginBottom>
                  <Input
                    label="Email"
                    id="email"
                    name="email"
                    type="text"
                    onChange={() => onChange()}
                    onBlur={() => onBlur()}
                    value="Candidate’s Name"
                    placeholder="Email"
                  />
                </SCMarginBottom>
                <div>
                  <SCManualUploadLable>
                    Attachments (Optional, allowed file types: jpg, png, pdf)
                  </SCManualUploadLable>
                  <SCModalUploadBox>
                    <img
                      type="file"
                      src="../assets/images/icon/file_upload.svg"
                    />
                    <SCModalUploadText>
                      Click or Drag file(s) here to upload.
                    </SCModalUploadText>
                  </SCModalUploadBox>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <SCMarginBottom>
                  <Input
                    label="Created Date"
                    id="create"
                    name="create"
                    type="text"
                    onChange={() => onChange()}
                    onBlur={() => onBlur()}
                    placeholder=""
                    value="29/09/2022"
                  />
                </SCMarginBottom>
                <SCMarginBottom>
                  <LabelText>No. of Experience </LabelText>
                  <div
                    style={{ marginTop: 10 }}
                    className="d-flex align-items-center justify-content-between"
                  >
                    <div>
                      <SCInput
                        id="min"
                        name="min"
                        className="form-control shadow-none"
                        placeholder="Min"
                        type="text"
                        onChange={onChange}
                        onBlur={onBlur}
                        value="0"
                      />
                    </div>
                    <LabelText>Years</LabelText>
                    <div>
                      <SCInput
                        id="min"
                        name="min"
                        className="form-control shadow-none"
                        placeholder="Max"
                        type="text"
                        onChange={onChange}
                        onBlur={onBlur}
                        value="0"
                      />
                    </div>
                    <LabelText>Months</LabelText>
                  </div>
                </SCMarginBottom>
                <SCMarginBottom>
                  <LabelText>Expected Salary</LabelText>
                  <div
                    style={{ marginTop: 10 }}
                    className="d-flex align-items-center justify-content-between"
                  >
                    <SCDropDown title="Monthly" className="shadow-none">
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3" active>
                        Active Item
                      </Dropdown.Item>
                    </SCDropDown>
                    <div>
                      <SCInput
                        id="min"
                        name="min"
                        className="form-control shadow-none salary"
                        placeholder=""
                        type="text"
                        onChange={onChange}
                        onBlur={onBlur}
                        value="300"
                      />
                    </div>
                  </div>
                </SCMarginBottom>
                <SCMarginBottom>
                  <Input
                    label="Phone Number"
                    id="create"
                    name="create"
                    type="text"
                    onChange={() => onChange()}
                    onBlur={() => onBlur()}
                    placeholder="Phone Number"
                    value=""
                  />
                </SCMarginBottom>
                <div
                  className="d-flex align-items-left justify-content-end flex-column"
                  style={{ paddingTop: 26 }}
                >
                  <img
                    width={106}
                    type="file"
                    src="../assets/images/icon/file.png"
                  />
                  <div className="d-flex align-items-left justify-content-start">
                    <SCUploadIcon>
                      <img src="../assets/images/icon/carbon_view-filled.svg" />
                    </SCUploadIcon>
                    <SCUploadIcon>
                      <img src="../assets/images/icon/file_download.svg" />
                    </SCUploadIcon>
                    <SCUploadIcon>
                      <img src="../assets/images/delete.svg" />
                    </SCUploadIcon>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </SCModalBody>
        <SCModalFooter>
          <SCButtonOutlie onClick={props.handleClose}>Cancel</SCButtonOutlie>
          <SCButtonPrimary onClick={props.handleClose}>Save</SCButtonPrimary>
        </SCModalFooter>
      </SCModal>
    </Fragment>
  );
};

export default ModalDetailInterview;
