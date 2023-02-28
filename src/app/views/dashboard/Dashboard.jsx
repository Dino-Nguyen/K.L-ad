import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction"; // needed for dayClick
import {
  getAllEvents,
  addNewEvent,
  updateEvent,
  deleteEvent,
} from "./CalendarService";
import shortid from "shortid";
import CalendarEventDialog from "./CalendarEventDialog";
import { Link } from "react-router-dom";
import { StyleDashboard } from "./styleDashboard";

// icon
import { MdPersonOutline } from "react-icons/md";
import { FiCheckSquare } from "react-icons/fi";
import { BiTired } from "react-icons/bi";

class Dashboard1 extends Component {
  calendarComponentRef = React.createRef();
  externalEventRef = React.createRef();

  state = {
    avatar: "/assets/images/admin-avatar.png",
    announcement: [
      {
        title: "Fire Drill Exercise",
        detail:
          "There will be a fire drill exercise at 12noon on 30-09-2022. All staff are to proceed to the field outside the office when the siren sound off.",
      },
      {
        title: "Fire Drill Exercise",
        detail:
          "There will be a fire drill exercise at 12noon on 30-09-2022. All staff are to proceed to the field outside the office when the siren sound off.",
      },
      {
        title: "Fire Drill Exercise",
        detail:
          "There will be a fire drill exercise at 12noon on 30-09-2022. All staff are to proceed to the field outside the office when the siren sound off.",
      },
    ],
    totalWorkforce: 56,
    newHires: 1,
    staffLeaving: 1,
    clockedIn: 1,
    absent: 1,
    eventDialogOpen: false,
    calendarEvents: [
      {
        start: "2023-01-31T17:00:00.000Z",
        title: "$ICON John Doe",
        id: "1",
        end: "2023-02-02T17:00:00.000Z",
        color: "#41B9DF",
        classNames: ["text-white"],
        allDay: true,
        event: "onLeave",
      },
      {
        start: "2023-01-31T17:00:00.000Z",
        title: "$ICON Brandon",
        id: "2",
        end: "2023-02-01T17:00:00.000Z",
        color: "#41B9DF",
        classNames: ["text-white"],
        allDay: true,
        event: "onLeave",
      },
      {
        start: "2023-02-17T17:00:00.000Z",
        title: "$ICON Brandon + 1 more",
        id: "3",
        end: "2023-02-18T17:00:00.000Z",
        color: "#5856D6",
        classNames: ["text-white"],
        allDay: true,
        event: "newHires",
      },
      {
        start: "2023-03-02T17:00:00.000Z",
        title: "$ICON Chloe Tan + 1 more",
        id: "4",
        end: "2023-03-03T17:00:00.000Z",
        color: "#E20C00",
        classNames: ["text-white"],
        allDay: true,
        event: "birthdays",
      },
      {
        start: "2023-02-12T17:00:00.000Z",
        title: "$ICON Company Event",
        id: "5",
        end: "2023-02-13T17:00:00.000Z",
        color: "#FFB600",
        classNames: ["text-white"],
        allDay: true,
        event: "probation",
      },
      {
        start: "2023-02-23T17:00:00.000Z",
        title: "$ICON Chloe Tan + 1 more",
        id: "6",
        end: "2023-02-24T17:00:00.000Z",
        color: "#E20C00",
        classNames: ["text-white"],
        allDay: true,
        event: "birthdays",
      },
    ],
    eventObject: {},
    newEventInput: "",
    deleteEventOnDrop: false,
    externalEvents: [
      { title: "Hello world" },
      { title: "Payment schedule" },
      { title: "Go to shopping" },
      { title: "Rend due" },
      { title: "Car rent" },
    ],
  };

  eventIcon = (info) => {
    if (info.event.extendedProps.event === "onLeave") {
      info.el.innerHTML = info.el.innerHTML.replace(
        "$ICON",
        "<i class='i-Plane'></i>"
      );
    } else if (info.event.extendedProps.event === "birthdays") {
      info.el.innerHTML = info.el.innerHTML.replace(
        "$ICON",
        "<i class='i-Gift-Box'></i>"
      );
    } else if (info.event.extendedProps.event === "newHires") {
      info.el.innerHTML = info.el.innerHTML.replace(
        "$ICON",
        "<i class='i-Administrator'></i>"
      );
    } else if (info.event.extendedProps.event === "probation") {
      info.el.innerHTML = info.el.innerHTML.replace(
        "$ICON",
        "<i class='i-Calendar-4'></i>"
      );
    }
  };

