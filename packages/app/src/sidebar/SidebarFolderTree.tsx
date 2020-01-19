import FolderTree from "sidebar/folder/FolderTree";
import React, { SFC } from "react";
import { IFolderChild } from "@mis/common";
import { makeStyles } from "@material-ui/core/styles";

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

const SidebarFolderTree: SFC<IProps> = ({ folderList }) => {
  const classes = useStyles();

  return (
    <div className={classes.bodyContainer}>
      <FolderTree folderList={folderList} />
    </div>
  );
};

export default SidebarFolderTree;
