import React, { Component } from "react";
import configureStore from "./store";
import { HashRouter, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import logo from "./logo.svg";
import "./App.css";
import Loadable from "react-loadable";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse" />
  </div>
);

//Pages
const FileUpload = Loadable({
  loader: () => import("./views/FileUpload"),
  loading,
});

class App extends Component {
  render() {
    const { store, persistor } = configureStore();

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HashRouter>
            <Switch>
              {/* <Route exact path="/login" name="Login Page" component={Login} />
            <Route
              exact
              path="/register"
              name="Register Page"
              component={Register}
            /> */}
              <Route path="/" name="Home" component={FileUpload} />
            </Switch>
          </HashRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
