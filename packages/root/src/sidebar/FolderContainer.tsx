import React, { Component } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

import { IFolderChild } from "sidebar/types";
import Folder from "sidebar/Folder";

interface IOwnProps {
  label: string;
  childFolders: IFolderChild[];
  nested: number;
  initExpanded?: boolean;
  CutomFolderIcon?: React.ComponentType<SvgIconProps>;
  disabled?: boolean;
}

interface IState {
  expanded: boolean;
}

type Props = IOwnProps & RouteComponentProps;

class FolderContainer extends Component<Props, IState> {
  public readonly state = {
    expanded: this.props.initExpanded || false
  };

  public componentDidMount() {
    const { childFolders, location } = this.props;
    if (!childFolders || childFolders.length === 0) {
      return;
    }

    const match = childFolders.some(
      c =>
        c.ChildType === "I" &&
        (`/workbench/${c.ChildItemId}` === location.pathname ||
          `/pagebuilder/${c.ChildItemId}` === location.pathname)
    );

    if (match) {
      this.setState({ expanded: true });
    }
  }

  public render() {
    const {
      nested,
      location,
      label,
      childFolders,
      CutomFolderIcon,
      disabled
    } = this.props;
    const { expanded } = this.state;

    return (
      <Folder
        disabled={disabled}
        nested={nested}
        label={label}
        childFolders={childFolders}
        handleClick={this.handleClick}
        expanded={expanded}
        location={location}
        CutomFolderIcon={CutomFolderIcon}
      />
    );
  }

  private handleClick = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  };
}

export default withRouter(FolderContainer);
