import React, { ChangeEvent, FC, useState } from "react";
import { RouteComponentProps } from "react-router";

import linksList from "./linksList";
import Portal from "./Portal";

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
