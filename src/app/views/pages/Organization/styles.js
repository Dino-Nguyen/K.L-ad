import {
  Row,
  Col,
  Tab,
  Tabs,
  Nav,
  DropdownButton,
  Dropdown,
  Form,
} from "react-bootstrap";
import SimpleCard from "@gull/components/cards/SimpleCard";
import styled from "styled-components";
import Pagination from "react-bootstrap/Pagination";

export const SCSimpleCard = styled(SimpleCard)`
  background: #f2f2f2;
  box-shadow: unset;
  padding: 0;
  .card-body {
    padding: 0 !important;
    .simple-card-title {
      margin-bottom: 20px;
    }
  }
  .text-capitalize {
    font-family: "Quicksand";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    margin-bottom: 0 !important;
  }
`;

export const SCTabContainer = styled(Tab.Container)`
  padding: 0;
`;

export const SCNavItem = styled(Nav.Item)`
  & :nth-child(3) {
    background-color: red;
    padding: 20px 96px 20px 20px;
  }
  & :nth-child(4) {
    background-color: red;
    padding: 20px 120px 20px 20px;
  }
`;

export const SCNavLink = styled(Nav.Link)`
  color: #4d4d4d;
  padding: 20px;
  width: 140px;
  cursor: pointer;
  height: 60px;
  border-radius: 12px;
  margin-right: 20px;
  background-color: #fff;
  display: flex;
  align-items: center;
  &.active {
    background-color: rgba(0, 205, 194, 0.1);
    color: #00cdc2;
  }
  @media(max-width: 600px) {
    height:60px;
    width: 76px;
    padding: 10px;
    margin-right: 4px;
    border-radius: 5px;
  }
`;

/* Roles Page Begin */

export const SCTableBox = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding-bottom: 20px;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.4));
`;

export const SCDropdownButton = styled(DropdownButton)`
  & .dropdown-toggle {
    border-radius: 20px;
    border-color: rgba(0, 205, 194, 1);
    padding: 10px 20px;
    height: 40px;
    color: #000;
  }
  & .dropdown-toggle:after {
    margin-left: 10px;
  }

  & .btn-outline-primary:hover {
    background: unset;
    color: #000;
    box-shadow: unset;
  }
  & .btn-outline-primary:active {
    background: unset;
    color: #000;
    border-color: rgba(0, 205, 194, 1);
  }
  & .btn.show {
    background: unset;
    color: #000;
    box-shadow: unset;
  }
`;
export const SCDropItem = styled(Dropdown.Item)``;

export const SCBoxfilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 40px;
  @media(max-width: 991px) {
    padding: 10px;
  }
`;

export const SCDropBoxTitle = styled.span`
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;

export const SCDropBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const SCDropdownFlex = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  @media(max-width: 600px) {
    margin-bottom: 10px;
  }
`;

export const SCDropdownLable = styled.label`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-right: 10px;
`;

export const SCDInputSearch = styled.input`
  padding: 10px 10px 10px 40px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;

export const SCInputSearchIcon = styled.span`
  position: absolute;
  top: 12px;
  left: 10px;
`;

export const SCButtonFilter = styled.button`
  background: rgba(0, 205, 194, 1);
  border-radius: 20px;
  padding: 5px 20px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #fff;
  outline: none;
  border: none;
  margin-left: 20px;
  @media(max-width: 600px) {
    margin-left: 0px;
    margin-top: 10px;
    width: 100%;
  }
`;

export const SCButtonPrimary = styled.button`
  background: rgba(0, 205, 194, 1);
  width: 160px;
  border-radius: 20px;
  padding: 5px 20px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #fff;
  outline: none;
  border: none;
  margin-left: 20px;
  display: flex;
  justify-content: center;
`;

export const SCButtonOutlie = styled.button`
  background: #fff;
  width: 160px;
  border: 1px solid rgba(0, 205, 194, 1);
  border-radius: 20px;
  padding: 5px 20px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: rgba(0, 205, 194, 1);
  outline: none;
  border: none;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  margin-right: 40px;
`;

export const SCButtonOutlieDefault = styled.span`
  position: absolute;
  top: 13px;
  left: 170px;
  background: #fff;
  max-width: 64px;
  border: 1px solid rgba(0, 205, 194, 1) !important;
  border-radius: 4px;
  padding: 5px 10px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  color: rgba(0, 205, 194, 1);
