import React, { FC } from "react";
import { RouteComponentProps } from "react-router";
import { Route, Switch } from "react-router-dom";

import { LoadAsync, NotFoundRoute } from "@mis/common";

import { routeComponents } from "./routeComponents";

const App: FC = () => (
  <LoadAsync>
    <Switch>
      {routeComponents.map(({ path, Component }, i) => {
        const renderComponent = (routeProps: RouteComponentProps) => (
          <Component {...routeProps} />
        );
        return <Route key={i} exact path={path} render={renderComponent} />;
      })}
      <NotFoundRoute />
    </Switch>
  </LoadAsync>
);

export default App;
