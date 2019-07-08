import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React, { SFC } from "react";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";

interface IProps {
  nested: number;
}

const useStyles = makeStyles(({ typography }: Theme) => ({
  icon: {
    color: "#696969"
  },
  heading: {
    paddingLeft: 5,
    fontSize: typography.pxToRem(15),
    fontWeight: typography.fontWeightRegular
  }
}));

const EmptyFolder: SFC<IProps> = ({ nested }) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <ListItem
      divider
      button
      disableGutters
      disabled
      style={{ paddingLeft: nested * theme.spacing(2) }}
    >
      <ListItemText
        primary="Empty Folder"
        classes={{
          primary: classes.heading
        }}
      />
    </ListItem>
  );
};

export default EmptyFolder;
