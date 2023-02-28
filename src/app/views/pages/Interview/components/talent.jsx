import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import { ModalDelete, ModalDetailInterview } from "app/commons";
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

const Talent = () => {
  const [show, setShow] = useState(false);
  const [showDetaill, setShowDetail] = useState(false);

  const handleClose = () => {
    setShow(false);
    setShowDetail(false);
  };
  return (
    <>
      <SCTableBox>
        <SCBoxfilter>
          <SCDropBoxTitle>Talent Pool</SCDropBoxTitle>
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
                        title="Phone Screen"
                      >
                        <SCDropItem>New</SCDropItem>
                        <SCDropItem>In Review</SCDropItem>
                        <SCDropItem>Assessment</SCDropItem>
                      </SCDropdownButtonStatus>
                    </SCDropdownFlex>
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
            Showing 1-10 of 30 items
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

export default Talent;
