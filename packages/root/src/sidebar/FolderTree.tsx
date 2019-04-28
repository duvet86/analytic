import React, { SFC } from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";

import { IFolderChild } from "sidebar/types";
import FolderContainer from "sidebar/FolderContainer";

import SharedWithMeIcon from "@material-ui/icons/People";
import StarredIcon from "@material-ui/icons/Star";
import TrashIcon from "@material-ui/icons/Delete";

interface IProps extends WithStyles<typeof styles> {
  myItems: IFolderChild[];
  sharedWithMe: IFolderChild[];
}

const styles = createStyles({
  container: {
    overflow: "auto",
    height: "100%",
    width: 312
  }
});

const FolderTree: SFC<IProps> = ({ classes, myItems, sharedWithMe }) => (
  <div className={classes.container}>
    <FolderContainer nested={1} label="My Items" childFolders={myItems} />
    <FolderContainer
      nested={1}
      label="Shared With me"
      childFolders={sharedWithMe}
      CutomFolderIcon={SharedWithMeIcon}
    />
    <FolderContainer
      nested={1}
      label="Starred"
      childFolders={[]}
      CutomFolderIcon={StarredIcon}
    />
    <FolderContainer
      nested={1}
      label="Trash"
      childFolders={[]}
      CutomFolderIcon={TrashIcon}
    />
  </div>
);

export default withStyles(styles)(FolderTree);
