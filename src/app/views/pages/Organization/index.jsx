import React from "react";
import { Row, Col, Tab, Tabs, Nav } from "react-bootstrap";
import SimpleCard from "@gull/components/cards/SimpleCard";
import { withRouter } from "react-router-dom";
import { SCNavLink, SCNavItem, SCSimpleCard, SCTabContainer } from "./styles";
import OrganizationBasicInfo from "./components/OrganizationBasicInfo";



const Organization = () => {
  return (
    <>
      <Col lg={12} md={12} sm={12} xs={12}>
        <SCSimpleCard className='m0' title="Organization">
          <SCTabContainer id="left-tabs-example" defaultActiveKey="first">
            <Nav variant="" className="d-flex">
              <SCNavItem>
                <SCNavLink eventKey="first">Organization <br/> Basic Info</SCNavLink>
              </SCNavItem>
              <SCNavItem>
                <SCNavLink eventKey="second">Organization <br/> Structure</SCNavLink>
              </SCNavItem>
              <SCNavItem>
                <SCNavLink eventKey="third">Branches/Outlets</SCNavLink>
              </SCNavItem>
              <SCNavItem className=" text-left">
                <SCNavLink eventKey="four">Announcements</SCNavLink>
              </SCNavItem>
              <SCNavItem className=" text-left">
                <SCNavLink eventKey="fifth">Working Hours</SCNavLink>
              </SCNavItem>
              <SCNavItem className=" text-left">
                <SCNavLink eventKey="sixth">Holiday Work List</SCNavLink>
              </SCNavItem>
              <SCNavItem className=" text-left">
                <SCNavLink eventKey="seventh">Manage <br/> Asst. Admin</SCNavLink>
              </SCNavItem>
            </Nav>
            <Tab.Content className="p-0" style={{ marginTop: 20 }}>
              <Tab.Pane eventKey="first">

                <OrganizationBasicInfo/>

              </Tab.Pane>
              <Tab.Pane eventKey="second">

                

              </Tab.Pane>
              <Tab.Pane eventKey="third">

             

              </Tab.Pane>
              <Tab.Pane eventKey="four">

               
              </Tab.Pane>
            </Tab.Content>
          </SCTabContainer>
        </SCSimpleCard>
      </Col>
    </>
  );
};

export default withRouter(Organization);
