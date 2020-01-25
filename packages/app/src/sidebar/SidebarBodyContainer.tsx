import React, { ChangeEvent, FC, useState } from "react";

import { useDataApi, IFolderChild, ItemTypeIds } from "@mis/common";

import SidebarBody from "./SidebarBody";

const myItems = `api/useritems/myitems?tenant=${process.env.TENANT_ID}&itemTypeIds=${ItemTypeIds.SYSTEM_DATAVIEW}&itemTypeIds=${ItemTypeIds.USER_DATAVIEW}&itemTypeIds=${ItemTypeIds.PAGE_BUILDER}`;
const sharedWithMe = `api/useritems/sharedwithme?tenant=${process.env.TENANT_ID}&itemTypeIds=${ItemTypeIds.SYSTEM_DATAVIEW}&itemTypeIds=${ItemTypeIds.USER_DATAVIEW}&itemTypeIds=${ItemTypeIds.PAGE_BUILDER}`;

type State = 0 | 1;

const SidebarBodyContainer: FC = () => {
  const [{ isLoading, data }, setUrl] = useDataApi<IFolderChild[]>(myItems, []);
  const [selectedTab, setSelectedTab] = useState<State>(0);

  const handleChange = (_: ChangeEvent<{}>, value: State) => {
    switch (value) {
      case 0:
        setUrl(myItems);
        break;
      case 1:
        setUrl(sharedWithMe);
        break;
      default:
        throw new Error();
    }
    setSelectedTab(value);
  };

  return (
    <SidebarBody
      isLoading={isLoading}
      selectedTab={selectedTab}
      folderList={data}
      handleChange={handleChange}
    />
  );
};

export default SidebarBodyContainer;
