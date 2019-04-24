import React, { FC, useState, ChangeEvent } from "react";

import Portal from "portal/Portal";
import linksList from "portal/linksList";

const PortalContainer: FC = () => {
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
