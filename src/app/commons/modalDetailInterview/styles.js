import styled from "styled-components";
import { Modal, Button, DropdownButton } from "react-bootstrap";

export const SCModal = styled(Modal)`
  @media (min-width: 992px) {
    .modal-dialog.modal-xl {
      max-width: 920px;
    }
  }
`;

export const SCModalTitle = styled.span`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #000;
  padding-bottom: 20px;
  display: block;
`;

export const SCModalBody = styled(Modal.Body)`
  padding: 40px;
`;

export const SCModalUploadBox = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e5e5e5;
  border-radius: 5px;
  height: 169px;
`;

export const SCMarginBottom = styled.div`
  margin-bottom: 20px;
`;

export const SCModalUploadText = styled.span`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #666666;
  display: block;
  margin-top: 10px;
`;

export const SCManualUploadLable = styled.label`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #000000;
  display: block;
  margin-bottom: 10px;
`;

export const SCModalFooter = styled(Modal.Footer)`
  padding: 0px 40px 40px 40px;
  display: flex;
  justify-content: end;
  align-items: center;
  border: none !important;
`;

export const SCModalContent = styled.span`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  display: block;
  margin-top: 40px;
  text-align: center; ;
`;

export const SCButtonOutlie = styled.button`
  background: #fff;
  width: 160px;
  border: 1px solid rgba(0, 205, 194, 1) !important;
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
  display: flex;
  justify-content: center;
  margin: 0;
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
  display: flex;
  justify-content: center;
  margin-left: 40px;
`;

export const SCInput = styled.input`
  background: #e5e5e5;
  border-radius: 5px;
  max-width: 132px;
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
  &.salary {
    max-width: 228px;
  }
`;

export const LabelText = styled.span`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;

export const SCDropDown = styled(DropdownButton)`
  .dropdown-toggle {
    width: 132px;
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

export const SCUploadIcon = styled.span`
  display: block;
  margin-top: 10px;
  margin-right: 20px;
`;

