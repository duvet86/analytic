import React from "react";

const WelcomePageAsync = React.lazy(() => import("portal/PortalContainer"));
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
const renderPagebuilderContainerAsync = () => <PagebuilderContainerAsync />;
const renderWorkbenchContainerAsync = () => <WorkbenchContainerAsync />;
const renderProfileContainerAsync = () => <ProfileContainerAsync />;

export const routeRenderers = [
  {
    routeRenderer: renderWelcomePageAsync,
    path: "/"
  },
  {
    routeRenderer: renderWelcomePageAsync,
    path: "/itemsmanager"
  },
  {
    routeRenderer: renderPagebuilderContainerAsync,
    path: "/pagebuilder/:id"
  },
  {
    routeRenderer: renderWorkbenchContainerAsync,
    path: "/workbench/:id"
  },
  {
    routeRenderer: renderProfileContainerAsync,
    path: "/profile"
  }
];
