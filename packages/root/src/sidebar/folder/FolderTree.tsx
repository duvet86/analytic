import List from "@material-ui/core/List";
import React, { FC } from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import { FolderContainer, IFolderChild, Item } from "@trimble/shared-components";

interface IProps extends WithStyles<typeof styles> {
  folderList: IFolderChild[];
}

const styles = () =>
  createStyles({
    listContainer: {
      width: 312
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