`;

export const SCTrReact = styled.tr`
  text-align: left;
  & td {
    padding: 20px 20px;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    font-family: "Open Sans";
  }
  & td:last-child {
    padding: 20px 40px;
  }
  & td:first-child {
    padding: 20px 40px;
  }
  & td.candidate_dropdown {
    /* padding: 10px 40px 10px 40px !important; */
    display: flex;
    align-items: center;
  }
  th {
    padding: 20px 20px;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #000;
    background: #f2f2f2;
    font-family: "Open Sans";
  }
  & th:last-child {
    padding: 20px 40px;
  }
  & th:first-child {
    padding: 20px 40px;
  }
`;

export const SCTdReact = styled.td`
  padding: 0.5rem 40px !important;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  font-family: "Open Sans";
`;

export const SCReactPaginate = styled(Pagination.Item)`
  & span.page-link {
    color: #fff;
    background-color: rgba(0, 205, 194, 1);
    border-color: rgba(0, 205, 194, 1);
    cursor: pointer;
  }
  &.page-item:last-child {
    padding-right: 40px;
  }

  &.page-item {
    & .page-link {
      outline: none;
      height: 32px;
      width: 32px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 100%;
      padding: 0;
    }
  }
  &.page-item {
    margin: 0 4px;
  }
`;

/* Roles Page End */

/* Roles Add Page Begin */
export const SCTitleInterview = styled.span`
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  margin-bottom: 40px;
  display: block;
`;

export const SCBoxCard = styled.div`
  padding: 30px 40px;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  #logo{
   display : none;
  }
  .upload-img-box {
    display : flex;
    width :600px;
   
  }
  .upload-img-box input {
    width :300px;
  }
  .upload-img-box img {
    height : 40px ;
    margin-right: 7px;
    margin-top: 10px;
  }
  #delete-img{
    width: 15px;
    height :18px;
   margin-top :20px;
   margin-left : 15px;
  }
`;

export const SCBoxSubtitle = styled.span`
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 20px;
  display: block;
`;

export const SCFormCheckBox = styled(Form.Check)`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-right: 20px;
  padding-bottom: 10px;
  .form-check-input:checked {
    background-color: rgba(0, 205, 194, 1);
    border-color: rgba(0, 205, 194, 1);
  }
`;

export const SCTextArea = styled.textarea`
  width: 100%;
  height: 120px;
  padding: 15px 20px;
  background: #e5e5e5;
  border-radius: 5px;
  border: none;
  outline: none;
`;

export const SCInput = styled.input`
  background: #e5e5e5;
  border-radius: 5px;
  max-width: 96px;
  padding: 11px 20px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  border: none;
  outline: none;
  &:focus {
    background: #e5e5e5;
    outline: none;
    border: none;
    box-shadow: unset !important;
  }
`;

export const SCDropDown = styled(DropdownButton)`
  .dropdown-toggle {
    width: 130px;
    /* padding-right: 12px; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #e5e5e5;
    border-radius: 5px;
    padding: 11px 20px;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    border: none;
    color: #666666;
    outline: none;
    &.dropdown-toggle:after {
      color: #000;
      margin-left: 10px;
      font-size: 20px;
    }
  }
  .btn-primary.btn:focus:active {
    box-shadow: none !important;
  }
  .dropdown-menu {
    width: 100%;
  }
`;

export const LabelText = styled.span`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;

// Candidates Overview Page Begin

export const SCDropdownButtonStatus = styled(DropdownButton)`
  & .dropdown-toggle {
    border-radius: 20px;
    border-color: #e5e5e5;
    background: #e5e5e5;
    color: #4d4d4d;
    padding: 6px 8px 6px 16px;
    width: 100%;
  }
  & .dropdown-toggle:after {
    margin-left: 10px;
  }

  & .btn-outline-primary:hover {
    background: unset;
    color: #4d4d4d;
    box-shadow: unset;
  }
  & .btn-outline-primary:active {
    background: unset;
    color: #4d4d4d;
    border-color: #e5e5e5;
  }
  & .btn.show {
    background: unset;
    color: #4d4d4d;
    box-shadow: unset;
  }
`;

// Last Roles Page Begin
export const SCLastRolesQuestion = styled.span`
  font-family: "Quicksand";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  display: block;
  margin-bottom: 20px;
`;

export const SCLastRolesDelete = styled.span`
  display: block;
  padding-left: 30px;
  margin-top: 4px;
`;
export const SCLastRolesPadding = styled.div`
  margin-bottom: 20px;
`;
// Last Roles Page End
