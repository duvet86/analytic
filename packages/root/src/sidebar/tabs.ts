import { ComponentType } from "react";

import { SvgIconProps } from "@material-ui/core/SvgIcon";
import FolderIcon from "@material-ui/icons/Folder";
import SharedWithMeIcon from "@material-ui/icons/People";
import StarredIcon from "@material-ui/icons/Star";

export interface ITab {
  label: string;
  Icon: ComponentType<SvgIconProps>;
}

export const tabs: ITab[] = [
  {
    label: "Starred",
    Icon: StarredIcon
  },
  {
    label: "My Items",
    Icon: FolderIcon
  },
  {
    label: "Shared With Me",
    Icon: SharedWithMeIcon
  }
];
