import React, { FC, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import {
  clearToken,
  loginRoutePath,
  portalRoutePath,
  profileRoutePath
} from "@mis/common";

import TopBar from "./TopBar";

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
    history.push(portalRoutePath);
  };

  const onProfileClickHandler = () => {
    onMenuCloseHandler();
    history.push(profileRoutePath);
  };

  const onLogoutClickHandler = () => {
    onMenuCloseHandler();
    clearToken();
    history.push(loginRoutePath);
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
