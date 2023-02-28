import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import { Link } from "react-router-dom";
import { ModalDelete, ModalProcessInterview } from "app/commons";
import {
  SCTrReact,
  SCTableBox,
  SCButtonOutlieDefault,
  SCBoxfilter,
  SCDropBox,
  SCDInputSearch,
  SCInputSearchIcon,
  SCButtonFilter,
  SCDropBoxTitle,
  SCReactPaginate,
} from "./../styles";

const newUserList = [
  {
    name: "Marketing Executive",
    default: true,
  },
  {
    name: "Hiring Process 1",
    default: false,
  },
];

let active = 1;
let items = [];
for (let number = 1; number <= 1; number++) {
  items.push(
    <SCReactPaginate key={number} active={number === active}>
      {number}
    </SCReactPaginate>
  );
}

const Hiring = () => {
  const [show, setShow] = useState(false);
  const [showProccess, setShowProccess] = useState(false);
  const handleClose = () => {
    setShowProccess(false)
    setShow(false);
  };
  return (
    <>
      <SCTableBox>
        <SCBoxfilter>
          <SCDropBoxTitle>Hiring Process</SCDropBoxTitle>
          <SCDropBox>
            <div className="input-right-icon">
              <SCInputSearchIcon>
                <i className="i-Magnifi-Glass1"></i>
              </SCInputSearchIcon>
              <SCDInputSearch
                type="text"
                className="form-control"
                placeholder="Enter keywords ..."
              />
            </div>
            <SCButtonFilter onClick={() => setShowProccess(true)}>
              <i className="pe-1 i-Add"></i>Add Process
            </SCButtonFilter>
          </SCDropBox>
        </SCBoxfilter>
        <div className="table-responsive">
          <table id="user_table" className="table">
            <thead>
              <SCTrReact>
                <th scope="col" width="100%">
                  Process Name
                </th>
                <th scope="col">Action</th>
              </SCTrReact>
            </thead>
            <tbody>
              {newUserList.map((user, index) => (
                <SCTrReact key={index}>
                  <td className="position-relative">
                    {user.name}{" "}
                    <SCButtonOutlieDefault>Default</SCButtonOutlieDefault>
                  </td>
                  <td style={{ padding: 20 }}>
                    <span
                      style={{ paddingRight: 15 }}
                      className="cursor-pointer"
                    >
                      <img onClick={() => setShowProccess(true)} src="../assets/images/icon/Edit.svg" />
                    </span>
                    <span className="cursor-pointer">
                      <img
                        onClick={() => setShow(true)}
                        src="../assets/images/delete.svg"
                      />
                    </span>
                  </td>
                </SCTrReact>
              ))}
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-between">
          <div style={{ paddingLeft: 40 }} className="show-totals">
            Showing 1-3 of 3 items
          </div>
          <Pagination>{items}</Pagination>
        </div>
      </SCTableBox>
      <ModalDelete
        content=" Deleting Roles - Marketing Executive. Are you sure you want to
         proceed?"
        centered={true}
        show={show}
        handleClose={handleClose}
      />
      <ModalProcessInterview
        size="xl"
        centered={true}
        handleClose={handleClose}
        show={showProccess}
      />
    </>
  );
};

export default Hiring;
