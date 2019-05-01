import React, { ChangeEvent, SFC } from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

import { tabs } from "sidebar/tabs";

interface IProps extends WithStyles<typeof styles> {
  selectedTab: number;
  handleChange: (event: ChangeEvent<{}>, value: 0 | 1 | 2) => void;
}

const styles = () =>
  createStyles({
    tabs: {
      width: 312
    },
    tabRoot: {
      minWidth: 0,
      minHeight: 36
    }
  });

const SidebarTabs: SFC<IProps> = ({ classes, selectedTab, handleChange }) => (
  <Tabs
    className={classes.tabs}
    value={selectedTab}
    onChange={handleChange}
    variant="fullWidth"
    indicatorColor="primary"
    textColor="primary"
  >
    {tabs.map(({ Icon }, i) => (
      <Tab
        key={i}
        icon={<Icon />}
        classes={{
          root: classes.tabRoot
        }}
      />
    ))}
    />
  </Tabs>
);

export default withStyles(styles)(SidebarTabs);
