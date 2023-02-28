import styled from "styled-components";

export const StyleLayout = styled.div`
  .app-admin-wrap {
    .main-content-wrap {
      padding-left: 0;
      padding-right: 1rem;
      background-color: #f5f5f5;
    }
  }
`;

export const StyleHeader = styled.div`
  .main-header {
    height: 80px;

    .page_name {
      font-family: "Quicksand", sans-serif;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
    }

    .switch_organization {
      p {
        margin: 0;
        font-family: "Open Sans", sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
      }
      .toggle_btn {
        font-family: "Open Sans", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
      }
      .organization_menu_expand {
        padding: 0;

        .dropdown-item {
          width: 230px;
          padding: 15px 10px;
          font-family: "Open Sans", sans-serif;
          font-weight: 600;
          font-size: 16px;
          line-height: 20px;
        }
        .dropdown-item:hover {
          background-color: #00cdc233;
        }
        .active {
          color: black;
          background-color: #00cdc233;
        }
      }
    }

    .badge-top-container {
      position: relative;

      .notification_active {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        position: absolute;
        top: 0;
        right: 0;
        background-color: #00cdc2;
      }
    }
    .notification-dropdown {
      width: 367px;
      max-height: 745px;
      overflow: hidden;
      border-radius: 12px;
      transform: translate3d(15px, 52px, 0px) !important;

      .dropdown-item {
        height: fit-content;
        padding: 10px 20px;
        border: none;
        border-top: 1px solid;

        .notification_icon {
          margin-right: 15px;
          font-size: 20px;
        }
        p {
          margin: 0;
          font-family: "Open Sans", sans-serif;
          font-weight: 700;
          font-size: 14px;
          line-height: 18px;
        }
        span {
          font-family: "Open Sans", sans-serif;
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
        }
      }
      .dropdown-item:nth-child(2) {
        border: none;
      }
      .dropdown-item:first-child {
        height: 50px;
        border-radius: 12px 12px 0px 0px;
        border: none;
        background-color: #deddf7;
        color: black;
        text-align: center;
        font-family: "Open Sans", sans-serif;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;

        div {
          width: 100%;
          text-align: center;
        }
      }
      .dropdown-item:last-child {
        height: 80px;
        cursor: auto;
        border: none;
        border-radius: 0px 0px 12px 12px;

        .btn_container {
          width: 100%;
          text-align: center;
        }
        .btn {
          padding: 5px 22px;
          border-color: #00cdc2;
          border-radius: 20px;
          background-color: white;
          color: #00cdc2;
          font-family: "Open Sans", sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 30px;
        }
        .btn:hover {
          background-color: #00cdc233;
        }
      }
      .dropdown-item:not(:last-child):hover {
        background-color: #deddf7;
      }
      .dropdown-item:last-child:hover {
        background-color: white;
      }
    }

    .user {
      margin: 0;

      img {
        width: 50px;
        height: 50px;
        background-color: white;
      }
      p {
        margin: 0;
        font-family: "Open Sans", sans-serif;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
      }
      span {
        font-family: "Open Sans", sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
      }
      .profile_menu_expand {
        padding: 0;

        .dropdown-item {
          width: 200px;
          padding-top: 10px;
          padding-bottom: 10px;
          color: black;
          font-family: "Open Sans", sans-serif;
          font-weight: 600;
          font-size: 16px;
          line-height: 20px;
        }
        .dropdown-item:first-child {
          border-radius: 12px 12px 0px 0px;
        }
        .dropdown-item:hover {
          background-color: #deddf7;
        }
      }
    }

    .btn {
      text-align: left;
      text-decoration: none;
      color: black;
    }
  }
`;

export const StyleSidenav = styled.div`
  .side-content-wrap {
    width: 240px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: white;
    // z-index: 2;

    p {
      font-family: "Quicksand", sans-serif;
      font-weight: 700;
      font-size: 17px;
      line-height: 20px;
    }
    .nav_btn {
      border-radius: 30px;
      padding: 18px 40px 18px 20px;

      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        text-align: left;
        color: black;
        font-family: "Open Sans", sans-serif;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;

        i {
          font-weight: 600;
          font-size: 16px;
          line-height: 20px;
        }
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          display: none;
        }
        .chat_active {
          display: block;
          background-color: #00cdc2;
        }
      }
    }
    .nav_btn:hover {
      background-color: #00cdc233;

      a {
        color: #00cdc2;
      }
    }
    .active {
      background-color: #00cdc233;

      a {
        color: #00cdc2;
      }
    }
  }

  @media (max-width: 1024px) {
    .side-content-wrap {
      .sidebar-left {
        // left: calc(-250px - 20px);
        transition: all 0.24s ease-in-out;
      }
    }
  }

  @media (max-width: 767px) {
  }

  @media (max-width: 576px) {
  }

  @media (max-width: 360px) {
  }
`;
