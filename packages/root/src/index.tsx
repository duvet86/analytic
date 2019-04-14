import "index.css";

import React, { lazy, ComponentType } from "react";
import { render } from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Switch, RouteComponentProps } from "react-router";
import { BrowserRouter } from "react-router-dom";

import configureTheme from "lib/configureTheme";
import AnonymousRoute from "routes/AnonymousRoute";
import AuthenticatedRoute from "routes/AuthenticatedRoute";
import * as serviceWorker from "serviceWorker";

const theme = configureTheme();

const LoginContainerAsync = lazy<ComponentType<RouteComponentProps>>(() =>
  import("login/LoginContainer")
);
const AppContainerAsync = lazy<ComponentType<RouteComponentProps>>(() =>
  import("App")
);

render(
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <AnonymousRoute path="/login" component={LoginContainerAsync} />
        <AuthenticatedRoute path="/" component={AppContainerAsync} />
      </Switch>
    </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
