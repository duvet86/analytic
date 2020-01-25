import React, { FC } from "react";
import { Redirect, Route } from "react-router";
import { RouteComponentProps } from "react-router";

import { getTokenFromSession } from "../lib/authApi";
import { IRouteProps } from "../routes/types";
import { loginRoutePath } from "../routes/routes";

const AuthenticatedRoute: FC<IRouteProps> = ({ component, ...props }) => {
  const boundRender = (routeProps: RouteComponentProps) =>
    getTokenFromSession() != null ? (
      React.createElement(component, routeProps)
    ) : (
      <Redirect
        to={{
          pathname: loginRoutePath,
          state: { from: routeProps.location }
        }}
      />
    );

  return <Route exact {...props} render={boundRender} />;
};

export default AuthenticatedRoute;
