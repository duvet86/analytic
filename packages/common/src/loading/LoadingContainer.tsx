import BackgroundLoading from "@trimble-common/loading/BackgroundLoading";
import Loading from "@trimble-common/loading/Loading";
import React, { FC, useEffect, useState } from "react";
import { usePrevious } from "lib/utilsHooks";

interface IProps {
  isLoading: boolean;
  delay?: number;
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

  const setDelay = (delayInput: number) => {
    return window.setTimeout(() => {
      setPastDelay(true);
    }, delayInput);
  };

  useEffect(() => {
    let clearTimeout: number | undefined;
    if (!isLoading && pastDelay) {
      setPastDelay(false);
    }
    if (!prevIsLoading && isLoading && !pastDelay) {
      clearTimeout = setDelay(delay || 200);
    }

    return () => window.clearTimeout(clearTimeout);
  }, []);

  return background ? (
    <BackgroundLoading
      isLoading={isLoading}
      pastDelay={pastDelay}
      children={children}
    />
  ) : (
    <Loading
      isLoading={isLoading}
      pastDelay={pastDelay}
      children={children}
      error={error}
    />
  );
};

export default LoadingContainer;
