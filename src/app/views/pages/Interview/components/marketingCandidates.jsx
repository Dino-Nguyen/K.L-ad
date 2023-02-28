import React, { useState, Fragment } from "react";
import Pagination from "react-bootstrap/Pagination";
import { Link } from "react-router-dom";
import { ModalDelete, ModalDetailInterview } from "app/commons";
import { Dropdown, Row, Col, Button, DropdownButton } from "react-bootstrap";
import {
  SCTrReact,
  SCTableBox,
  SCDropdownButtonStatus,
  SCDropItem,
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
    name: "John Doe",
    role: "UX Designer",
    experience: "1 year 3 month",
    nationality: "Singaporean",
    salary: "SGD$ 3200, Monthly",
    email: "johndoe@gmail.com",
    phone: "9383 3838",
  },
  {
    name: "Wenqi Ng",
    role: "UX Designer",
    experience: "2 year 0 month",
    nationality: "Singaporean",
    salary: "SGD$ 3200, Monthly",
    email: "wenqi.ng@gmail.com",
    phone: "9111 2456",
  },
  {
    name: "John Doe",
    role: "UX Designer",
    experience: "1 year 3 month",
    nationality: "Singaporean",
    salary: "SGD$ 3200, Monthly",
    email: "johndoe@gmail.com",
    phone: "9383 3838",
  },
  {
    name: "Wenqi Ng",
    role: "UX Designer",
    experience: "2 year 0 month",
    nationality: "Singaporean",
    salary: "SGD$ 3200, Monthly",
    email: "wenqi.ng@gmail.com",
    phone: "9111 2456",
  },
  {
    name: "John Doe",
    role: "UX Designer",
    experience: "1 year 3 month",
    nationality: "Singaporean",
    salary: "SGD$ 3200, Monthly",
    email: "johndoe@gmail.com",
    phone: "9383 3838",
  },
  {
    name: "Wenqi Ng",
    role: "UX Designer",
    experience: "2 year 0 month",
    nationality: "Singaporean",
    salary: "SGD$ 3200, Monthly",
    email: "wenqi.ng@gmail.com",
    phone: "9111 2456",
  },

  {
    name: "John Doe",
    role: "UX Designer",
    experience: "1 year 3 month",
    nationality: "Singaporean",
    salary: "SGD$ 3200, Monthly",
    email: "johndoe@gmail.com",
    phone: "9383 3838",
  },
  {
    name: "Wenqi Ng",
    role: "UX Designer",
    experience: "2 year 0 month",
    nationality: "Singaporean",
    salary: "SGD$ 3200, Monthly",
    email: "wenqi.ng@gmail.com",
    phone: "9111 2456",
  },
  {
    name: "John Doe",
    role: "UX Designer",
    experience: "1 year 3 month",
    nationality: "Singaporean",
    salary: "SGD$ 3200, Monthly",
    email: "johndoe@gmail.com",
    phone: "9383 3838",
  },
  {
    name: "Wenqi Ng",
    role: "UX Designer",
    experience: "2 year 0 month",
    nationality: "Singaporean",
    salary: "SGD$ 3200, Monthly",
    email: "wenqi.ng@gmail.com",
    phone: "9111 2456",
  },
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

const MarketingCandidates = () => {
  const [showDetaill, setShowDetail] = useState(false);
  const handleClose = () => {
    setShowDetail(false);
  };
  return (
    <>
      <SCTableBox>
        <SCBoxfilter>
          <SCDropBoxTitle>Candidates</SCDropBoxTitle>
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
            <SCButtonFilter onClick={() => setShowDetail(true)}>
              <i className="pe-1 i-Add"></i>Add New Candidates
            </SCButtonFilter>
          </SCDropBox>
        </SCBoxfilter>
        <div className="table-responsive">
          <table id="user_table" className="table">
            <thead>
              <SCTrReact>
                <th scope="col">Candidate Name</th>
                <th scope="col">Applied Role</th>
                <th scope="col">No. of Experience</th>
                <th scope="col">Nationality</th>
                <th scope="col">Expected Salary</th>
                <th scope="col">Email</th>
                <th scope="col">Phone no.</th>
                <th scope="col">Interview Status</th>
                <th scope="col">Action</th>
              </SCTrReact>
            </thead>
            <tbody>
              {newUserList.map((user, index) => (
                <SCTrReact key={index}>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>{user.experience}</td>
                  <td>{user.nationality}</td>
                  <td>{user.salary}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td style={{ padding: "10px 20px" }}>
                    <SCDropdownFlex>
                      <SCDropdownButtonStatus
                        variant="outline-primary"
                        title="Background Check"
                      >
                        <SCDropItem>Action</SCDropItem>
                        <SCDropItem>Another Action</SCDropItem>
                        <SCDropItem>Something else here</SCDropItem>
                      </SCDropdownButtonStatus>
                    </SCDropdownFlex>
                  </td>
                  <td style={{ padding: "16px 40px" }}>
                    <Dropdown>
                      <Dropdown.Toggle
                        className="toggle-hidden shadow-none bg-white p-0 border-0"
                        as={Button}
                      >
                        <span className="_dot bg-dark _inline-dot me-1"></span>
                        <span className="_dot bg-dark _inline-dot me-1"></span>
                        <span className="_dot  bg-dark _inline-dot"></span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item
                          className="d-flex justify-content-end text-"
                          eventKey="1"
                          active
                          onClick={() => setShowDetail(true)}
                        >
                          Edit
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="d-flex justify-content-end text-"
                          eventKey="2"
                        >
                          Add to Talent Pool
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="d-flex justify-content-end text-danger"
                          eventKey="3"
                        >
                          Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </SCTrReact>
              ))}
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-between">
          <div style={{ paddingLeft: 40 }} className="show-totals">
            Showing 1-10 of 30 items
          </div>
          <Pagination>{items}</Pagination>
        </div>
      </SCTableBox>
      <ModalDetailInterview
        size="xl"
        centered={true}
        show={showDetaill}
        handleClose={handleClose}
      />
    </>
  );
};

export default MarketingCandidates;