  toggleWeekends = () => {
    this.setState({
      calendarWeekends: !this.state.calendarWeekends,
    });
  };

  gotoPast = () => {
    let calendarApi = this.calendarComponentRef.current.getApi();
    calendarApi.gotoDate("2000-01-01"); // call a method on the Calendar object
  };

  handleDateClick = (arg) => {
    // prompt("Please enter a new title for your event");
    this.setState({
      eventDialogOpen: true,
      eventObject: {
        title: "",
        start: arg.date,
        allDay: arg.allDay,
        classNames: ["text-white"],
      },
    });
  };

  handleEventDrop = async ({
    event: { id, start, end, title, allDay, classNames, backgroundColor },
  }) => {
    let { data: eventList } = await updateEvent({
      id,
      start,
      end,
      title,
      allDay,
      classNames,
      color: backgroundColor,
    });

    this.refreshFullCalendar(eventList);
  };

  handleExternalEventDrop = (event) => {
    let {
      date: start,
      allDay,
      draggedEl: {
        innerText: title,
        classList: { value: classNames },
      },
    } = event;

    this.handleEventDialogSubmit({
      start,
      title,
      allDay,
      classNames: classNames.concat(" text-white"),
    });

    let { externalEvents = [], deleteEventOnDrop } = this.state;

    if (!deleteEventOnDrop) return;

    this.setState({
      externalEvents: externalEvents.filter((item) => !item.title.match(title)),
    });
  };

  handleDeleteEvent = async (id) => {
    if (!id) return;
    let { data: eventList } = await deleteEvent({ id });
    this.refreshFullCalendar(eventList);
  };

  toggleEventDialog = () => {
    this.setState({ eventDialogOpen: !this.state.eventDialogOpen });
  };

  handleEventDialogSubmit = async (eventObject) => {
    let eventList = [];
    if (eventObject.id) {
      let { data } = await updateEvent(eventObject);
      eventList = data;
    } else {
      let { data } = await addNewEvent(eventObject);
      eventList = data;
    }

    this.refreshFullCalendar(eventList);
  };

  handleEventClick = ({
    event: { id, start, end, title, allDay, classNames, backgroundColor },
  }) => {
    this.setState({
      eventDialogOpen: true,
      eventObject: {
        id,
        title,
        start,
        end,
        allDay,
        classNames,
        color: backgroundColor,
      },
    });
  };

  handleChange = (event) => {
    let title = event.target.value;
    if (event.key === "Enter") {
      title = title.trim();
      if (title !== "") {
        this.setState({
          externalEvents: [...this.state.externalEvents, { title }],
          newEventInput: "",
        });
      }
    } else {
      this.setState({ newEventInput: title });
    }
  };

  refreshFullCalendar = (eventList = []) => {
    this.setState({
      calendarEvents: eventList.map((e) => ({
        start: e.start,
        title: e.title,
        id: e.id,
        end: e.end,
        classNames: e.classNames,
        color: e.color,
        allDay: e.allDay,
      })),
      eventDialogOpen: false,
    });
  };

  componentDidMount() {}

