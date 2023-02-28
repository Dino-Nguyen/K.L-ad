import React from "react";
import { withRouter } from "react-router-dom";
import { Col, Row, Dropdown, DropdownButton, Form } from "react-bootstrap";
import {
  SCBoxCard,
  SCBoxSubtitle,
  SCFormCheckBox,
  SCTextArea,
  SCDropdownLable,
  SCInput,
  SCDropDown,
  LabelText,
} from "./../styles";
import { Input, Select } from "app/commons";
const AddRolesCpn = () => {
  const onChange = () => {};
  const onBlur = () => {};
  const department = ["Select an option", "Department", "Department"];
  return (
    <>
      <SCBoxCard>
        <SCBoxSubtitle>Role Details</SCBoxSubtitle>
        <Col lg={12} md={12} sm={12} xs={12}>
          <Row>
            <Col lg={4} md={4} sm={12} xs={12}>
              <Input
                label="Role Title*"
                id="Role Title"
                name="Role Title"
                placeholder="Role Title"
                type="text"
                value=""
                onChange={onChange}
                onBlur={onBlur}
              />
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
              <Select label="Department" title="Select an option" />
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
              <Select label="Based in*" title="Select an option" />
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={4} sm={12} xs={12}>
              <Input
                label="City"
                id="city"
                name="city"
                placeholder="Please enter the city"
                type="text"
                value=""
                onChange={onChange}
                onBlur={onBlur}
              />
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
              <Select label="Role Type*" title="Select an option" />
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
              <Select label="Employee Working Hours" title="Select an option" />
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={4} sm={12} xs={12}>
              <Select label="Experience*" title="Select an option" />
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
              <SCDropdownLable>Salary Range*</SCDropdownLable>
              <div
                style={{ marginTop: 10 }}
                className="d-flex align-items-center justify-content-between"
              >
                <SCDropDown title="SGD $" className="shadow-none">
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
                    className="form-control shadow-none"
                    placeholder="Min"
                    type="text"
                    onChange={onChange}
                    onBlur={onBlur}
                    value=""
                  />
                </div>
                <LabelText>-</LabelText>
                <div>
                  <SCInput
                    id="min"
                    name="min"
                    className="form-control shadow-none"
                    placeholder="Max"
                    type="text"
                    onChange={onChange}
                    onBlur={onBlur}
                    value=""
                  />
                </div>
                <SCDropDown title="Monthly" className="shadow-none">
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3" active>
                    Active Item
                  </Dropdown.Item>
                </SCDropDown>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={4} sm={12} xs={12}>
              <Form.Group>
                <SCDropdownLable>Role Status</SCDropdownLable>
                <div style={{ marginBottom: 10 }} className="d-flex">
                  <SCFormCheckBox
                    type="radio"
                    label="Open"
                    name="radio"
                    id="formHorizontalRadios1"
                    value="radio1"
                    checked="true"
                  />
                  <SCFormCheckBox
                    type="radio"
                    label="Closed"
                    name="radio"
                    id="formHorizontalRadios2"
                    value="radio2"
                  />
                </div>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col style={{ marginBottom: 20 }} lg={12} md={12} sm={12} xs={12}>
              <SCDropdownLable style={{ marginBottom: 10 }}>
                Job Description
              </SCDropdownLable>
              <SCTextArea
                rows={4}
                placeholder="Enter the job description"
              ></SCTextArea>
            </Col>
          </Row>
          <Row>
            <Col style={{ marginBottom: 20 }} lg={4} md={4} sm={12} xs={12}>
              <Input
                label="Recruitment Email"
                id="Role Title"
                name="Role Title"
                placeholder="Fill in the email"
                type="text"
                value=""
                onChange={onChange}
                onBlur={onBlur}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} sm={12} xs={12}>
              <Form.Group>
                <SCDropdownLable>Role Status</SCDropdownLable>

                <SCFormCheckBox
                  type="radio"
                  label="Remote - Open to domestic and international employees."
                  name="radio"
                  id="formHorizontalRadios1"
                  value="radio1"
                  checked="true"
                />
                <SCFormCheckBox
                  type="radio"
                  label="Remote - Open to domestic employees only."
                  name="radio"
                  id="formHorizontalRadios2"
                  value="radio2"
                />
                <SCFormCheckBox
                  type="radio"
                  label="Hybrid - Employees work a mixture of on-site and off-site."
                  name="radio"
                  id="formHorizontalRadios2"
                  value="radio2"
                />
                <SCFormCheckBox
                  type="radio"
                  label="On-site - Employees must work on-site."
                  name="radio"
                  id="formHorizontalRadios2"
                  value="radio2"
                />
              </Form.Group>
            </Col>
          </Row>
        </Col>
      </SCBoxCard>
    </>
  );
};

export default withRouter(AddRolesCpn);
