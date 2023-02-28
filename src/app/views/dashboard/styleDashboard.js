import styled from "styled-components";

export const StyleDashboard = styled.div`
  .card-body {
    padding: 0.75rem 1rem !important;
  }

  .section_1 {
    .card {
      height: 140px !important;
    }
    .user {
      .user_img {
        width: 90%;
        height: 80px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);
        }
      }
      p {
        margin-bottom: 5px;
        font-family: "Quicksand", san-serif;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
      }
    }
    .announcement {
      color: white;
      background-color: black;

      p {
        margin-bottom: 10px;
        font-family: "Open Sans", san-serif;
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
      }
      h3 {
        color: white !important;
        font-family: "Open Sans", san-serif;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
      }
      span {
        font-family: "Open Sans", san-serif;
        font-style: normal;
        font-size: 12px;
        line-height: 16px;
      }
      .dot {
        width: 8px;
        height: 8px;
        margin-left: 5px;
        cursor: pointer;
        border-radius: 50%;
        background-color: #CCCCCC;
      }
      .active{
        background-color: #00cdc2;
      }
    }
  }

  .section_2 {
    .calendar {
      .fc-col-header {
        .fc-col-header-cell {
          border: 1px solid #CCCCCC;
          
          .fc-scrollgrid-sync-inner {
            padding: 10px 38px;

            .fc-col-header-cell-cushion {
              color: black;
              text-transform: uppercase;
              font-family: 'Quicksand', san-serif;
              font-weight: 600;
              font-size: 16px;
              line-height: 20px;
            }
          }
        }
      }
      .fc-scrollgrid-sync-table {
        .fc-daygrid-day {
          border: 1px solid #CCCCCC;

          .fc-daygrid-day-top {
            flex-direction: inherit;

            .fc-daygrid-day-number {
              color: black;
            }
          }
        }
        .fc-day-sun {
          background-color: #F2F2F2;
        }
        .fc-day-sat {
          background-color: #F2F2F2;
        }
        .fc-day-today {
          border: 3px solid #000000;
          background-color: #F2F2F2;
        }
        .fc-day-other {
          background-color: #B3B3B3;

          .fc-daygrid-day-number {
            color: black;
          }
        }
      }
    }
    .quick_link {
      margin-top: 10px;
      margin-bottom: 10px;

      h3 {
        margin-bottom: 20px
        font-family: "Quicksand", san-serif;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
      }
      li {
        margin-bottom: 20px;
        font-family: "Open Sans", san-serif;
        font-weight: 600;
        font-size: 14px;
        line-height: 14px;
      }
    }
  }

  .workforce {
    h3 {
      font-family: "Quicksand", san-serif;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
    }
    span {
      font-family: "Quicksand", san-serif;
      font-weight: 600;
      font-size: 12px;
      line-height: 20px;
    }
    .number {
      width: 100%;
      display: flex;
      align-items: center;
      color: #5856d6;
      font-family: "Quicksand", san-serif;
      font-weight: 700;
      font-size: 24px;
      line-height: 30px;

      p {
        margin: 0;
      }
    }
  }
`;

export const StyleCalendarEventDialog = styled.div`
  .modal-header {
    border: none;

    h2 {
      padding-left: 12px;
      font-family: "Quicksand", san-serif;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
    }
  }

  .modal-body {
    .card_container {
      margin-bottom: 24px;

      .card {
        height: 100% !important;
        border: 1px solid #4d4d4d;
        border-radius: 12px;

        .card-body {
          padding: 0.5rem !important;

          h2 {
            margin-bottom: 1.25rem;
            display: flex;
            align-items: center;
            font-family: "Open Sans", san-serif;
            font-weight: 600;
            font-size: 20px;
            line-height: 28px;

            .card_icon {
              color: black;
              font-weight: 600;
              font-size: 20px;
            }
            .number {
              width: fit-content;
              margin-left: 10px;
            }
          }
          .drop_down {
            padding: 10px 0px;
            background-color: #f2f2f2;

            .drop_down_toggle {
              color: black;
              text-decoration: none;
              font-family: "Open Sans", san-serif;
              font-weight: 600;
              font-size: 12px;
              line-height: 16px;
            }
          }
          .value {
            padding: 20px 0px;
            font-family: "Open Sans", san-serif;
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;

            div {
              padding-left: 24px;
            }
          }
        }
      }
    }
  }

  .btn_container {
    width: 100%;
    text-align: end;

    .btn {
      padding: 5px 60px;
      border-radius: 20px;
      color: #00cdc2;
      border: 1px solid #00cdc2;
      font-family: "Open Sans", san-serif;
      font-weight: 600;
      font-size: 14px;
      line-height: 30px;
    }
    .btn:hover {
      background-color: #00cdc233;
    }
  }
`;

export const StyleMyProfile = styled.div`
  .card {
    padding: 40px;

    h3 {
      margin-bottom: 15px;
      font-family: "Quicksand", san-serif;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
    }
    .myProfile_img {
      width: 94%;
      height: 160px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
      .upload_file {
        width: 39px;
        height: 39px;
        cursor: pointer;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: #ffffff;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.4);

        i {
          color: #00cdc2;
          font-size: 15px;
        }
      }
    }
    .input_group {
      margin-bottom: 30px;
      display: flex;
      flex-direction: column;

      label {
        margin-bottom: 10px;
        font-family: "Open Sans", san-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
      }
      input {
        border: none;
        padding: 10px 20px;
        background-color: #e5e5e5;
        border-radius: 5px;
        font-family: "Open Sans", san-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
      }
      input:focus {
        outline: none;
      }
    }
    .btn_container {
      width: 100%;
      margin-top: 35px;
      display: flex;
      align-items: center;
      flex-flow: row-reverse;

      .btn_cancel {
        margin-right: 42px;
        padding: 5px 30px;
        border-radius: 20px;
        background-color: #ffffff;
        color: #00cdc2;
        border: 1px solid #00cdc2;
        font-family: "Open Sans", san-serif;
        font-weight: 600;
        font-size: 14px;
        line-height: 30px;
      }
      .btn_cancel:hover {
        background-color: #00cdc233;
      }
      .btn_submit {
        padding: 5px 30px;
        border: none;
        border-radius: 20px;
        background-color: #00cdc2;
        color: #ffffff;
        font-family: "Open Sans", san-serif;
        font-weight: 600;
        font-size: 14px;
        line-height: 30px;
      }
      .btn_submit:hover {
        color: #00cdc2;
        background-color: #00cdc233;
      }
    }
  }
`;
