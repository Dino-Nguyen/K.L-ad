import React, { useState, Fragment } from "react";
import Pagination from "react-bootstrap/Pagination";
import { Link } from "react-router-dom";
import { Dropdown, Row, Col, Button, DropdownButton, Form } from "react-bootstrap";
import { ModalDelete, ModalDetailInterview } from "app/commons";
import {
  SCTrReact,
  SCTdReact,
  SCTableBox,
  SCDropdownButton,
  SCDropItem,
  SCDropdownLable,
  SCDropdownFlex,
  SCBoxfilter,
  SCDropBox,
  SCDInputSearch,
  SCInputSearchIcon,
  SCButtonFilter,
  SCDropBoxTitle,
  SCReactPaginate,
  SCBoxCard,
  SCBoxSubtitle,
  SCFormCheckBox,
  SCTextArea,
  SCInput,
  SCDropDown,
  LabelText,
} from "../styles";
import { Input, Select } from "app/commons";


let active = 1;
let items = [];
for (let number = 1; number <= 3; number++) {
  items.push(
    <SCReactPaginate key={number} active={number === active}>
      {number}
    </SCReactPaginate>
  );
}
let input = document.getElementById("logo");
let imageName = document.getElementById("imageName")

// const input.addE("change", ()=>{
//     let inputImage = document.querySelector("input[type=file]").files[0];

//     imageName.innerText = inputImage.name;
// })

const OrganizationBasicInfo = () => {
  const onChange = () => {};
  const onBlur = () => {};
  const department = ["Select an option", "Department", "Department"];
  return (
    <>
      <SCBoxCard>
        <SCBoxSubtitle>Organization Details</SCBoxSubtitle>
        <Col lg={24} md={24} sm={24} xs={24}>
          <Row>
            <Col lg={6} md={8} sm={24} xs={24}>
              <Input
                label="Organization Name*"
                id="Organization Name"
                name="Organization Name"
                placeholder="Asure Pro Pte Ltd"
                type="text"
                value=""
                onChange={onChange}
                onBlur={onBlur}
              />
            </Col>
            <Col lg={6} md={8} sm={24} xs={24}>
              <Input
                label="Organization ID*"
                id="Organization ID"
                name="Organization ID"
                placeholder="asurepro"
                type="text"
                value=""
                onChange={onChange}
                onBlur={onBlur}
              />
            </Col>
            
          </Row>
          <Row style={{marginTop: "20px"}}>
            <Col lg={6} md={6} sm={12} xs={12}>
            <Select
                title="Singapore"
                label="Country based in*  (Settings will be localized according to the country selected)"
              />
            </Col>
            <Col lg={6} md={6} sm={12} xs={12} className="logo">
              
              <label for="logo">
              
              <Input
                label="Logo*"
                id="logo"
                name="logo"
                placeholder="Please enter the country"
                type="file"
                value=""
                onChange={onChange}
                onBlur={onBlur}
              />
              <div className="upload-img-box">
              <img src="/assets/images/buttonsUpload.png"/>
              <img src="/assets/images/iconLogo.png"/>
              <span>
              <Input type="text" placeholder="Asure Pro.jpg"
               value=""
               onChange={onChange}
               onBlur={onBlur}
              />
              </span>
              <img id="delete-img" src="/assets/images/delete.png"/>
              </div>
              
              <span id="imageName"></span>
              </label>
              </Col>
        </Row>
        <Row > 
            
            <Col lg={6} md={6} sm={12} xs={12}>
              <Select label="Business Registration Type" title="UEN - Local Company Registration Number Issue by ACRA" />
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Input label="Business Registration Number" value="201609345K" />
            </Col>
          </Row>
          <Row >
            <Col lg={6} md={4} sm={12} xs={12}>
              <Select label="Industry" title="Tech" />
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
             <Input label="Date of Incorporation" type="date"/>
            </Col>
          </Row>
         
        </Col>
      </SCBoxCard>

      <SCBoxCard style={{marginTop: "30px"}}>
        <SCBoxSubtitle>Business Address</SCBoxSubtitle>
        <Col lg={24} md={24} sm={24} xs={24}>
          <Row>
            <Col lg={6} md={8} sm={24} xs={24}>
              <Input
                label="Postal Code"
                id="Organization Name"
                name="Organization Name"
                placeholder=""
                type="text"
                value="123456"
                onChange={onChange}
                onBlur={onBlur}
              />
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Select
                title="Singapore"
                label="Country"
              />
            </Col>
            
          </Row>
          <Row >
          <Col lg={8} md={6} sm={12} xs={12}>
             <Input label="Date of Incorporation" type="date"/>
            </Col>
              
              
             
        </Row>
        <Row style={{marginTop: "20px"}}> 
            
           
          </Row>
          <Row >
           
            <Col lg={6} md={6} sm={12} xs={12}>
             <Input label="Date of Incorporation" type="date"/>
            </Col>
          </Row>
         
        </Col>
      </SCBoxCard>
    </>
  );
};
export default OrganizationBasicInfo;
