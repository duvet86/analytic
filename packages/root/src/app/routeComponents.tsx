import React, { ComponentType } from "react";
import { RouteComponentProps } from "react-router";
import {
  itemsManager,
  pageBuildeExisting,
  portal,
  profile,
  workbenchExisting,
} from "routes/routes";

interface IProps extends RouteComponentProps {
  isOpen: boolean;
}

const WelcomePageAsync = React.lazy<ComponentType<IProps>>(() =>
  import("portal/PortalContainer")
);
const ItemsManagerAsync = React.lazy<ComponentType<IProps>>(() =>
  import("@trimble/items-manager")
);
const WorkbenchContainerAsync = React.lazy(() =>
  import("portal/PortalContainer")
);
const PagebuilderContainerAsync = React.lazy(() =>
  import("portal/PortalContainer")
);
const ProfileContainerAsync = React.lazy(() =>
  import("profile/ProfileContainer")
);

export const routeComponents = [
  {
    Component: WelcomePageAsync,
    path: portal,
  },
  {
    Component: ItemsManagerAsync,
    path: itemsManager,
  },
  {
    Component: PagebuilderContainerAsync,
    path: pageBuildeExisting,
  },
  {
    Component: WorkbenchContainerAsync,
    path: workbenchExisting,
  },
  {
    Component: ProfileContainerAsync,
    path: profile,
  },
];
