import React, { SFC } from "react";
import classNames from "classnames";

import {
  createStyles,
  withStyles,
  WithStyles,
  Theme
} from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";

// import NavigationTabsContainer from "sidebar/navigationTabs/NavigationTabsContainer";
// import SideBarBodyContainer from "sidebar/SideBarBodyContainer";
// import NavButtons from "sidebar/NavButtons";

// export const drawerBodyWidth = 312;

interface IProps extends WithStyles<typeof styles, true> {
  open: boolean;
}

const styles = (theme: Theme) =>
  createStyles({
    drawerPaper: {
      position: "relative",
      width: 312,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerPaperClose: {
      width: 0,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    buttonsContainer: {
      width: 50
    },
    bodyContainer: {
      borderLeft: "1px solid rgba(0, 0, 0, 0.12)",
      display: "flex",
      flexDirection: "column"
    }
  });

const SideBar: SFC<IProps> = ({ theme, classes, open, ...props }) => (
  <Drawer
    variant="permanent"
    classes={{
      paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose)
    }}
    open={open}
  >
    {/* <NavButtons /> */}
    <div className={classes.bodyContainer}>
      Test
      {/* <NavigationTabsContainer {...props} />
      <SideBarBodyContainer {...props} /> */}
    </div>
  </Drawer>
);

export default withStyles(styles, { withTheme: true })(SideBar);
