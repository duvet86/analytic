import linksList from "portal/linksList";
import Portal from "portal/Portal";
import React, { ChangeEvent, FC, useState } from "react";
import { RouteComponentProps } from "react-router";

const PortalContainer: FC<RouteComponentProps> = () => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const visibleLinks = linksList.filter(({ label }) =>
    label.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Portal
      searchText={searchText}
      handleChange={handleChange}
      visibleLinks={visibleLinks}
    />
  );
};

export default PortalContainer;
