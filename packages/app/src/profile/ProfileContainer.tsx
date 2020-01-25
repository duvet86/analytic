import React, { FC } from "react";

import { useDataApi, LoadingContainer } from "@mis/common";

import { IUserInfo } from "./types";
import Profile from "./Profile";

const ProfileContainer: FC = () => {
  const [{ isLoading, data }] = useDataApi<IUserInfo | undefined>(
    "api/platform/myprofile",
    undefined
  );

  return (
    <LoadingContainer isLoading={isLoading}>
      {data && <Profile userInfo={data} />}
    </LoadingContainer>
  );
};

export default ProfileContainer;
