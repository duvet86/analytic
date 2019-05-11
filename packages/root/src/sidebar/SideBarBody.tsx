import React, { ChangeEvent, FC } from "react";
import SidebarFolderTree from "sidebar/SidebarFolderTree";
import SidebarTabs from "sidebar/SidebarTabs";
import { IFolderChild } from "@trimble/shared-components";
import { LoadingContainer } from "@trimble/shared-components";

interface IProps {
  isLoading: boolean;
  selectedTab: 0 | 1 | 2;
  folderList: IFolderChild[];
  handleChange: (_: ChangeEvent<{}>, value: 0 | 1 | 2) => void;
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
