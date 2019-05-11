import FolderTree from "sidebar/folder/FolderTree";
import React, { SFC } from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import { IFolderChild } from "@trimble/shared-components";

interface IProps extends WithStyles<typeof styles> {
  folderList: IFolderChild[];
}

const styles = createStyles({
  bodyContainer: {
    height: "100%",
    width: 312,
    display: "flex",
    overflow: "auto"
  }
});

const SidebarFolderTree: SFC<IProps> = ({ classes, folderList }) => (
  <div className={classes.bodyContainer}>
    <FolderTree folderList={folderList} />
  </div>
);

export default withStyles(styles)(SidebarFolderTree);
