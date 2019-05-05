import React, { FC, useState, ChangeEvent } from "react";

import { useDataApi } from "lib/useDataApi";
import { IFolderChild, ItemTypeIds } from "sidebar/types";
import Sidebar from "sidebar/Sidebar";

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
  open: boolean;
}

type State = 0 | 1 | 2;

const SidebarContainer: FC<IProps> = ({ open }) => {
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
      case 2:
        setUrl(myItems);
        break;
      default:
        throw new Error();
    }
    setSelectedTab(value);
  };

  return (
    <Sidebar
      isLoading={isLoading}
      open={open}
      selectedTab={selectedTab}
      folderList={data}
      handleChange={handleChange}
    />
  );
};

export default SidebarContainer;
