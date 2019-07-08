import React, { ComponentType, FC } from "react";
import Sidebar from "@trimble-common/sidebar/Sidebar";

interface IProps {
  open: boolean;
  SidebarBodyComponent: ComponentType;
}

const SidebarContainer: FC<IProps> = ({ open, SidebarBodyComponent }) => (
  <Sidebar open={open} SidebarBodyComponent={SidebarBodyComponent} />
);

export default SidebarContainer;
