import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import React, { FC } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

interface IProps {
  IconComponent: React.ComponentType<SvgIconProps>;
  label: string;
  description: string;
  to: string;
}

const useStyles = makeStyles({
  iconColor: {
    color: "initial"
  }
});

const PortalAppCard: FC<IProps> = ({
  IconComponent,
  label,
  description,
  to
}) => {
  const classes = useStyles();

  return (
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
};

export default PortalAppCard;
