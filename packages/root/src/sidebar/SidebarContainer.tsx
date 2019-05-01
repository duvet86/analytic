import React, { FC, useState, ChangeEvent } from "react";

import Sidebar from "sidebar/Sidebar";

interface IProps {
  open: boolean;
}

type State = 0 | 1 | 2;

const SidebarContainer: FC<IProps> = ({ open }) => {
  const [selectedTab, setSelectedTab] = useState<State>(0);

  const handleChange = (_: ChangeEvent<{}>, value: State) => {
    setSelectedTab(value);
  };

  return (
    <Sidebar
      open={open}
      selectedTab={selectedTab}
      handleChange={handleChange}
    />
  );
};

export default SidebarContainer;
