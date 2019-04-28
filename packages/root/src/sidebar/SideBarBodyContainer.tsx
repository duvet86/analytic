import React, { SFC } from "react";

import FolderTreeContainer from "sidebar/FolderTreeContainer";
import SideBarBody from "sidebar/SideBarBody";

interface IOwnProps {
  location: Location;
}

type Props = ReturnType<typeof mapStateToProps> & IOwnProps;

const SideBarBodyContainer: SFC<Props> = ({ selectedTab, ...props }) => {
  let component: JSX.Element;
  switch (selectedTab) {
    case 1:
      component = <Filters />;
      break;
    case 2:
      component = <OperatorsListContainer {...props} />;
      break;
    default:
      component = <FolderTreeContainer {...props} />;
      break;
  }
  const renderer = () => component;

  return <SideBarBody tabRenderer={renderer} />;
};

const mapStateToProps = ({ navigationTabs: { selectedTab } }: RootState) => ({
  selectedTab
});

export default connect(mapStateToProps)(SideBarBodyContainer);
