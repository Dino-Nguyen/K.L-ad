import styled from "styled-components";
import { Modal, Button, DropdownButton, Form } from "react-bootstrap";

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

export const SCMarginBottom = styled.div`
  margin-bottom: 20px;
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

export const SCLastRolesDelete = styled.span`
  display: block;
  padding-left: 30px;
  margin-top: 4px;
`;

export const SCSwitch = styled(Form.Check)`
  &.form-switch 
    .form-check-input {
      width: 52px;
      height: 32px;
    }
  
`;
