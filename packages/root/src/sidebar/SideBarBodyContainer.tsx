import React, { FC } from "react";
import { useDataApi } from "lib/useDataApi";

import LoadingContainer from "loading/LoadingContainer";
import SidebarBody from "sidebar/SidebarBody";
import FolderTree from "sidebar/folder/FolderTree";
import { IFolderChild, ItemTypeIds } from "sidebar/types";

const myItems = `api/useritems/myitems?tenant=${
  process.env.TENANT_ID
}&itemTypeIds=${ItemTypeIds.SYSTEM_DATAVIEW}&itemTypeIds=${
  ItemTypeIds.USER_DATAVIEW
}&itemTypeIds=${ItemTypeIds.PAGE_BUILDER}`;

const sharedWithMe = `api/useritems/sharedwithme?tenant=${
  process.env.TENANT_ID
}&itemTypeIds=${ItemTypeIds.SYSTEM_DATAVIEW}&itemTypeIds=${
  ItemTypeIds.USER_DATAVIEW
}&itemTypeIds=${ItemTypeIds.PAGE_BUILDER}`;

interface IProps {
  selectedTab: 0 | 1 | 2;
}

const SidebarBodyContainer: FC<IProps> = ({ selectedTab }) => {
  const [{ isLoading, data }, setUrl] = useDataApi<IFolderChild[]>(myItems, []);

  switch (selectedTab) {
    case 0:
      setUrl(myItems);
      break;
    case 1:
      setUrl(sharedWithMe);
      break;
    case 2:
      setUrl(myItems);
      break;
    default:
      throw new Error();
  }
  const renderer = () => <FolderTree folderList={data} />;

  return (
    <LoadingContainer isLoading={isLoading}>
      <SidebarBody tabRenderer={renderer} />
    </LoadingContainer>
  );
};

export default SidebarBodyContainer;
