import React, { FC } from "react";

import { IUserInfo } from "profile/types";
import { useDataApi } from "lib/useDataApi";
import LoadingContainer from "loading/LoadingContainer";
import Profile from "profile/Profile";

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
