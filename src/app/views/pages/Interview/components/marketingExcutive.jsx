import React from "react";
import { Row, Col, Tab, Tabs, Nav } from "react-bootstrap";
import SimpleCard from "@gull/components/cards/SimpleCard";
import { withRouter, Link } from "react-router-dom";
import {
  SCNavLink,
  SCNavItem,
  SCSimpleCard,
  SCTabContainer,
  SCButtonOutlie,
  SCButtonPrimary,
} from "./../styles";
import MarketingCandidates from "./marketingCandidates";
import AddRolesCpn from "./addRolesCpn";
import LastRolesCpn from "./lastRolesCpn";

const MarketingExcutive = () => {
  return (
    <>
      <Col lg={12} md={12} sm={12} xs={12}>
        <SCSimpleCard className="m0" title="Marketing Executive">
          <SCTabContainer id="left-tabs-example" defaultActiveKey="first">
            <Nav variant="" className="d-flex">
              <SCNavItem>
                <SCNavLink eventKey="first">Candidate</SCNavLink>
              </SCNavItem>
              <SCNavItem>
                <SCNavLink eventKey="second">Roles Detail</SCNavLink>
              </SCNavItem>
              <SCNavItem>
                <SCNavLink eventKey="third">Screening Questions</SCNavLink>
              </SCNavItem>
            </Nav>
            <Tab.Content className="p-0" style={{ marginTop: 20 }}>
              <Tab.Pane eventKey="first">
                <MarketingCandidates />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <AddRolesCpn />
                <div
                  style={{ margin: "40px 0" }}
                  className="d-flex justify-content-end"
                >
                  <SCButtonOutlie>Reset</SCButtonOutlie>
                  <SCButtonPrimary>Save</SCButtonPrimary>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <LastRolesCpn />
                <div
                  style={{ margin: "40px 0" }}
                  className="d-flex justify-content-end"
                >
                  <SCButtonOutlie>Reset</SCButtonOutlie>

                  <SCButtonPrimary>Save</SCButtonPrimary>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </SCTabContainer>
        </SCSimpleCard>
      </Col>
    </>
  );
};

export default withRouter(MarketingExcutive);
