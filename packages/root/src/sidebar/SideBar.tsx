import React, { FC } from "react";
import classNames from "classnames";
import {
  createStyles,
  withStyles,
  WithStyles,
  Theme
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import FavouriteItems from "sidebar/FavouriteItems";

interface IProps extends WithStyles<typeof styles> {
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
    bodyContainer: {
      borderLeft: "1px solid rgba(0, 0, 0, 0.12)"
    }
  });

const SideBar: FC<IProps> = ({ classes, open }) => (
  <Drawer
    variant="permanent"
    classes={{
      paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose)
    }}
    open={open}
  >
    <div className={classes.bodyContainer}>
      <FavouriteItems />
    </div>
  </Drawer>
);

export default withStyles(styles)(SideBar);
