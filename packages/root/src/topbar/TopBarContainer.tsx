import React, { Component } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import TopBar from "topbar/TopBar";

interface IOwnProps {
  handleDrawerOpen: () => void;
}

interface IState {
  anchorEl?: HTMLElement;
}

type Props = IOwnProps & RouteComponentProps;

class TopBarContainer extends Component<Props, IState> {
  public readonly state = {
    anchorEl: undefined
  };

  public render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <TopBar
        anchorEl={anchorEl}
        open={open}
        handleDrawerOpen={this.props.handleDrawerOpen}
        onMenuClickHandler={this.onMenuClickHandler}
        onMenuCloseHandler={this.onMenuCloseHandler}
        onWelcomePageClickHandler={this.onWelcomePageClickHandler}
        onProfileClickHandler={this.onProfileClickHandler}
        onLogoutClickHandler={this.onLogoutClickHandler}
      />
    );
  }

  private onMenuClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  private onMenuCloseHandler = () => this.setState({ anchorEl: undefined });

  private onWelcomePageClickHandler = () => {
    this.onMenuCloseHandler();
    this.props.history.push("/");
  };

  private onProfileClickHandler = () => {
    this.onMenuCloseHandler();
    this.props.history.push("/profile");
  };

  private onLogoutClickHandler = () => {
    this.onMenuCloseHandler();
  };
}

export default withRouter(TopBarContainer);
