import Grid from "@material-ui/core/Grid";
import React, { FC } from "react";
import { IUserInfo } from "profile/types";
import { makeStyles } from "@material-ui/core/styles";

interface IProps {
  userInfo: IUserInfo;
}

const useStyles = makeStyles({
  container: {
    padding: 25
  }
});

const Profile: FC<IProps> = ({
  userInfo: {
    Profile: { UserName }
  }
}) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        {UserName}
      </Grid>
    </Grid>
  );
};

export default Profile;
