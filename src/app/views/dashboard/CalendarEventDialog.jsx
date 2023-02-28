import React from "react";
import { Modal, Form, Col, Button, Dropdown } from "react-bootstrap";
import { Formik } from "formik";
import DatePicker from "react-datepicker";
import { CirclePicker } from "react-color";
import * as yup from "yup";
import { StyleCalendarEventDialog } from "./styleDashboard";

// icon
import { MdPersonOutline } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import { RiCake2Line } from "react-icons/ri";
import { MdArrowDropDown } from "react-icons/md";

const CalendarEventDialog = ({
  open,
  eventObject,
  handleSubmit,
  handleDeleteEvent,
  closeDialog,
}) => {
  const handleFormSubmit = (values) => {
    handleSubmit(values);
  };

  return (
    <Modal show={open} centered={true} onHide={closeDialog} size="xl">
      <StyleCalendarEventDialog>
        <Formik
          enableReinitialize={true}
          initialValues={eventObject}
          onSubmit={handleFormSubmit}
          validationSchema={eventSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setSubmitting,
            setFieldValue,
          }) => {
            return (
              <>
                <Modal.Header>
                  <h2 className="m-0">12 Jan 2023, Friday</h2>
                </Modal.Header>
                <Modal.Body>
                  <div className="row">
                    <div className="card_container col-lg-6">
                      <div className="card card-icon-bg card-icon-bg-primary o-hidden h-100">
                        <div className="card-body flex-column">
                          <h2>
                            <i className="card_icon i-Plane me-2" />
                            On Leave: <div className="number">1</div>
                          </h2>
                          <div className="drop_down row">
                            <div className="col-lg-3">
                              <Dropdown>
                                <Dropdown.Toggle
                                  variant="link"
                                  className="drop_down_toggle"
                                >
                                  Name
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="">
                                  <Dropdown.Item></Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                            <div className="col-lg-3">
                              <Dropdown>
                                <Dropdown.Toggle
                                  variant="link"
                                  className="drop_down_toggle"
                                >
                                  Type
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="">
                                  <Dropdown.Item></Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                            <div className="col-lg-3">
                              <Dropdown>
                                <Dropdown.Toggle
                                  variant="link"
                                  className="drop_down_toggle"
                                >
                                  Department
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="">
                                  <Dropdown.Item></Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                            <div className="col-lg-3">
                              <Dropdown>
                                <Dropdown.Toggle
                                  variant="link"
                                  className="drop_down_toggle"
                                >
                                  Date
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="name_menu_expand">
                                  <Dropdown.Item></Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </div>
                          <div className="value row">
                            <div className="col-lg-3">John Doe</div>
                            <div className="col-lg-3">Annual Leave</div>
                            <div className="col-lg-3">Design</div>
                            <div className="col-lg-3">
                              1 Jan 2023 - 3 Jan 2023
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card_container col-lg-6">
                      <div className="card card-icon-bg card-icon-bg-primary o-hidden h-100">
                        <div className="card-body flex-column">
                          <h2>
                            <RiCake2Line className="card_icon me-2" />
                            Birthdays: <div className="number">0</div>
                          </h2>
                          <div className="drop_down row">
                            <div className="col-lg-6">
                              <Dropdown>
                                <Dropdown.Toggle
                                  variant="link"
                                  className="drop_down_toggle"
                                >
                                  Name
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="">
                                  <Dropdown.Item></Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>

                            <div className="col-lg-6">
                              <Dropdown>
                                <Dropdown.Toggle
                                  variant="link"
                                  className="drop_down_toggle"
                                >
                                  Department
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="">
                                  <Dropdown.Item></Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </div>
                          <div className="value row">
                            <div className="col-lg-6">No birthdays today</div>
                            <div className="col-lg-6"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card_container col-lg-6">
                      <div className="card card-icon-bg card-icon-bg-primary o-hidden h-100">
                        <div className="card-body flex-column">
                          <h2>
                            <MdPersonOutline className="card_icon me-2" />
                            New Hires: <div className="number">1</div>
                          </h2>
                          <div className="drop_down row">
                            <div className="col-lg-4">
                              <Dropdown>
                                <Dropdown.Toggle
                                  variant="link"
                                  className="drop_down_toggle"
                                >
                                  Name
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="">
                                  <Dropdown.Item></Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>

                            <div className="col-lg-4">
                              <Dropdown>
                                <Dropdown.Toggle
                                  variant="link"
                                  className="drop_down_toggle"
                                >
                                  Status
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="">
                                  <Dropdown.Item></Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                            <div className="col-lg-4">
                              <Dropdown>
                                <Dropdown.Toggle
                                  variant="link"
                                  className="drop_down_toggle"
                                >
                                  Department
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="">
                                  <Dropdown.Item></Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </div>
                          <div className="value row">
                            <div className="col-lg-4">John Doe</div>
                            <div className="col-lg-4">Full-Timer</div>
                            <div className="col-lg-4">Design</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card_container col-lg-6">
                      <div className="card card-icon-bg card-icon-bg-primary o-hidden h-100">
                        <div className="card-body flex-column">
                          <h2>
                            <MdPersonOutline className="card_icon me-2" />
                            Leaving: <div className="number">1</div>
                          </h2>
                          <div className="drop_down row">
                            <div className="col-lg-4">
                              <Dropdown>
                                <Dropdown.Toggle
                                  variant="link"
                                  className="drop_down_toggle"
                                >
                                  Name
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="">
                                  <Dropdown.Item></Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>

                            <div className="col-lg-4">
                              <Dropdown>
                                <Dropdown.Toggle
                                  variant="link"
                                  className="drop_down_toggle"
                                >
                                  Reason
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="">
                                  <Dropdown.Item></Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                            <div className="col-lg-4">
                              <Dropdown>
                                <Dropdown.Toggle
                                  variant="link"
                                  className="drop_down_toggle"
                                >
                                  Department
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="">
                                  <Dropdown.Item></Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </div>
                          <div className="value row">
                            <div className="col-lg-4">John Doe</div>
                            <div className="col-lg-4">Resign</div>
                            <div className="col-lg-4">Design</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card_container col-lg-6">
                      <div className="card card-icon-bg card-icon-bg-primary o-hidden h-100">
                        <div className="card-body flex-column">
                          <h2>
                            <BsClock className="card_icon me-2" />
                            PR/Work Pass Expiring:
                            <div className="number">1</div>
                          </h2>
                          <div className="drop_down row">
                            <div className="col-lg-4">
                              <Dropdown>
                                <Dropdown.Toggle
                                  variant="link"
                                  className="drop_down_toggle"
                                >
                                  Name
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="">
                                  <Dropdown.Item></Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>

                            <div className="col-lg-4">
                              <Dropdown>
                                <Dropdown.Toggle
                                  variant="link"
                                  className="drop_down_toggle"
                                >
                                  PR/WP
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="">
                                  <Dropdown.Item></Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                            <div className="col-lg-4">
                              <Dropdown>
                                <Dropdown.Toggle
                                  variant="link"
                                  className="drop_down_toggle"
                                >
                                  Department
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="">
                                  <Dropdown.Item></Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </div>
                          <div className="value row">
                            <div className="col-lg-4">John Doe</div>
                            <div className="col-lg-4">Work Permit</div>
                            <div className="col-lg-4">Design</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card_container col-lg-6">
                      <div className="card card-icon-bg card-icon-bg-primary o-hidden h-100">
                        <div className="card-body flex-column">
                          <h2>
                            <BsClock className="card_icon me-2" />
                            Probation / Internship Ending:{" "}
                            <div className="number">1</div>
                          </h2>
                          <div className="drop_down row">
                            <div className="col-lg-4">
                              <Dropdown>
                                <Dropdown.Toggle
                                  variant="link"
                                  className="drop_down_toggle"
                                >
                                  Name
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="">
                                  <Dropdown.Item></Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>

                            <div className="col-lg-4">
                              <Dropdown>
                                <Dropdown.Toggle
                                  variant="link"
                                  className="drop_down_toggle"
                                >
                                  Probation/Internship
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="">
                                  <Dropdown.Item></Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                            <div className="col-lg-4">
                              <Dropdown>
                                <Dropdown.Toggle
                                  variant="link"
                                  className="drop_down_toggle"
                                >
                                  Department
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="">
                                  <Dropdown.Item></Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </div>
                          <div className="value row">
                            <div className="col-lg-4">John Doe</div>
                            <div className="col-lg-4">Internship</div>
                            <div className="col-lg-4">Design</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="btn_container">
                    <div className="btn" onClick={closeDialog}>
                      Close
                    </div>
                  </div>
                </Modal.Body>
              </>
            );
          }}
        </Formik>
      </StyleCalendarEventDialog>
    </Modal>
  );
};

const eventSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  start: yup.string().required("Start date is required"),
});

export default CalendarEventDialog;
