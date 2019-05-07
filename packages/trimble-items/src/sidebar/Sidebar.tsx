import React, { FC } from "react";
import classNames from "classnames";
import {
  createStyles,
  withStyles,
  WithStyles,
  Theme
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

const drawerWidth = 312;

interface IProps extends WithStyles<typeof styles> {
  open: boolean;
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

const Sidebar: FC<IProps> = ({ classes, open }) => (
  <Drawer
    className={classNames(classes.drawer, !open && classes.drawerClose)}
    variant="permanent"
    classes={{
      paper: classNames(classes.drawerPaper, !open && classes.drawerClose)
    }}
    open={open}
  >
    <div className={classes.bodyContainer}>Pippo</div>
  </Drawer>
);

export default withStyles(styles)(Sidebar);
