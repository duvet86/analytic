import React, { FC, useState } from "react";

import { SvgIconProps } from "@material-ui/core/SvgIcon";

import Folder from "./Folder";
import { IFolderChild } from "./types";

interface IProps {
  label: string;
  childFolders: IFolderChild[];
  nested: number;
  initExpanded?: boolean;
  CutomFolderIcon?: React.ComponentType<SvgIconProps>;
  disabled?: boolean;
}

const FolderContainer: FC<IProps> = ({
  initExpanded,
  nested,
  label,
  childFolders,
  CutomFolderIcon,
  disabled
}) => {
  const [expanded, setExpanded] = useState(initExpanded || false);

  const handleClick = () => {
    setExpanded(prevState => !prevState);
  };

  return (
    <Folder
      disabled={disabled}
      nested={nested}
      label={label}
      childFolders={childFolders}
      handleClick={handleClick}
      expanded={expanded}
      CutomFolderIcon={CutomFolderIcon}
    />
  );
};

export default FolderContainer;
