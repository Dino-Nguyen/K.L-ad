import React, { useState, Fragment } from "react";
import { Modal, Button } from "react-bootstrap";
import {
  SCModal,
  SCModalBody,
  SCModalContent,
  SCModalFooter,
  SCButtonPrimary,
  SCButtonOutlie,
} from "./styles";

const ModalDelete = ({ name, ...props }) => {
  return (
    <Fragment>
      <SCModal show={true} onHide={props.handleClose} {...props}>
        <SCModalBody>
          <div>
            <img src="../assets/images/icon/danger.svg" />
          </div>
          <SCModalContent>{props.content}</SCModalContent>
        </SCModalBody>
        <SCModalFooter>
          <SCButtonOutlie onClick={props.handleClose}>Cancel</SCButtonOutlie>
          <SCButtonPrimary onClick={props.handleClose}>Delete</SCButtonPrimary>
        </SCModalFooter>
      </SCModal>
    </Fragment>
  );
};

export default ModalDelete;
