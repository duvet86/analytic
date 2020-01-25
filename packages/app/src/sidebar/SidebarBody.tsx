import React, { ChangeEvent, FC } from "react";

import { LoadingContainer, IFolderChild } from "@mis/common";

import SidebarFolderTree from "./SidebarFolderTree";
import SidebarTabs from "./SidebarTabs";

interface IProps {
  isLoading: boolean;
  selectedTab: 0 | 1;
  folderList: IFolderChild[];
  handleChange: (_: ChangeEvent<{}>, value: 0 | 1) => void;
}

const SidebarBody: FC<IProps> = ({
  isLoading,
  selectedTab,
  folderList,
  handleChange
}) => (
  <>
    <SidebarTabs selectedTab={selectedTab} handleChange={handleChange} />
    <LoadingContainer isLoading={isLoading}>
      <SidebarFolderTree folderList={folderList} />
    </LoadingContainer>
  </>
);

export default SidebarBody;
