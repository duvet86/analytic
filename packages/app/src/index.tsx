import "index.css";
import "typeface-roboto";

import React, { ComponentType, lazy } from "react";
import { render } from "react-dom";
import { RouteComponentProps, Switch } from "react-router";
import { Router } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import configureTheme from "lib/configureTheme";
import history from "lib/history";

import ErrorBoundaryContainer from "errorBoundary/ErrorBoundaryContainer";

import AnonymousRoute from "routes/AnonymousRoute";
import AuthenticatedRoute from "routes/AuthenticatedRoute";
import { login, portal } from "routes/routes";
import * as serviceWorker from "serviceWorker";

import { LoadAsync } from "@mis/common";

const theme = configureTheme();

const LoginContainerAsync = lazy<ComponentType<RouteComponentProps>>(() =>
  import("login/LoginContainer")
);
const AppAsync = lazy<ComponentType<RouteComponentProps>>(() =>
  import("app/App")
);

render(
  <Router history={history}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundaryContainer>
        <LoadAsync>
          <Switch>
            <AnonymousRoute path={login} component={LoginContainerAsync} />
            <AuthenticatedRoute path={portal} component={AppAsync} />
          </Switch>
        </LoadAsync>
      </ErrorBoundaryContainer>
    </MuiThemeProvider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
