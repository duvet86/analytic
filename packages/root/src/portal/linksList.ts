import { SvgIconProps } from "@material-ui/core/SvgIcon";
import FolderIcon from "@material-ui/icons/Folder";
import {
  ConfigureSessionIcon,
  ContactUsIcon,
  DashboardIcon,
  DataViewIcon,
  ProductInfoIcon,
  ProfileIcon
} from "app/icons";
import { ComponentType } from "react";
import {
  configureSystem,
  contact,
  info,
  itemsManager,
  pageBuilderNew,
  profile,
  workbenchNew
} from "routes/routes";

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
    to: itemsManager
  },
  {
    IconComponent: DashboardIcon,
    label: "Pagebuilder",
    description: "This is where you visualise your queries.",
    to: pageBuilderNew
  },
  {
    IconComponent: DataViewIcon,
    label: "Workbench",
    description:
      "This is where you can query, filter and manipulate your data.",
    to: workbenchNew
  },
  {
    IconComponent: ConfigureSessionIcon,
    label: "Configure System",
    description:
      "This is where you configure things such as: operations and intervals.",
    to: configureSystem
  },
  {
    IconComponent: ProfileIcon,
    label: "Profile",
    description: "This is where you change your personal information.",
    to: profile
  },
  {
    IconComponent: ContactUsIcon,
    label: "Contact Us",
    description: "For any trouble or info contact us here.",
    to: contact
  },
  {
    IconComponent: ProductInfoIcon,
    label: "Product Info",
    description: "Product version and info.",
    to: info
  }
];

export default linksList;
