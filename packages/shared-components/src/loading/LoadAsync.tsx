import React, { SFC, Suspense } from "react";

import BaseLoading from "@trimble-shared-components/loading/BaseLoading";

const LoadAsync: SFC = ({ children }) => {
  return <Suspense fallback={<BaseLoading />}>{children}</Suspense>;
};

export default LoadAsync;
