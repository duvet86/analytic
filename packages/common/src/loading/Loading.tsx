import BaseLoading from "@trimble-common/loading/BaseLoading";
import React, { SFC } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

interface IProps {
  error: any;
  isLoading: boolean;
  pastDelay: boolean;
  children: any;
}

const useStyles = makeStyles({
  container: {
    alignItems: "center",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    width: "100%"
  }
});

const Loading: SFC<IProps> = ({ error, isLoading, pastDelay, children }) => {
  const classes = useStyles();

  if (error != null) {
    // When the loader has errored.
    return (
      <div className={classes.container}>
        <Typography variant="h5">{JSON.stringify(error)}</Typography>
      </div>
    );
  }
  if (isLoading) {
    if (pastDelay) {
      // When the loader has taken longer than the delay show a spinner.
      return (
        <div className={classes.container}>
          <BaseLoading />
        </div>
      );
    } else {
      return null;
    }
  }

  // When the loader has finished.
  return children;
};

export default Loading;
