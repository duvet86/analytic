import React, { FC } from "react";
import { Redirect, Route } from "react-router-dom";
import { RouteComponentProps } from "react-router";

import { getTokenFromSession } from "../lib/authApi";
import { IRouteProps } from "../routes/types";

const AnonymousRoute: FC<IRouteProps> = ({ component, ...props }) => {
  const boundRender = (routeProps: RouteComponentProps) =>
    getTokenFromSession() == null ? (
      React.createElement(component, routeProps)
    ) : (
      <Redirect
        to={{
          pathname: "/",
          state: { from: routeProps.location }
        }}
      />
    );

  return <Route exact {...props} render={boundRender} />;
};

export default AnonymousRoute;
