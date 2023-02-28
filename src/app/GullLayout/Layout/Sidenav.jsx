import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { navigations } from "../../navigations";
import { merge } from "lodash";
import { classList, isMobile } from "@utils";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setLayoutSettings } from "app/redux/actions/LayoutActions";
import { withRouter } from "react-router-dom";
import { StyleSidenav } from "./styleLayout";

// icon
import { AiOutlineSolution } from "react-icons/ai";
import {
  BsBuilding,
  BsChatDots,
  BsColumnsGap,
  BsBell,
  BsPersonCheck,
} from "react-icons/bs";
import { GiTable } from "react-icons/gi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { BiBriefcase } from "react-icons/bi";

class Sidenav extends Component {
  windowListener = null;
  state = {
    selectedItem: {},
    navOpen: true,
    secondaryNavOpen: false,
  };

  iconClaimChange = () => {
    document.getElementById("icon_claims").src =
      "/assets/images/icon-claims-change.svg";
  };

  iconClaimNormal = () => {
    document.getElementById("icon_claims").src =
      "/assets/images/icon-claims.svg";
  };

  iconInterviewChange = () => {
    document.getElementById("icon_interview").src =
      "/assets/images/icon-interview-change.svg";
  };

  iconInterviewNormal = () => {
    document.getElementById("icon_interview").src =
      "/assets/images/icon-interview.svg";
  };

  onMainItemMouseEnter = (item) => {
    this.setSelected(item);
  };

  findSelecteditem = () => {
    navigations.forEach((item) => {
      if (item.sub) {
        item.sub.forEach((child) => {
          if (child.sub) {
            child.sub.forEach((grandChild) => {
              if (grandChild.path === this.props.history.location.pathname) {
                this.setSelected(item);
              }
            });
          } else {
            if (child.path === this.props.history.location.pathname) {
              this.setSelected(item);
            }
          }
        });
      } else {
        if (item.path === this.props.history.location.pathname) {
          this.setSelected(item);
        }
      }
    });
  };

  onMainItemMouseLeave = () => {};

  setSelected = (selectedItem) => {
    this.setState({ selectedItem });
    // console.log(selectedItem);
  };

  removeSelected = () => {
    this.setState({ selectedItem: null });
    // console.log('removed');
  };

  closeSecNav = () => {
    // console.log("closing sec sidenav");
    let { setLayoutSettings, settings } = this.props;
    let other = {};

    if (isMobile()) {
      other.open = false;
    }

    setLayoutSettings(
      merge({}, settings, {
        layoutSettings: {
          leftSidebar: {
            ...other,
            secondaryNavOpen: false,
          },
        },
      })
    );
  };

  openSecNav = () => {
    let { setLayoutSettings, settings } = this.props;
    setLayoutSettings(
      merge({}, settings, {
        layoutSettings: {
          leftSidebar: {
            open: true,
            secondaryNavOpen: true,
          },
        },
      })
    );
  };

  componentDidMount() {
    setTimeout(() => {
      this.findSelecteditem();
    });
    if (window)
      if (window.innerWidth < 1200) {
        this.closeSecNav();
      } else {
        this.openSecNav();
      }

    this.windowListener = window.addEventListener("resize", () => {
      if (window.innerWidth < 1200) {
        this.closeSecNav();
      } else {
        this.openSecNav();
      }
    });
  }

  componentWillUnmount() {
    if (this.windowListener) {
      window.removeEventListener("resize", this.windowListener);
    }
  }

  render() {
    let { settings } = this.props;
    let { selectedItem } = this.state;

    return (
      <StyleSidenav>
        <div className="side-content-wrap">
          <div
            // className={classList({
            //   "sidebar-left o-hidden rtl-ps-none": true,
            //   open: settings.layoutSettings.leftSidebar.open,
            // })}
            className="d-flex flex-column align-items-center"
          >
            <div className="d-flex flex-column align-items-center">
              <img src="/assets/images/logo-black.png" alt="logo" />
              <p>ADMIN (HR)</p>
            </div>
            <div className="w-100 mb-5 p-2">
              <div className="nav_btn active">
                <a href="/dashboard">
                  <BsColumnsGap className="me-2" /> Dashboard
                </a>
              </div>
              <div className="nav_btn">
                <a href="/notification">
                  <BsBell className="me-2" /> Notification
                </a>
              </div>
              <div className="nav_btn">
                <a href="/organization">
                  <BsBuilding className="me-2" /> Organization
                </a>
              </div>
              <div
                onMouseOver={this.iconInterviewChange}
                onMouseOut={this.iconInterviewNormal}
                className="nav_btn"
              >
                <a href="/interview">
                  <img
                    id="icon_interview"
                    className="me-2"
                    src="/assets/images/icon-interview.svg"
                    alt="icon-interview"
                  />
                  Interview
                </a>
              </div>
              <div className="nav_btn">
                <a href="/employees">
                  <i className="i-Business-Man me-2" /> Employees
                </a>
              </div>
              <div className="nav_btn">
                <a href="/payroll">
                  <i className="i-Financial me-2" /> Payroll
                </a>
              </div>
              <div className="nav_btn">
                <a href="/asset">
                  <BiBriefcase className="me-2" /> Asset
                </a>
              </div>
              <div className="nav_btn">
                <a href="/attendance">
                  <FaRegCalendarCheck className="me-2" /> Attendance
                </a>
              </div>
              <div className="nav_btn">
                <a href="/shift-planning">
                  <BsPersonCheck className="me-2" /> Shift Planning
                </a>
              </div>
              <div
                onMouseOver={this.iconClaimChange}
                onMouseOut={this.iconClaimNormal}
                className="nav_btn"
              >
                <a href="/claims">
                  <img
                    className="me-2"
                    id="icon_claims"
                    src="/assets/images/icon-claims.svg"
                    alt="icon-claims"
                  />
                  Claims
                </a>
              </div>
              <div className="nav_btn">
                <a href="/leaves">
                  <i className="i-Plane me-2" /> Leaves
                </a>
              </div>
              <div className="nav_btn">
                <a href="/appraisal">
                  <AiOutlineSolution className="me-2" /> Appraisal
                </a>
              </div>
              <div className="nav_btn">
                <a href="/desk-booking">
                  <GiTable className="me-2" /> Desk Booking
                </a>
              </div>
              <div className="nav_btn">
                <a href="/room-booking">
                  <i className="i-Monitor-5 me-2" /> Room Booking
                </a>
              </div>
              <div className="nav_btn">
                <a className="justify-content-between" href="/chat">
                  <div className="d-flex align-items-center">
                    <BsChatDots className="me-2" /> Chat
                  </div>
                  <div className="dot chat_active"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </StyleSidenav>
    );
  }
}

Sidenav.propTypes = {
  setLayoutSettings: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  setLayoutSettings: PropTypes.func.isRequired,
  settings: state.layout.settings,
});

export default withRouter(
  connect(mapStateToProps, {
    setLayoutSettings,
  })(Sidenav)
);
