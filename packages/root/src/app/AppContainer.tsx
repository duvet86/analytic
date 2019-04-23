import React, { Component } from "react";
import { RouteComponentProps } from "react-router";

import App from "app/App";

interface ILocalState {
  open: boolean;
}

class AppContainer extends Component<RouteComponentProps, ILocalState> {
  public readonly state = {
    open: true
  };

  public render() {
    return (
      <App open={this.state.open} handleDrawerOpen={this.handleDrawerOpen} />
    );
  }

  private handleDrawerOpen = () => {
    this.setState((prevState: { open: boolean }) => ({
      open: !prevState.open
    }));
  };
}

export default AppContainer;
