import FolderIcon from "@material-ui/icons/Folder";
import SharedWithMeIcon from "@material-ui/icons/People";
import { ComponentType } from "react";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

export interface ITab {
  label: string;
  Icon: ComponentType<SvgIconProps>;
}

export const tabs: ITab[] = [
  {
    label: "My Items",
    Icon: FolderIcon
  },
  {
    label: "Shared With Me",
    Icon: SharedWithMeIcon
  }
];
