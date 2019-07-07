import LinearProgress from "@material-ui/core/LinearProgress";
import React, { SFC } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  laodingContainer: {
    margin: "16px 28px 16px 28px"
  },
  label: {
    textAlign: "center"
  }
});

const BaseLoading: SFC = () => {
  const classes = useStyles();

  return (
    <div className={classes.laodingContainer}>
      <Typography className={classes.label} variant="h6">
        Loading...
      </Typography>
      <div>
        <LinearProgress variant="query" />
      </div>
    </div>
  );
};

export default BaseLoading;
