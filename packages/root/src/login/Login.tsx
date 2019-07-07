import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import React, {
  ChangeEvent,
  FC,
  FormEvent,
  MouseEvent
  } from "react";
import trimbleLogo from "topbar/trimbleLogo.png";
import Typography from "@material-ui/core/Typography";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { makeStyles, Theme } from "@material-ui/core/styles";

interface IProps {
  isInvalidCredentials: boolean;
  submitHandler: (e: FormEvent) => void;
  username: string;
  password: string;
  showPassword: boolean;
  handleChange: (
    prop: "username" | "password"
  ) => (event: ChangeEvent<HTMLInputElement>) => void;
  handleMouseDownPassword: (e: MouseEvent) => void;
  handleClickShowPasssword: () => void;
}

const useStyles = makeStyles(({ spacing }: Theme) => ({
  container: {
    backgroundColor: "#eee",
    height: "100%"
  },
  loginContainer: {
    height: "70%"
  },
  title: {
    color: "#005f9e"
  },
  paper: {
    padding: spacing(3)
  },
  passwordControl: {
    marginRight: spacing(),
    marginBottom: spacing(3)
  },
  logoContainer: {
    textAlign: "center"
  },
  errorMessage: {
    marginTop: 10,
    color: "red"
  }
}));

const Login: FC<IProps> = ({
  isInvalidCredentials,
  submitHandler,
  showPassword,
  handleChange,
  handleMouseDownPassword,
  handleClickShowPasssword
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid
        className={classes.loginContainer}
        container
        alignItems="center"
        justify="center"
        spacing={0}
      >
        <Grid item md={3} xs={11}>
          <Paper className={classes.paper}>
            <div className={classes.logoContainer}>
              <img src={trimbleLogo} alt="trimbleLogo" />
            </div>
            <Typography className={classes.title} variant="h4" align="center">
              Analytics Tools
            </Typography>
            <form noValidate onSubmit={submitHandler}>
              <FormControl fullWidth>
                <InputLabel htmlFor="username">User Name</InputLabel>
                <Input
                  id="username"
                  onChange={handleChange("username")}
                  autoComplete="username"
                />
              </FormControl>
              <FormControl className={classes.passwordControl} fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  onChange={handleChange("password")}
                  autoComplete="current-password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPasssword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                fullWidth
              >
                Login
              </Button>
            </form>
            {isInvalidCredentials && (
              <Typography className={classes.errorMessage} variant="subtitle1">
                Invalid Username or Password
              </Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
