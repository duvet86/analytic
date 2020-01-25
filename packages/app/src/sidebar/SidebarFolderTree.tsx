import React, { FC } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { IFolderChild } from "@mis/common";

import FolderTree from "./folder/FolderTree";

interface IProps {
  folderList: IFolderChild[];
}

const useStyles = makeStyles({
  bodyContainer: {
    height: "100%",
    width: 312,
    display: "flex",
    overflow: "auto"
  }
});

const SidebarFolderTree: FC<IProps> = ({ folderList }) => {
  const classes = useStyles();

  return (
    <div className={classes.bodyContainer}>
      <FolderTree folderList={folderList} />
    </div>
  );
};

export default SidebarFolderTree;
