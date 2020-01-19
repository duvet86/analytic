import BaseLoading from "@mis-common/loading/BaseLoading";
import React, { FC, Suspense } from "react";

const LoadAsync: FC = ({ children }) => {
  return <Suspense fallback={<BaseLoading />}>{children}</Suspense>;
};

export default LoadAsync;
