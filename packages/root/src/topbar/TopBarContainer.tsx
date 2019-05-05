import React, { FC, useState } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import { clearToken } from "lib/sessionStorageApi";
import TopBar from "topbar/TopBar";

interface IOwnProps {
  handleDrawerOpen: () => void;
}

type Props = IOwnProps & RouteComponentProps;

const TopBarContainer: FC<Props> = ({ history, handleDrawerOpen }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | undefined>();

  const open = Boolean(anchorEl);

  const onMenuClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onMenuCloseHandler = () => setAnchorEl(undefined);

  const onWelcomePageClickHandler = () => {
    onMenuCloseHandler();
    history.push("/");
  };

  const onProfileClickHandler = () => {
    onMenuCloseHandler();
    history.push("/profile");
  };

  const onLogoutClickHandler = () => {
    onMenuCloseHandler();
    clearToken();
    history.push("/login");
  };

  return (
    <TopBar
      anchorEl={anchorEl}
      open={open}
      handleDrawerOpen={handleDrawerOpen}
      onMenuClickHandler={onMenuClickHandler}
      onMenuCloseHandler={onMenuCloseHandler}
      onWelcomePageClickHandler={onWelcomePageClickHandler}
      onProfileClickHandler={onProfileClickHandler}
      onLogoutClickHandler={onLogoutClickHandler}
    />
  );
};

export default withRouter(TopBarContainer);
