import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import React, { ComponentType, FC } from "react";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
  } from "@material-ui/core/styles";

const drawerWidth = 312;

interface IProps extends WithStyles<typeof styles> {
  open: boolean;
  SidebarBodyComponent: ComponentType;
}

const styles = (theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerPaper: {
      position: "relative",
      width: drawerWidth,
      overflow: "hidden",
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: {
      width: 0,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    bodyContainer: {
      borderLeft: "1px solid rgba(0, 0, 0, 0.12)",
      display: "flex",
      flexDirection: "column",
      marginBottom: 48
    }
  });

const Sidebar: FC<IProps> = ({ classes, open, SidebarBodyComponent }) => (
  <Drawer
    className={classNames(classes.drawer, !open && classes.drawerClose)}
    variant="permanent"
    classes={{
      paper: classNames(classes.drawerPaper, !open && classes.drawerClose)
    }}
    open={open}
  >
    <div className={classes.bodyContainer}>
      <SidebarBodyComponent />
    </div>
  </Drawer>
);

export default withStyles(styles)(Sidebar);
