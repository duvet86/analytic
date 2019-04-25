import React, { FC, ChangeEvent } from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import PortalAppCard from "portal/PortalAppCard";
import { IPortalLink } from "portal/linksList";

interface IProps extends WithStyles<typeof styles> {
  visibleLinks: IPortalLink[];
  searchText: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const styles = createStyles({
  container: {
    padding: "0 25px 25px 25px"
  }
});

const Portal: FC<IProps> = ({
  classes,
  visibleLinks,
  searchText,
  handleChange
}) => (
  <Grid container className={classes.container} spacing={16}>
    <Grid item xs={12}>
      <TextField
        fullWidth
        margin="dense"
        label="Search"
        value={searchText}
        onChange={handleChange}
      />
    </Grid>
    {visibleLinks.map((link, i) => (
      <Grid item md={4} xs={12} key={i}>
        <PortalAppCard {...link} />
      </Grid>
    ))}
  </Grid>
);

export default withStyles(styles)(Portal);
