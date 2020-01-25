import React, { ChangeEvent, FC } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import { SidebarContainer } from "@mis/common";

import SidebarBodyContainer from "../sidebar/SidebarBodyContainer";
import { IPortalLink } from "./linksList";
import PortalAppCard from "./PortalAppCard";

interface IProps {
  visibleLinks: IPortalLink[];
  searchText: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const useStyles = makeStyles({
  container: {
    padding: "0 25px 25px 25px"
  },
  bodyContainer: {
    display: "flex",
    height: "100%"
  }
});

const Portal: FC<IProps> = ({ visibleLinks, searchText, handleChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.bodyContainer}>
      <SidebarContainer
        open={true}
        SidebarBodyComponent={SidebarBodyContainer}
      />
      <div>
        <Grid container className={classes.container} spacing={6}>
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
};

export default Portal;
