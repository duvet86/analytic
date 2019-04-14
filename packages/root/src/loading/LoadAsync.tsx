import React, { SFC, Suspense } from "react";

import BaseLoading from "loading/BaseLoading";

const LoadAsync: SFC = ({ children }) => {
  return <Suspense fallback={<BaseLoading />}>{children}</Suspense>;
};

export default LoadAsync;
