import React, { FC } from "react";
import List from "@material-ui/core/List";

import FolderContainer from "sidebar/folder/FolderContainer";
import Item from "sidebar/folder/Item";
import { IFolderChild } from "sidebar/types";

interface IProps {
  folderList: IFolderChild[];
}

const FolderTree: FC<IProps> = ({ folderList }) => (
  <List disablePadding component="nav">
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

export default FolderTree;
