import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, Theme, useTheme } from "@material-ui/core/styles";
import { ItemTypeIds } from "@mis-common/folder/types";
import { DashboardIcon, DataViewIcon } from "app/icons";
import React, { forwardRef, Ref, SFC } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

interface IProps {
  itemTypeId: ItemTypeIds;
  itemId: string;
  label: string;
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

const createItemLink = (link: string) =>
  function ItemLink(props: ListItemProps, ref: Ref<HTMLAnchorElement>) {
    return <NavLink innerRef={ref} to={link} {...(props as NavLinkProps)} />;
  };

// The usage of React.forwardRef will no longer be required for react-router-dom v6.
// see https://github.com/ReactTraining/react-router/issues/6056
const workbenchLink = (itemTypeId: ItemTypeIds, itemId: string) => {
  const link =
    itemTypeId.toUpperCase() === ItemTypeIds.PAGE_BUILDER
      ? `/pagebuilder/${itemId}`
      : `/workbench/${itemId}`;

  return forwardRef<HTMLAnchorElement, ListItemProps>(createItemLink(link));
};

const Item: SFC<IProps> = ({ itemTypeId, itemId, label, nested }) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <ListItem
      divider
      button
      disableGutters
      component={workbenchLink(itemTypeId, itemId)}
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
