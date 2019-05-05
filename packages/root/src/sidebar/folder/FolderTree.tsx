import React, { FC } from "react";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import FolderContainer from "sidebar/folder/FolderContainer";
import Item from "sidebar/folder/Item";
import { IFolderChild } from "sidebar/types";

interface IProps extends WithStyles<typeof styles> {
  folderList: IFolderChild[];
}

const styles = () =>
  createStyles({
    listContainer: {
      width: "100%"
    }
  });

const FolderTree: FC<IProps> = ({ classes, folderList }) => (
  <List className={classes.listContainer} disablePadding component="nav">
    {folderList.map(
      ({ ChildType, ChildFolderId, ChildFolder, ChildItemId, ChildItem }) =>
        ChildType === "F" ? (
          <FolderContainer
            nested={1}
            key={ChildFolderId}
            label={ChildFolder.Label}
            childFolders={ChildFolder.Children}
          />
        ) : (
          <Item
            nested={1}
            key={ChildItemId}
            itemTypeId={ChildItem.ItemTypeId}
            itemId={ChildItem.ItemId}
            label={ChildItem.Label}
          />
        )
    )}
  </List>
);

export default withStyles(styles)(FolderTree);
