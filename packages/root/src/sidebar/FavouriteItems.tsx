import React, { Component } from "react";

import LoadingContainer from "loading/LoadingContainer";
import FolderContainer from "sidebar/FolderContainer";

import StarredIcon from "@material-ui/icons/Star";

class FolderTreeContainer extends Component {
  public render() {
    const { myItems, isLoading } = this.props;

    return (
      <LoadingContainer isLoading={isLoading}>
        <FolderContainer
          nested={1}
          label="Starred"
          childFolders={myItems}
          CutomFolderIcon={StarredIcon}
        />
      </LoadingContainer>
    );
  }
}

export default FolderTreeContainer;
