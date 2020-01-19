import BaseLoading from "@mis-common/loading/BaseLoading";
import React, { SFC, Suspense } from "react";

const LoadAsync: SFC = ({ children }) => {
  return <Suspense fallback={<BaseLoading />}>{children}</Suspense>;
};

export default LoadAsync;
