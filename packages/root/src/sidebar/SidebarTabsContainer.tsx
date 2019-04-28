import React, { FC, useState, ChangeEvent } from "react";

import { tabs } from "sidebar/tabs";
import SidebarTabs from "sidebar/SidebarTabs";

type State = 0 | 1 | 2;

const SidebarTabsContainer: FC = () => {
  const [selectedTab, setSelectedTab] = useState<State>(0);

  const handleChange = (_: ChangeEvent<{}>, value: State) => {
    setSelectedTab(value);
  };

  return (
    <SidebarTabs
      tabs={tabs}
      selectedTab={selectedTab}
      handleChange={handleChange}
    />
  );
};

export default SidebarTabsContainer;
