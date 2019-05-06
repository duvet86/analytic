import React from "react";
import {
  portal,
  itemsManager,
  pageBuildeExisting,
  workbenchExisting,
  profile
} from "routes/routes";

const WelcomePageAsync = React.lazy(() => import("portal/PortalContainer"));
const ItemsManagerAsync = React.lazy(() => import("@trimble/items-manager"));
const WorkbenchContainerAsync = React.lazy(() =>
  import("portal/PortalContainer")
);
const PagebuilderContainerAsync = React.lazy(() =>
  import("portal/PortalContainer")
);
const ProfileContainerAsync = React.lazy(() =>
  import("profile/ProfileContainer")
);

const renderWelcomePageAsync = () => <WelcomePageAsync />;
const renderItemsManagerAsync = () => <ItemsManagerAsync />;
const renderPagebuilderContainerAsync = () => <PagebuilderContainerAsync />;
const renderWorkbenchContainerAsync = () => <WorkbenchContainerAsync />;
const renderProfileContainerAsync = () => <ProfileContainerAsync />;

export const routeComponents = [
  {
    routeRenderer: renderWelcomePageAsync,
    path: portal
  },
  {
    routeRenderer: renderItemsManagerAsync,
    path: itemsManager
  },
  {
    routeRenderer: renderPagebuilderContainerAsync,
    path: pageBuildeExisting
  },
  {
    routeRenderer: renderWorkbenchContainerAsync,
    path: workbenchExisting
  },
  {
    routeRenderer: renderProfileContainerAsync,
    path: profile
  }
];
