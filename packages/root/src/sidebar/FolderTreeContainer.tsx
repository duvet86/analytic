import React, { FC } from "react";

import LoadingContainer from "loading/LoadingContainer";
import FolderTree from "sidebar/FolderTree";
import { usePromise } from "lib/useDataApi";
import { getWithJwtAsync } from "lib/http";
import { IFolderChild, ItemTypeIds } from "sidebar/types";

const allItemsPromise = Promise.all([
  getWithJwtAsync<IFolderChild[]>(
    `api/useritems/myitems?tenant=${process.env.TENANT_ID}&itemTypeIds=${
      ItemTypeIds.SYSTEM_DATAVIEW
    }&itemTypeIds=${ItemTypeIds.USER_DATAVIEW}&itemTypeIds=${
      ItemTypeIds.PAGE_BUILDER
    }`
  ),
  getWithJwtAsync<IFolderChild[]>(
    `api/useritems/sharedwithme?tenant=${process.env.TENANT_ID}&itemTypeIds=${
      ItemTypeIds.USER_DATAVIEW
    }
    &itemTypeIds=${ItemTypeIds.SYSTEM_DATAVIEW}&itemTypeIds=${
      ItemTypeIds.PAGE_BUILDER
    }`
  )
]).then(arrayResponse => ({
  myItems: arrayResponse[0],
  sharedWithMe: arrayResponse[1]
}));

const FolderTreeContainer: FC = () => {
  const {
    isLoading,
    data: { myItems, sharedWithMe }
  } = usePromise(allItemsPromise, {
    myItems: [],
    sharedWithMe: []
  });

  return (
    <LoadingContainer isLoading={isLoading}>
      <FolderTree myItems={myItems} sharedWithMe={sharedWithMe} />
    </LoadingContainer>
  );
};

export default FolderTreeContainer;
