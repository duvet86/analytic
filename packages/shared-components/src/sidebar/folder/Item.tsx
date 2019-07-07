import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React, { forwardRef, SFC } from "react";
import { DashboardIcon, DataViewIcon } from "app/icons";
import { ItemTypeIds } from "@trimble-shared-components/sidebar/types";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import { NavLink, NavLinkProps } from "react-router-dom";

interface IProps {
  itemTypeId: ItemTypeIds;
  itemId: string;
  label: string;
  nested: number;
}

const useStyles = makeStyles(({ typography }: Theme) => ({
  item: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  icon: {
    color: "#696969"
  },
  heading: {
    paddingLeft: 5,
    fontSize: typography.pxToRem(15),
    fontWeight: typography.fontWeightRegular
  }
}));

// The usage of React.forwardRef will no longer be required for react-router-dom v6.
// see https://github.com/ReactTraining/react-router/issues/6056
const workbenchLink = (itemTypeId: ItemTypeIds, itemId: string) => {
  const link =
    itemTypeId.toUpperCase() === ItemTypeIds.PAGE_BUILDER
      ? `/pagebuilder/${itemId}`
      : `/workbench/${itemId}`;

  return forwardRef<HTMLAnchorElement, ListItemProps>((props, ref) => (
    <NavLink innerRef={ref} to={link} {...props as NavLinkProps} />
  ));
};

const Item: SFC<IProps> = ({ itemTypeId, itemId, label, nested }) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <ListItem
      divider
      button
      component={workbenchLink(itemTypeId, itemId)}
      className={classes.item}
      style={{ paddingLeft: nested * theme.spacing(2) }}
    >
      {itemTypeId.toUpperCase() === ItemTypeIds.PAGE_BUILDER ? (
        <DashboardIcon className={classes.icon} />
      ) : (
        <DataViewIcon className={classes.icon} />
      )}
      <ListItemText
        primary={label}
        classes={{
          primary: classes.heading
        }}
      />
    </ListItem>
  );
};

export default Item;
