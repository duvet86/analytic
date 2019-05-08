import "typeface-roboto";
import "index.css";

import React, { lazy, ComponentType } from "react";
import { render } from "react-dom";
import { Switch, RouteComponentProps } from "react-router";
import { Router } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { portal, login } from "routes/routes";
import configureTheme from "lib/configureTheme";
import history from "lib/history";
import ErrorBoundaryContainer from "errorBoundary/ErrorBoundaryContainer";
import { LoadAsync } from "@trimble/shared-components";
import AnonymousRoute from "routes/AnonymousRoute";
import AuthenticatedRoute from "routes/AuthenticatedRoute";
import * as serviceWorker from "serviceWorker";

const theme = configureTheme();

const LoginContainerAsync = lazy<ComponentType<RouteComponentProps>>(() =>
  import("login/LoginContainer")
);
const AppContainerAsync = lazy<ComponentType<RouteComponentProps>>(() =>
  import("app/AppContainer")
);

render(
  <Router history={history}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundaryContainer>
        <LoadAsync>
          <Switch>
            <AnonymousRoute path={login} component={LoginContainerAsync} />
            <AuthenticatedRoute path={portal} component={AppContainerAsync} />
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
