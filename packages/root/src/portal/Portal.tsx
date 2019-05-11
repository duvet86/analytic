import Grid from "@material-ui/core/Grid";
import PortalAppCard from "portal/PortalAppCard";
import React, { ChangeEvent, FC } from "react";
import SidebarBodyContainer from "sidebar/SidebarBodyContainer";
import TextField from "@material-ui/core/TextField";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import { IPortalLink } from "portal/linksList";
import { SidebarContainer } from "@trimble/shared-components";

interface IProps extends WithStyles<typeof styles> {
  isOpen: boolean;
  visibleLinks: IPortalLink[];
  searchText: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const styles = createStyles({
  container: {
    padding: "0 25px 25px 25px"
  },
  bodyContainer: {
    display: "flex",
    height: "100%"
  }
});

const Portal: FC<IProps> = ({
  classes,
  isOpen,
  visibleLinks,
  searchText,
  handleChange
}) => (
  <div className={classes.bodyContainer}>
    <SidebarContainer
      open={isOpen}
      SidebarBodyComponent={SidebarBodyContainer}
    />
    <div>
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
    </div>
  </div>
);

export default withStyles(styles)(Portal);
