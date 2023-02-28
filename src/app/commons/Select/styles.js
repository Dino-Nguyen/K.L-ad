import styled from "styled-components";
import { DropdownButton, Dropdown } from "react-bootstrap";

export const SCDropDown = styled(DropdownButton)`
  .dropdown-toggle {
    /* padding-right: 12px; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #e5e5e5;
    border-radius: 5px;
    padding: 11px 20px;
    margin-top: 10px;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    border: none;
    color: #666666;
    outline: none;
    margin-bottom: 20px;
    &.dropdown-toggle:after {
      color: #000;
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
