import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import React, { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

const drawerWidth = 312;

interface IProps {
  open: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
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
}));

const Sidebar: FC<IProps> = ({ open }) => {
  const classes = useStyles();

  return (
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
};

export default Sidebar;
