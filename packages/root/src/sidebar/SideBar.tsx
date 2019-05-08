import React, { FC, ChangeEvent } from "react";
import classNames from "classnames";
import {
  createStyles,
  withStyles,
  WithStyles,
  Theme
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import { IFolderChild } from "sidebar/types";
import { LoadingContainer } from "@trimble/shared-components";
import SidebarTabs from "sidebar/SidebarTabs";
import SidebarBody from "sidebar/SidebarBody";

const drawerWidth = 312;

interface IProps extends WithStyles<typeof styles> {
  isLoading: boolean;
  open: boolean;
  selectedTab: 0 | 1 | 2;
  folderList: IFolderChild[];
  handleChange: (_: ChangeEvent<{}>, value: 0 | 1 | 2) => void;
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

const Sidebar: FC<IProps> = ({
  classes,
  isLoading,
  open,
  selectedTab,
  folderList,
  handleChange
}) => (
  <Drawer
    className={classNames(classes.drawer, !open && classes.drawerClose)}
    variant="permanent"
    classes={{
      paper: classNames(classes.drawerPaper, !open && classes.drawerClose)
    }}
    open={open}
  >
    <div className={classes.bodyContainer}>
      <SidebarTabs selectedTab={selectedTab} handleChange={handleChange} />
      <LoadingContainer isLoading={isLoading}>
        <SidebarBody folderList={folderList} />
      </LoadingContainer>
    </div>
  </Drawer>
);

export default withStyles(styles)(Sidebar);
