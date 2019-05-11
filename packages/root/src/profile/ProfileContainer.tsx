import Profile from "profile/Profile";
import React, { FC } from "react";
import { IUserInfo } from "profile/types";
import { LoadingContainer } from "@trimble/shared-components";
import { useDataApi } from "lib/useDataApi";

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
