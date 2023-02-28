import styled from "styled-components";

import { Modal, Button } from "react-bootstrap";

export const SCModal = styled(Modal)`
  @media (min-width: 576px) {
    .modal-dialog {
      max-width: 420px;
    }
  }
`;

export const SCModalBody = styled(Modal.Body)`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SCModalFooter = styled(Modal.Footer)`
  padding: 0px 40px 40px 40px;
  display: flex;
  justify-content: space-between;
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
  border: 1px solid #e20c00 !important;
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
  color: #e20c00;
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  margin: 0;

`;

export const SCButtonPrimary = styled.button`
  background: #e20c00;
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
  margin: 0;
`;
