import React, { FC } from "react";
import { RouteComponentProps } from "react-router";
import { Route, Switch } from "react-router-dom";
import { routeComponents } from "app/routeComponents";

import TopBarContainer from "topbar/TopBarContainer";
import { LoadAsync } from "@trimble/shared-components";
import NotFoundRoute from "routes/NotFoundRoute";

interface IProps {
  handleDrawerOpen: () => void;
  isOpen: boolean;
}

const App: FC<IProps> = ({ handleDrawerOpen, isOpen }) => (
  <>
    <TopBarContainer handleDrawerOpen={handleDrawerOpen} />
    <LoadAsync>
      <Switch>
        {routeComponents.map(({ path, Component }, i) => {
          const renderComponent = (routeProps: RouteComponentProps) => (
            <Component {...routeProps} isOpen={isOpen} />
          );
          return <Route key={i} exact path={path} render={renderComponent} />;
        })}
        <NotFoundRoute />
      </Switch>
    </LoadAsync>
  </>
);

export default App;
