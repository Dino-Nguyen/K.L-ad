import React, { Component } from "react";
import { Form, Col, Button, Image } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";

import { StyleMyProfile } from "./styleDashboard";

// icon

class MyProfile extends Component {
  state = {
    avatar: "",
    name: "Autoinsure HR",
    email: "hr@autoinsure.com",
    phone: "+65 91512467",
    currentPassword: "********",
    newPassword: "",
    retypeNewPassword: "",
  };

  handleCancel = () => {
    console.log("cancel");
  };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
  };

  componentDidMount() {}

  render() {
    let {
      avatar,
      name,
      email,
      phone,
      currentPassword,
      newPassword,
      retypeNewPassword,
    } = this.state;

    return (
      <StyleMyProfile>
        <div className="card card-icon-bg card-icon-bg-primary o-hidden h-100">
          <h3>My Profile</h3>
          <form onSubmit={this.handleFormSubmit} action="">
            <div className="row">
              <div className="col-lg-2 col-md-3">
                <div className="myProfile_img">
                  <Image
                    roundedCircle={true}
                    fluid={true}
                    src={avatar !== "" ? avatar : "/assets/images/admin-avatar.png"}
                    alt="profile-img"
                  />
                  <label className="upload_file">
                    <i className="i-Pen-2" />
                    <input type="file" multiple hidden />
                  </label>
                </div>
              </div>
              <div className="col-lg-10 col-md-10">
                <div className="row">
                  <div className="input_group col-lg-6 col-md-6">
                    <label htmlFor="input" className="form_label">
                      Name*
                    </label>
                    <input
                      type="text"
                      className="form_control"
                      name="name"
                      value={name}
                      onChange={this.handleChange}
                      placeholder="Enter name"
                    />
                  </div>
                  <div className="input_group col-lg-6 col-md-6">
                    <label htmlFor="input" className="form_label">
                      Email*
                    </label>
                    <input
                      type="text"
                      className="form_control"
                      name="email"
                      value={email}
                      onChange={this.handleChange}
                      placeholder="Enter name"
                    />
                  </div>
                  <div className="input_group col-lg-6 col-md-6">
                    <label htmlFor="input" className="form_label">
                      Phone Number*
                    </label>
                    <input
                      type="text"
                      className="form_control"
                      name="phone"
                      value={phone}
                      onChange={this.handleChange}
                      placeholder="Enter phone number"
                    />
                  </div>
                  <div className="input_group col-lg-6 col-md-6">
                    <label htmlFor="input" className="form_label">
                      Current Password
                    </label>
                    <input
                      type="text"
                      className="form_control"
                      name="currentPassword"
                      value={currentPassword}
                      onChange={this.handleChange}
                      placeholder="Enter current password"
                    />
                  </div>
                  <div className="input_group col-lg-6 col-md-6">
                    <label htmlFor="input" className="form_label">
                      New Password*
                    </label>
                    <input
                      type="text"
                      className="form_control"
                      name="newPassword"
                      value={newPassword}
                      onChange={this.handleChange}
                      placeholder="Leave blank if not changing password"
                    />
                  </div>
                  <div className="input_group col-lg-6 col-md-6">
                    <label htmlFor="input" className="form_label">
                      Retype New Password*
                    </label>
                    <input
                      type="text"
                      className="form_control"
                      name="retypeNewPassword"
                      value={retypeNewPassword}
                      onChange={this.handleChange}
                      placeholder="Leave blank if not changing password"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="btn_container">
              <button type="submit" className="btn_submit">
                Save
              </button>
              <button
                type="button"
                className="btn_cancel"
                onClick={this.handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </StyleMyProfile>
    );
  }
}

export default MyProfile;
