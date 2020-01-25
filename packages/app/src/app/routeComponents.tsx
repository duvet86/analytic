import React, { ComponentType } from "react";
import { RouteComponentProps } from "react-router";

import {
  itemsManagerRoutePath,
  pageBuildeExistingRoutePath,
  portalRoutePath,
  profileRoutePath,
  workbenchExistingRoutePath
} from "@mis/common";

const WelcomePageAsync = React.lazy<ComponentType<RouteComponentProps>>(() =>
  import("../portal/PortalContainer")
);
const ItemsManagerAsync = React.lazy<ComponentType<RouteComponentProps>>(() =>
  import("@mis/useritems")
);
const WorkbenchContainerAsync = React.lazy(() =>
  import("../portal/PortalContainer")
);
const PagebuilderContainerAsync = React.lazy(() =>
  import("../portal/PortalContainer")
);
const ProfileContainerAsync = React.lazy(() =>
  import("../profile/ProfileContainer")
);

export const routeComponents = [
  {
    Component: WelcomePageAsync,
    path: portalRoutePath
  },
  {
    Component: ItemsManagerAsync,
    path: itemsManagerRoutePath
  },
  {
    Component: PagebuilderContainerAsync,
    path: pageBuildeExistingRoutePath
  },
  {
    Component: WorkbenchContainerAsync,
    path: workbenchExistingRoutePath
  },
  {
    Component: ProfileContainerAsync,
    path: profileRoutePath
  }
];
