import React, { FC, FormEvent, ChangeEvent, MouseEvent, useState } from "react";
import { RouteComponentProps } from "react-router";

import { getTokenAsync } from "lib/authApi";
import { storeToken } from "lib/sessionStorageApi";
import LoadingContainer from "loading/LoadingContainer";
import Login from "login/Login";

const handleMouseDownPassword = (e: MouseEvent) => {
  e.preventDefault();
};

const LoginContainer: FC<RouteComponentProps> = ({ history }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isInvalidCredentials, setIsInvalidCredentials] = useState(false);
  const [error, setError] = useState();

  const handleChange = (prop: "username" | "password") => (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    if (prop === "username") {
      setUsername(event.target.value);
    } else if (prop === "password") {
      setPassword(event.target.value);
    } else {
      throw new Error("Invalid input.");
    }
  };

  const handleClickShowPasssword = () => {
    setShowPassword(prevState => !prevState);
  };

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const token = await getTokenAsync(username, password);
      storeToken(token);
      history.push("/");
    } catch (error) {
      if (error.status === 401) {
        setIsLoading(false);
        setIsInvalidCredentials(true);
      } else {
        setError(error);
      }
    }
  };

  return (
    <LoadingContainer isLoading={isLoading} error={error}>
      <Login
        username={username}
        password={password}
        showPassword={showPassword}
        isInvalidCredentials={isInvalidCredentials}
        submitHandler={submitHandler}
        handleChange={handleChange}
        handleMouseDownPassword={handleMouseDownPassword}
        handleClickShowPasssword={handleClickShowPasssword}
      />
    </LoadingContainer>
  );
};

export default LoginContainer;
