import React, { SFC } from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";

import AppBody from "app/AppBody";
import SideBar from "sidebar/SideBar";
import TopBarContainer from "topbar/TopBarContainer";

interface IProps extends WithStyles<typeof styles> {
  handleDrawerOpen: () => void;
  open: boolean;
}

const styles = createStyles({
  bodyContainer: {
    display: "flex",
    height: "100%",
    width: "100%"
  }
});

const App: SFC<IProps> = ({ classes, handleDrawerOpen, open }) => (
  <>
    <TopBarContainer handleDrawerOpen={handleDrawerOpen} />
    <div className={classes.bodyContainer}>
      {/* <SideBar open={open} /> */}
      <AppBody />
    </div>
  </>
);

export default withStyles(styles)(App);
