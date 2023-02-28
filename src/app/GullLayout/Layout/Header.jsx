import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  setLayoutSettings,
  setDefaultSettings,
} from "app/redux/actions/LayoutActions";
import { logoutUser } from "app/redux/actions/UserActions";
import { withRouter } from "react-router-dom";

import { merge } from "lodash";
import { StyleHeader } from "./styleLayout";

// icon
import { MdArrowDropDown } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { BsBell } from "react-icons/bs";

class Header extends Component {
  state = {
    avatar: "/assets/images/admin-avatar.png",
    notificationList: [
      {
        icon: "i-Plane",
        color: "#41B9DF",
        description: "Your leave has been approved.",
        time: "13 Dec, 2022 at 09:19",
      },
      {
        icon: "i-Money-Bag",
        color: "#FFB600",
        description: "Your claims has been approved.",
        time: "13 Dec, 2022 at 09:19",
      },
      {
        icon: "i-Plane",
        color: "#41B9DF",
        description: "Your leave has been approved.",
        time: "13 Dec, 2022 at 09:19",
      },
      {
        icon: "i-Plane",
        color: "#41B9DF",
        description: "Your leave has been approved.",
        time: "13 Dec, 2022 at 09:19",
      },
      {
        icon: "i-Plane",
        color: "#41B9DF",
        description: "Your leave has been approved.",
        time: "13 Dec, 2022 at 09:19",
      },
      {
        icon: "i-Plane",
        color: "#41B9DF",
        description: "Your leave has been approved.",
        time: "13 Dec, 2022 at 09:19",
      },
      {
        icon: "i-Plane",
        color: "#41B9DF",
        description: "Your leave has been approved.",
        time: "13 Dec, 2022 at 09:19",
      },
      {
        icon: "i-Plane",
        color: "#41B9DF",
        description: "Your leave has been approved.",
        time: "13 Dec, 2022 at 09:19",
      },
      {
        icon: "i-Plane",
        color: "#41B9DF",
        description: "Your leave has been approved.",
        time: "13 Dec, 2022 at 09:19",
      },
      {
        icon: "i-Plane",
        color: "#41B9DF",
        description: "Your leave has been approved.",
        time: "13 Dec, 2022 at 09:19",
      },
    ],
    organization: ["Asure Pro Pte Ltd", "Testec Pte Ltd", "Asure Bio Pte Ltd"],
    selectedOrganization: "Asure Pro Pte Ltd",
    pageName: [],
  };

  setSelected = (key) => {
    this.setState({ selectedOrganization: key });
    // console.log(key);
  };

  handleMenuClick = () => {
    let { setLayoutSettings, settings } = this.props;
    setLayoutSettings(
      merge({}, settings, {
        layoutSettings: {
          leftSidebar: {
            open: !settings.layoutSettings.leftSidebar.open,
            secondaryNavOpen: !settings.layoutSettings.leftSidebar.open,
          },
        },
      })
    );
  };

  componentDidMount() {
    let pageName = [];
    let pathName = this.props.location.pathname.toLowerCase().split("/");

    pathName.map((name) => {
      pageName.push(
        name
          .toLowerCase()
          .split("-")
          .map((data) => data.charAt(0).toUpperCase() + data.slice(1))
          .join(" ")
      );
    });

    this.setState({ pageName: pageName });
  }

  render() {
    let {
      avatar,
      notificationList = [],
      organization = [],
      selectedOrganization,
      pageName = [],
    } = this.state;

    return (
      <StyleHeader>
        <div className="main-header">
          <div
            className="menu-toggle d-lg-none d-block"
            onClick={this.handleMenuClick}
          ></div>

          <div className="page_name d-none d-lg-block">
            <p>
              {pageName.length === 2
                ? pageName[1]
                : pageName.length === 3
                ? `${pageName[1]} > ${pageName[2]}`
                : `${pageName[1]} > ${pageName[2]} > ${pageName[3]}`}
            </p>
          </div>

          <div className="switch_organization d-none d-lg-block align-items-center">
            <div>
              <p>You are currently managing for</p>
            </div>

            <Dropdown onSelect={this.setSelected}>
              <Dropdown.Toggle
                variant="link"
                id="dropdown-basic"
                className="toggle_btn toggle-hidden ps-0"
              >
                {selectedOrganization}
                <MdArrowDropDown size={24} className="ms-3" />
              </Dropdown.Toggle>

              <Dropdown.Menu className="organization_menu_expand">
                {organization.map((data, index) => (
                  <Dropdown.Item
                    key={index}
                    eventKey={data}
                    active={selectedOrganization === data}
                  >
                    {data}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div className="header-part-right">
            <Dropdown align="end" autoClose={false}>
              <Dropdown.Toggle variant="link" className="toggle-hidden me-4">
                <div
                  className="badge-top-container"
                  role="button"
                  id="dropdownNotification"
                  data-toggle="dropdown"
                >
                  <BsBell size={32} />
                  <div className="notification_active"></div>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu className="notification-dropdown rtl-ps-none">
                <Dropdown.Item>
                  <div>Notifications</div>
                </Dropdown.Item>
                {notificationList.map((note, index) => (
                  <div key={index} className="dropdown-item d-flex">
                    <div className="notification_icon">
                      <i
                        style={{ color: `${note.color}` }}
                        className={`${note.icon} mr-1`}
                      ></i>
                    </div>
                    <div>
                      <p>{note.description}</p>
                      <span>{note.time}</span>
                    </div>
                  </div>
                ))}
                <Dropdown.Item>
                  <div className="btn_container">
                    <div className="btn">View all notification</div>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <div className="user col align-self-end">
              <Dropdown align="end">
                <Dropdown.Toggle
                  variant="link"
                  className="toggle-hidden d-none d-lg-flex align-items-center"
                >
                  <img
                    src={
                      avatar !== "" ? avatar : "/assets/images/auto-avatar.svg"
                    }
                    alt="avatar"
                    id="userDropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  />
                  <div className="mx-3">
                    <div>
                      <p>Asure HR</p>
                    </div>
                    <div>
                      <span>executive@asure.pro</span>
                    </div>
                  </div>
                  <MdArrowDropDown size={24} />
                </Dropdown.Toggle>
                <Dropdown.Menu className="profile_menu_expand">
                  <Dropdown.Item href="/my-profile">
                    <FaRegUser size={18} className="me-2" />
                    My Profile
                  </Dropdown.Item>
                  <Dropdown.Item onClick={this.props.logoutUser}>
                    <BiLogOut size={22} className="me-2" /> Log Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </StyleHeader>
    );
  }
}

Header.propTypes = {
  setLayoutSettings: PropTypes.func.isRequired,
  setDefaultSettings: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  setDefaultSettings: PropTypes.func.isRequired,
  setLayoutSettings: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  user: state.user,
  settings: state.layout.settings,
});

export default withRouter(
  connect(mapStateToProps, {
    setLayoutSettings,
    setDefaultSettings,
    logoutUser,
  })(Header)
);
