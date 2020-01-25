import "./index.css";
import "typeface-roboto";

import React, { ComponentType, lazy } from "react";
import { render } from "react-dom";
import { RouteComponentProps, Switch } from "react-router";
import { Router } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";

import {
  history,
  LoadAsync,
  AnonymousRoute,
  AuthenticatedRoute,
  loginRoutePath,
  portalRoutePath
} from "@mis/common";
import configureTheme from "./lib/configureTheme";

import ErrorBoundaryContainer from "./errorBoundary/ErrorBoundaryContainer";

import * as serviceWorker from "./serviceWorker";

const theme = configureTheme();

const LoginContainerAsync = lazy<ComponentType<RouteComponentProps>>(() =>
  import("./login/LoginContainer")
);
const AppAsync = lazy<ComponentType<RouteComponentProps>>(() =>
  import("./app/App")
);

render(
  <Router history={history}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundaryContainer>
        <LoadAsync>
          <Switch>
            <AnonymousRoute
              path={loginRoutePath}
              component={LoginContainerAsync}
            />
            <AuthenticatedRoute path={portalRoutePath} component={AppAsync} />
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
