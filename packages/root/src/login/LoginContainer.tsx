import React, { Component, FormEvent, ChangeEvent, MouseEvent } from "react";
import { RouteComponentProps } from "react-router";

import { getTokenAsync } from "lib/authApi";
import { storeToken } from "lib/sessionStorageApi";
import LoadingContainer from "loading/LoadingContainer";
import Login from "login/Login";

interface IState {
  isLoading: boolean;
  isInvalidCredentials: boolean;
  username: string;
  password: string;
  showPassword: boolean;
  error: any;
}

class LoginContainer extends Component<RouteComponentProps, IState> {
  public state: IState = {
    isLoading: false,
    isInvalidCredentials: false,
    username: "",
    password: "",
    showPassword: false,
    error: undefined
  };

  public render() {
    const {
      isLoading,
      username,
      password,
      showPassword,
      isInvalidCredentials,
      error
    } = this.state;

    return (
      <LoadingContainer isLoading={isLoading} error={error}>
        <Login
          username={username}
          password={password}
          showPassword={showPassword}
          isInvalidCredentials={isInvalidCredentials}
          submitHandler={this.submitHandler}
          handleChange={this.handleChange}
          handleMouseDownPassword={this.handleMouseDownPassword}
          handleClickShowPasssword={this.handleClickShowPasssword}
        />
      </LoadingContainer>
    );
  }

  private handleChange = (prop: string) => (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    // TODO: fix me: typescript issue.
    this.setState({ [prop]: event.target.value } as any);
  };

  private handleMouseDownPassword = (e: MouseEvent) => {
    e.preventDefault();
  };

  private handleClickShowPasssword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  private submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    this.setState({
      isLoading: true
    });
    try {
      const { username, password } = this.state;
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
