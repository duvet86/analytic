import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { SvgIconProps } from "@material-ui/core/SvgIcon";

interface IProps extends WithStyles<typeof styles> {
  IconComponent: React.ComponentType<SvgIconProps>;
  label: string;
  description: string;
  to: string;
}

const styles = createStyles({
  iconColor: {
    color: "initial"
  }
});

const PortalAppCard: FC<IProps> = ({
  classes,
  IconComponent,
  label,
  description,
  to
}) => (
  <NavLink to={to}>
    <Card>
      <CardContent>
        <IconComponent className={classes.iconColor} />
        <Typography variant="h5" component="h2">
          {label}
        </Typography>
        <Typography component="p">{description}</Typography>
      </CardContent>
    </Card>
  </NavLink>
);

export default withStyles(styles)(PortalAppCard);
