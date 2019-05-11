import Grid from "@material-ui/core/Grid";
import React, { FC } from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import { IUserInfo } from "profile/types";

interface IProps extends WithStyles<typeof styles> {
  userInfo: IUserInfo;
}

const styles = createStyles({
  container: {
    padding: 25
  }
});

const Profile: FC<IProps> = ({
  classes,
  userInfo: {
    Profile: { UserName }
  }
}) => (
  <Grid container className={classes.container}>
    <Grid item xs={12}>
      {UserName}
    </Grid>
  </Grid>
);

export default withStyles(styles)(Profile);
