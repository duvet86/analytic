import React, { Component } from "react";
import { RouteComponentProps } from "react-router";

import { getTokenAsync } from "lib/authApi";
import { storeToken } from "lib/sessionStorageApi";
import LoadingContainer from "loading/LoadingContainer";
import Login from "login/Login";

interface IState {
  isLoading: boolean;
  isInvalidCredentials: boolean;
  error: any;
}

class LoginContainer extends Component<RouteComponentProps, IState> {
  public state: IState = {
    isLoading: false,
    isInvalidCredentials: false,
    error: undefined
  };

  public render() {
    const { isLoading, isInvalidCredentials, error } = this.state;
    return (
      <LoadingContainer isLoading={isLoading} error={error}>
        <Login
          {...this.props}
          isInvalidCredentials={isInvalidCredentials}
          submitHandler={this.submitHandler}
        />
      </LoadingContainer>
    );
  }

  private submitHandler = async (username: string, password: string) => {
    this.setState({
      isLoading: true
    });
    try {
      const token = await getTokenAsync(username, password);
      storeToken(token);
      this.props.history.push("/");
    } catch (error) {
      if (error.status === 401) {
        this.setState({
          isLoading: false,
          isInvalidCredentials: true
        });
      } else {
        this.setState({
          error
        });
      }
    }
  };
}

export default LoginContainer;
