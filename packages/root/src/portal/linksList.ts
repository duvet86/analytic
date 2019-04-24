import { ComponentType } from "react";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import {
  DashboardIcon,
  DataViewIcon,
  ConfigureSessionIcon,
  ProfileIcon,
  ContactUsIcon,
  ProductInfoIcon
} from "app/icons";

export interface IPortalLink {
  id: number;
  IconComponent: ComponentType<SvgIconProps>;
  label: string;
  description: string;
  to: string;
}

const linksList = [
  {
    id: 1,
    IconComponent: DashboardIcon,
    label: "Pagebuilder",
    description: "This is where you visualise your queries.",
    to: "/pagebuilder/new"
  },
  {
    id: 2,
    IconComponent: DataViewIcon,
    label: "Workbench",
    description:
      "This is where you can query, filter and manipulate your data.",
    to: "/workbench/new"
  },
  {
    id: 3,
    IconComponent: ConfigureSessionIcon,
    label: "Configure Session",
    description: "This is where you tune your workbench.",
    to: "/configure"
  },
  {
    id: 4,
    IconComponent: ProfileIcon,
    label: "Profile",
    description: "This is where you change your personal information.",
    to: "/profile"
  },
  {
    id: 5,
    IconComponent: ContactUsIcon,
    label: "Contact Us",
    description: "For any trouble or info contact us here.",
    to: "/contact"
  },
  {
    id: 6,
    IconComponent: ProductInfoIcon,
    label: "Product Info",
    description: "Product version and info.",
    to: "/info"
  }
];

export default linksList;
