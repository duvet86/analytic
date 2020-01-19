import { LoadAsync } from "@trimble/common";
import { routeComponents } from "app/routeComponents";
import React, { FC } from "react";
import { RouteComponentProps } from "react-router";
import { Route, Switch } from "react-router-dom";
import NotFoundRoute from "routes/NotFoundRoute";
import TopBarContainer from "topbar/TopBarContainer";

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