  render() {
    let {
      avatar,
      announcement = [],
      totalWorkforce,
      newHires,
      staffLeaving,
      clockedIn,
      absent,
      calendarEvents,
      calendarWeekends,
      eventDialogOpen,
      eventObject,
    } = this.state;
    return (
      <StyleDashboard>
        <div className="section_1 row mb-4">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="card card-icon-bg card-icon-bg-primary o-hidden h-100">
              <div className="user row align-items-center h-100 ps-2">
                <div className="col-lg-4 pe-0">
                  <div className="user_img">
                    <img
                      src={
                        avatar !== ""
                          ? avatar
                          : "/assets/images/auto-avatar.svg"
                      }
                      alt="avatar"
                    />
                  </div>
                </div>
                <div className="col-lg-8 ps-0">
                  <p>Welcome to Keclick,</p>
                  <p>Asure HR</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="card card-icon-bg card-icon-bg-primary o-hidden h-100">
              <div className="announcement card-body flex-column">
                <div className="w-100 d-flex align-items-center justify-content-between">
                  <p>Announcement:</p>
                  <div className="d-flex align-items-center">
                    <div className="dot active"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                </div>
                <h3>Fire Drill Exercise</h3>
                <span>
                  There will be a fire drill exercise at 12noon on 30-09-2022.
                  All staff are to proceed to the field outside the office when
                  the siren sound off.
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="card card-icon-bg card-icon-bg-primary o-hidden h-100">
              <div className="workforce card-body flex-column justify-content-evenly">
                <h3>Total Workforce</h3>
                <div className="number">
                  <MdPersonOutline className="me-3" />
                  <p>{totalWorkforce}</p>
                </div>
                <span>since last month</span>
              </div>
            </div>
          </div>
        </div>

        <div className="section_2 row">
          <div className="col-lg-9 col-md-12">
            <div className="card o-hidden">
              <div className="calendar card-body my-2">
                <FullCalendar
                  eventDidMount={this.eventIcon}
                  defaultView="dayGridMonth"
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  themeSystem="bootstrap"
                  displayEventTime={false}
                  droppable={true}
                  editable={true}
                  eventLimit={true}
                  ref={this.calendarComponentRef}
                  weekends={calendarWeekends}
                  events={calendarEvents}
                  dateClick={this.handleDateClick}
                  eventDrop={this.handleEventDrop}
                  eventResize={this.handleEventDrop}
                  eventClick={this.handleEventClick}
                  drop={this.handleExternalEventDrop}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-12">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                <div className="card card-icon-bg card-icon-bg-primary o-hidden h-100">
                  <div className="workforce card-body flex-column justify-content-evenly">
                    <h3>New Hires</h3>
                    <div className="number">
                      <MdPersonOutline className="me-3" />
                      <p>{newHires}</p>
                    </div>
                    <span>this month</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                <div className="card card-icon-bg card-icon-bg-primary o-hidden h-100">
                  <div className="workforce card-body flex-column justify-content-evenly">
                    <h3>Staff Leaving</h3>
                    <div className="number">
                      <MdPersonOutline className="me-3" />
                      <p>{staffLeaving}</p>
                    </div>
                    <span>this month</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                <div className="card card-icon-bg card-icon-bg-primary o-hidden h-100 mb-4">
                  <div className="workforce card-body flex-column justify-content-evenly">
                    <h3>Clocked-In</h3>
                    <div className="number">
                      <FiCheckSquare className="me-3 text-success" />
                      <p>{clockedIn}</p>
                    </div>
                    <span>for today</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                <div className="card card-icon-bg card-icon-bg-primary o-hidden h-100 mb-4">
                  <div className="workforce card-body flex-column justify-content-evenly">
                    <h3>Absent</h3>
                    <div className="number">
                      <img
                        className="me-3"
                        src="/assets/images/icon-absent.svg"
                        alt="icon-absent"
                      />
                      <p>{absent}</p>
                    </div>
                    <span>for today</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="card card-icon-bg card-icon-bg-primary o-hidden h-100">
                  <div className="quick_link card-body flex-column justify-content-evenly">
                    <h3>Quick Links</h3>
                    <ul>
                      <li>Add Super Admin</li>
                      <li>Add Branch</li>
                      <li>Add Announcement</li>
                      <li>Add Employee</li>
                      <li>Generate New Payroll</li>
                      <li>Add Assets</li>
                      <li>Add Attendance</li>
                      <li>New Claims</li>
                      <li>New Leaves</li>
                      <li>New Appraisals</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CalendarEventDialog
          open={eventDialogOpen}
          closeDialog={this.toggleEventDialog}
          handleSubmit={this.handleEventDialogSubmit}
          eventObject={eventObject}
          handleDeleteEvent={this.handleDeleteEvent}
        ></CalendarEventDialog>
      </StyleDashboard>
    );
  }
}

export default Dashboard1;
