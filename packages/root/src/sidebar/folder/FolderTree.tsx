import List from "@material-ui/core/List";
import React, { FC } from "react";
import { FolderContainer, IFolderChild, Item } from "@trimble/shared-components";
import { makeStyles } from "@material-ui/core/styles";

interface IProps {
  folderList: IFolderChild[];
}

const useStyles = makeStyles({
  listContainer: {
    width: 312
  }
});

const FolderTree: FC<IProps> = ({ folderList }) => {
  const classes = useStyles();

  return (
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
};

export default FolderTree;
