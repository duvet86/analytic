import React, { FC, useState, ChangeEvent } from "react";
import { RouteComponentProps } from "react-router";

import Portal from "portal/Portal";
import linksList from "portal/linksList";

interface IProps extends RouteComponentProps {
  isOpen: boolean;
}

const PortalContainer: FC<IProps> = ({ isOpen }) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const visibleLinks = linksList.filter(({ label }) =>
    label.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Portal
      isOpen={isOpen}
      searchText={searchText}
      handleChange={handleChange}
      visibleLinks={visibleLinks}
    />
  );
};

export default PortalContainer;
