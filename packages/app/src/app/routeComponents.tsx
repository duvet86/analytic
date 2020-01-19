import React, { ComponentType } from "react";
import { RouteComponentProps } from "react-router";
import {
  itemsManager,
  pageBuildeExisting,
  portal,
  profile,
  workbenchExisting
} from "routes/routes";

const WelcomePageAsync = React.lazy<ComponentType<RouteComponentProps>>(() =>
  import("portal/PortalContainer")
);
const ItemsManagerAsync = React.lazy<ComponentType<RouteComponentProps>>(() =>
  import("@mis/useritems")
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
    path: portal
  },
  {
    Component: ItemsManagerAsync,
    path: itemsManager
  },
  {
    Component: PagebuilderContainerAsync,
    path: pageBuildeExisting
  },
  {
    Component: WorkbenchContainerAsync,
    path: workbenchExisting
  },
  {
    Component: ProfileContainerAsync,
    path: profile
  }
];
