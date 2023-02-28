import React from "react";
import { withRouter } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import {
  SCBoxCard,
  SCBoxSubtitle,
  SCLastRolesQuestion,
  SCLastRolesDelete,
  SCLastRolesPadding,
} from "./../styles";
import { Input, Select } from "app/commons";
const LastRolesCpn = () => {
  const onChange = () => {};
  const onBlur = () => {};
  const department = ["Select an option", "Department", "Department"];
  return (
    <>
      <SCBoxCard>
        <SCBoxSubtitle>Role Details</SCBoxSubtitle>
        <SCLastRolesQuestion>
          What are some of the questions you’d like to ask your candidates?
        </SCLastRolesQuestion>
        <Col lg={12} md={12} sm={12} xs={12}>
          <Row>
            <Col lg={8} md={8} sm={12} xs={12}>
              <SCLastRolesPadding>
                <Input
                  label="Question 1"
                  id="Role Title"
                  name="Role Title"
                  placeholder="Role Title"
                  type="text"
                  value="What are the projects you have done in your previous job?"
                  onChange={onChange}
                  onBlur={onBlur}
                />
              </SCLastRolesPadding>
              <Input
                label="Question 2"
                id="Role Title"
                name="Role Title"
                placeholder="Role Title"
                type="text"
                value="Tell me about yourself"
                onChange={onChange}
                onBlur={onBlur}
              />
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
              <div className="d-flex justify-content-between align-items-center">
                <div className="flex-grow-1">
                  <Select label="Question Type" title="Short Answer" />
                </div>
                <SCLastRolesDelete>
                  <img src="../assets/images/delete.svg" />
                </SCLastRolesDelete>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="flex-grow-1">
                  <Select label="Question Type" title="Short Answer" />
                </div>
                <SCLastRolesDelete>
                  <img src="../assets/images/delete.svg" />
                </SCLastRolesDelete>
              </div>
            </Col>
          </Row>
        </Col>
      </SCBoxCard>
    </>
  );
};

export default withRouter(LastRolesCpn);
