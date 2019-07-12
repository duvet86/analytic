import BackgroundLoading from "@trimble-common/loading/BackgroundLoading";
import Loading from "@trimble-common/loading/Loading";
import { usePrevious } from "lib/utilsHooks";
import React, { FC, useEffect, useState } from "react";

interface IProps {
  isLoading: boolean;
  delay?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
  background?: boolean;
}

const LoadingContainer: FC<IProps> = ({
  delay,
  error,
  isLoading,
  background,
  children
}) => {
  const [pastDelay, setPastDelay] = useState(false);
  const prevIsLoading = usePrevious(isLoading);

  useEffect(() => {
    function setDelay(delayInput: number) {
      return window.setTimeout(() => {
        setPastDelay(true);
      }, delayInput);
    }

    let clearTimeout: number | undefined;
    if (!isLoading && pastDelay) {
      setPastDelay(false);
    }
    if (!prevIsLoading && isLoading && !pastDelay) {
      clearTimeout = setDelay(delay || 200);
    }

    return () => window.clearTimeout(clearTimeout);
  }, [pastDelay, isLoading, delay, prevIsLoading]);

  return background ? (
    <BackgroundLoading isLoading={isLoading} pastDelay={pastDelay}>
      {children}
    </BackgroundLoading>
  ) : (
    <Loading isLoading={isLoading} pastDelay={pastDelay} error={error}>
      {children}
    </Loading>
  );
};

export default LoadingContainer;
