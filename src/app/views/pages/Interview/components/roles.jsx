import React, { useState, Fragment } from "react";
import Pagination from "react-bootstrap/Pagination";
import { Link } from "react-router-dom";
import { Dropdown, Row, Col, Button, DropdownButton } from "react-bootstrap";
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
} from "./../styles";

const newUserList = [
  {
    title: "Marketing Executive",
    total: "3",
    based: "Singapore",
    role: "Permanenet",
    experience: "Entry-Level",
    workplace: "Remote",
    created: "30/09/2022",
    status: "Open",
  },
  {
    title: "UX Designer",
    total: "5",
    based: "Singapore",
    role: "Contract",
    experience: "Senior",
    workplace: "Hybrid",
    created: "30/09/2022",
    status: "Open",
  },
  {
    title: "Marketing Executive",
    total: "3",
    based: "Singapore",
    role: "Permanenet",
    experience: "Entry-Level",
    workplace: "Remote",
    created: "30/09/2022",
    status: "Open",
  },
  {
    title: "UX Designer",
    total: "3",
    based: "Singapore",
    role: "Permanenet",
    experience: "Entry-Level",
    workplace: "Remote",
    created: "30/09/2022",
    status: "Open",
  },
  {
    title: "Marketing Executive",
    total: "3",
    based: "Singapore",
    role: "Permanenet",
    experience: "Entry-Level",
    workplace: "Remote",
    created: "30/09/2022",
    status: "Open",
  },
  {
    title: "UX Designer",
    total: "3",
    based: "Singapore",
    role: "Permanenet",
    experience: "Entry-Level",
    workplace: "Remote",
    created: "30/09/2022",
    status: "Open",
  },
  {
    title: "Marketing Executive",
    total: "3",
    based: "Singapore",
    role: "Permanenet",
    experience: "Entry-Level",
    workplace: "Remote",
    created: "30/09/2022",
    status: "Open",
  },
  {
    title: "UX Designer",
    total: "3",
    based: "Singapore",
    role: "Permanenet",
    experience: "Entry-Level",
    workplace: "Remote",
    created: "30/09/2022",
    status: "Closed",
  }
];

let active = 1;
let items = [];
for (let number = 1; number <= 3; number++) {
  items.push(
    <SCReactPaginate key={number} active={number === active}>
      {number}
    </SCReactPaginate>
  );
}

const Roles = () => {
  const [show, setShow] = useState(false);
  const [showDetaill, setShowDetail] = useState(false);

  const handleClose = () => {
    setShow(false);
    setShowDetail(false)
  };
  return (
    <>
      <SCTableBox>
        <SCBoxfilter>
          <SCDropBoxTitle>Roles</SCDropBoxTitle>
          <SCDropBox>
            <SCDropdownFlex>
              <SCDropdownLable>Role Type</SCDropdownLable>
              <SCDropdownButton variant="outline-primary" title="All">
                <SCDropItem>Action</SCDropItem>
                <SCDropItem>Another Action</SCDropItem>
                <SCDropItem>Something else here</SCDropItem>
              </SCDropdownButton>
            </SCDropdownFlex>
            <SCDropdownFlex>
              <SCDropdownLable>Experience</SCDropdownLable>
              <SCDropdownButton variant="outline-primary" title="All">
                <SCDropItem>Action</SCDropItem>
                <SCDropItem>Another Action</SCDropItem>
                <SCDropItem>Something else here</SCDropItem>
              </SCDropdownButton>
            </SCDropdownFlex>

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
            <Link to="/roles/add">
              <SCButtonFilter>
                <i className="pe-1 i-Add"></i>Create a Role
              </SCButtonFilter>
            </Link>
          </SCDropBox>
        </SCBoxfilter>
        <div className="table-responsive">
          <table id="user_table" className="table">
            <thead>
              <SCTrReact>
                <th scope="col">Role Title</th>
                <th scope="col">Total Candidates</th>
                <th scope="col">Based In</th>
                <th scope="col">Role Type</th>
                <th scope="col">Experience</th>
                <th scope="col">Workplace Type</th>
                <th scope="col">Created Date</th>
                <th scope="col">Role Status</th>
                <th scope="col">Action</th>
              </SCTrReact>
            </thead>
            <tbody>
              {newUserList.map((user, index) => (
                <SCTrReact key={index}>
                  <td>{user.title}</td>
                  <td>{user.total}</td>
                  <td>{user.based}</td>
                  <td>{user.role}</td>
                  <td>{user.experience}</td>
                  <td>{user.workplace}</td>
                  <td>{user.created}</td>
                  <td style={user.status === "Closed" ? { color: "red" } : {}}>
                    {user.status}
                  </td>
                  <td style={{ padding: "14px 40px" }}>
                    <span
                      style={{ paddingRight: 15 }}
                      className="cursor-pointer"
                    >
                      <img onClick={() => setShowDetail(true)} src="../assets/images/icon/carbon_view-filled.svg" />
                    </span>
                    <span className="cursor-pointer">
                      <img
                        type="button"
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
      <ModalDetailInterview
        size="xl"
        centered={true}
        show={showDetaill}
        handleClose={handleClose}
      />
    </>
  );
};

export default Roles;
