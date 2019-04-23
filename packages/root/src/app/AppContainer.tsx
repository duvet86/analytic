import React, { FC, useState } from "react";

import App from "app/App";

const AppContainer: FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleDrawerOpen = () => {
    setIsOpen(prevState => !prevState);
  };

  return <App isOpen={isOpen} handleDrawerOpen={handleDrawerOpen} />;
};

export default AppContainer;
