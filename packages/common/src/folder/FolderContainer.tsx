import Folder from "@trimble-common/folder/Folder";
import React, { FC, useState } from "react";
import { IFolderChild } from "@trimble-common/folder/types";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

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
