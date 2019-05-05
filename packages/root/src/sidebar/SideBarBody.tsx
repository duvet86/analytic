import React, { SFC } from "react";

import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import FolderTree from "sidebar/folder/FolderTree";
import { IFolderChild } from "sidebar/types";

interface IProps extends WithStyles<typeof styles> {
  folderList: IFolderChild[];
}

const styles = createStyles({
  bodyContainer: {
    height: "100%",
    display: "flex",
    overflow: "auto"
  }
});

const SidebarBody: SFC<IProps> = ({ classes, folderList }) => (
  <div className={classes.bodyContainer}>
    <FolderTree folderList={folderList} />
  </div>
);

export default withStyles(styles)(SidebarBody);
