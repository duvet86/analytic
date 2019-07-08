import * as serviceWorker from "serviceWorker";
import AnonymousRoute from "routes/AnonymousRoute";
import AuthenticatedRoute from "routes/AuthenticatedRoute";
import configureTheme from "lib/configureTheme";
import CssBaseline from "@material-ui/core/CssBaseline";
import ErrorBoundaryContainer from "errorBoundary/ErrorBoundaryContainer";
import history from "lib/history";
import React, { ComponentType, lazy } from "react";
import { LoadAsync } from "@trimble/common";
import { login, portal } from "routes/routes";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { render } from "react-dom";
import { RouteComponentProps, Switch } from "react-router";
import { Router } from "react-router-dom";
import "index.css";
import "typeface-roboto";

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
