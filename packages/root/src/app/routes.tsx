import React from "react";

const WelcomePageAsync = React.lazy(() => import("portal/PortalContainer"));
const WorkbenchContainerAsync = React.lazy(() =>
  import("portal/PortalContainer")
);
const PagebuilderContainerAsync = React.lazy(() =>
  import("portal/PortalContainer")
);
const ProfileContainerAsync = React.lazy(() =>
  import("portal/PortalContainer")
);

const renderWelcomePageAsync = () => <WelcomePageAsync />;
const renderPagebuilderContainerAsync = () => <PagebuilderContainerAsync />;
const renderWorkbenchContainerAsync = () => <WorkbenchContainerAsync />;
const renderProfileContainerAsync = () => <ProfileContainerAsync />;

export const routeRenderers = [
  {
    key: 1,
    routeRenderer: renderWelcomePageAsync,
    path: "/"
  },
  {
    key: 2,
    routeRenderer: renderPagebuilderContainerAsync,
    path: "/pagebuilder/:id"
  },
  {
    key: 3,
    routeRenderer: renderWorkbenchContainerAsync,
    path: "/workbench/:id"
  },
  {
    key: 4,
    routeRenderer: renderProfileContainerAsync,
    path: "/profile"
  }
];
