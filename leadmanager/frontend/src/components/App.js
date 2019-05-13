import React, { Component, Fragment } from "react";
import Header from "./layout/Header";
import Dashbard from "./leads/Dashboard";
import Alerts from "./layout/Alerts";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import { Provider } from "react-redux";
import store from "../store";

// Alert options
const alertOptions = {
  timeout: 3000,
  position: "top center"
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
        <Fragment>
          <Header />
          <Alerts />
          <div className="container">
            <Dashbard />
          </div>
        </Fragment>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
