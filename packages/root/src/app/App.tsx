import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import { routeComponents } from "app/routeComponents";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";

import SidebarContainer from "sidebar/SidebarContainer";
import TopBarContainer from "topbar/TopBarContainer";
import Grid from "@material-ui/core/Grid";
import LoadAsync from "loading/LoadAsync";
import NotFoundRoute from "routes/NotFoundRoute";

interface IProps extends WithStyles<typeof styles> {
  handleDrawerOpen: () => void;
  isOpen: boolean;
}

const styles = createStyles({
  bodyContainer: {
    display: "flex",
    height: "100%",
    width: "100%"
  }
});

const App: FC<IProps> = ({ classes, handleDrawerOpen, isOpen }) => (
  <>
    <TopBarContainer handleDrawerOpen={handleDrawerOpen} />
    <div className={classes.bodyContainer}>
      <SidebarContainer open={isOpen} />
      <Grid container>
        <Grid item xs={12}>
          <LoadAsync>
            <Switch>
              {routeComponents.map(({ path, routeRenderer }, i) => (
                <Route key={i} exact path={path} render={routeRenderer} />
              ))}
              <NotFoundRoute />
            </Switch>
          </LoadAsync>
        </Grid>
      </Grid>
    </div>
  </>
);

export default withStyles(styles)(App);
