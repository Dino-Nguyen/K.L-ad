import React from "react";
import { Row, Col, Tab, Tabs, Nav } from "react-bootstrap";
import SimpleCard from "@gull/components/cards/SimpleCard";
import { withRouter } from "react-router-dom";
import { SCNavLink, SCNavItem, SCSimpleCard, SCTabContainer } from "./styles";
import Roles from "./components/roles";
import Candidates from "./components/candidates";
import Talent from "./components/talent";
import Hiring from "./components/hiring";

const Interview = () => {
  return (
    <>
      <Col lg={12} md={12} sm={12} xs={12}>
        <SCSimpleCard className='m0' title="Interview">
          <SCTabContainer id="left-tabs-example" defaultActiveKey="first">
            <Nav variant="" className="d-flex">
              <SCNavItem>
                <SCNavLink eventKey="first">Roles</SCNavLink>
              </SCNavItem>
              <SCNavItem>
                <SCNavLink eventKey="second">Candidates <br></br> Overview</SCNavLink>
              </SCNavItem>
              <SCNavItem>
                <SCNavLink eventKey="third">Hiring <br></br> Process</SCNavLink>
              </SCNavItem>
              <SCNavItem className=" text-left">
                <SCNavLink eventKey="four">Talent <br></br> Pool</SCNavLink>
              </SCNavItem>
            </Nav>
            <Tab.Content className="p-0" style={{ marginTop: 20 }}>
              <Tab.Pane eventKey="first">
                <Roles />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Candidates />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Hiring />
              </Tab.Pane>
              <Tab.Pane eventKey="four">
                <Talent />
              </Tab.Pane>
            </Tab.Content>
          </SCTabContainer>
        </SCSimpleCard>
      </Col>
    </>
  );
};

export default withRouter(Interview);
