import React, { FC } from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";

import AppBody from "app/AppBody";
import SideBar from "sidebar/SideBar";
import TopBarContainer from "topbar/TopBarContainer";

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
      <SideBar open={isOpen} />
      <AppBody />
    </div>
  </>
);

export default withStyles(styles)(App);
