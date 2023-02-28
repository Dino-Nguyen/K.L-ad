import React, { Component, Suspense } from "react";
import { renderRoutes } from "react-router-config";

import Header from "./Header";
import Sidenav from "./Sidenav";
import { connect } from "react-redux";

import { classList } from "@utils";
import { merge } from "lodash";
import { setLayoutSettings } from "app/redux/actions/LayoutActions";
import Loading from "@gull/components/GullLoadable/Loading";
import { StyleLayout } from "./styleLayout";

class Layout extends Component {
  state = {};

  handleSearchBoxClose = () => {
    let { setLayoutSettings, settings } = this.props;
    setLayoutSettings(
      merge({}, settings, {
        layoutSettings: {
          searchBox: {
            open: false,
          },
        },
      })
    );
  };

  render() {
    let { settings, routes } = this.props;

    return (
      <StyleLayout>
        <div
          className={`${classList({
            "app-admin-wrap layout-sidebar-compact clearfix": true,
            "sidenav-open": settings.layoutSettings.leftSidebar.open,
          })} ${settings.layoutSettings.leftSidebar.theme}`}
        >
          <Sidenav></Sidenav>
          {/* sidebar */}

          <div
            style={{background:'#F2F2F2'}}
            className={classList({
              "main-content-wrap d-flex flex-column": true,
              "sidenav-open": settings.layoutSettings.leftSidebar.open,
            })}
          >
            {settings.layoutSettings.header.show && <Header></Header>}
            <Suspense fallback={<Loading />}>
              <div style={{marginTop: 80}} className="main-content">{renderRoutes(routes)}</div>
            </Suspense>
          </div>
        </div>
      </StyleLayout>
    );
  }
}

const mapStateToProps = (state) => ({
  settings: state.layout.settings,
});

export default connect(mapStateToProps, { setLayoutSettings })(Layout);
