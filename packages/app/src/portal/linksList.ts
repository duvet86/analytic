import { ComponentType } from "react";

import { SvgIconProps } from "@material-ui/core/SvgIcon";
import FolderIcon from "@material-ui/icons/Folder";

import {
  configureSystemRoutePath,
  contactRoutePath,
  infoRoutePath,
  itemsManagerRoutePath,
  pageBuilderNewRoutePath,
  profileRoutePath,
  workbenchNewRoutePath,
  ConfigureSessionIcon,
  ContactUsIcon,
  DashboardIcon,
  DataViewIcon,
  ProductInfoIcon,
  ProfileIcon
} from "@mis/common";

export interface IPortalLink {
  IconComponent: ComponentType<SvgIconProps>;
  label: string;
  description: string;
  to: string;
}

const linksList: IPortalLink[] = [
  {
    IconComponent: FolderIcon,
    label: "Items Manager",
    description: "This is where you organise your items.",
    to: itemsManagerRoutePath
  },
  {
    IconComponent: DashboardIcon,
    label: "Pagebuilder",
    description: "This is where you visualise your queries.",
    to: pageBuilderNewRoutePath
  },
  {
    IconComponent: DataViewIcon,
    label: "Workbench",
    description:
      "This is where you can query, filter and manipulate your data.",
    to: workbenchNewRoutePath
  },
  {
    IconComponent: ConfigureSessionIcon,
    label: "Configure System",
    description:
      "This is where you configure things such as: operations and intervals.",
    to: configureSystemRoutePath
  },
  {
    IconComponent: ProfileIcon,
    label: "Profile",
    description: "This is where you change your personal information.",
    to: profileRoutePath
  },
  {
    IconComponent: ContactUsIcon,
    label: "Contact Us",
    description: "For any trouble or info contact us here.",
    to: contactRoutePath
  },
  {
    IconComponent: ProductInfoIcon,
    label: "Product Info",
    description: "Product version and info.",
    to: infoRoutePath
  }
];

export default linksList;
