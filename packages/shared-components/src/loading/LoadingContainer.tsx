import React, { FC, useState, useEffect } from "react";

import { usePrevious } from "lib/utilsHooks";
import Loading from "@trimble-shared-components/loading/Loading";
import BackgroundLoading from "@trimble-shared-components/loading/BackgroundLoading";

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

    return function cleanup() {
      window.clearTimeout(clearTimeout);
    };
  }, [prevIsLoading, isLoading, pastDelay]);

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
