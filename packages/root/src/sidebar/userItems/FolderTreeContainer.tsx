import { Location } from "history";
import React, { Component } from "react";

import LoadingContainer from "loading/LoadingContainer";
import FolderTree from "sidebar/userItems/FolderTree";

interface IOwnProps {
  location: Location;
}

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  IOwnProps;

class FolderTreeContainer extends Component<Props> {
  public componentDidMount() {
    this.props.dispatchLoadUserItems();
  }

  public render() {
    const { myItems, sharedWithMe, location, isLoading } = this.props;

    return (
      <LoadingContainer isLoading={isLoading}>
        <FolderTree
          myItems={myItems}
          sharedWithMe={sharedWithMe}
          location={location}
        />
      </LoadingContainer>
    );
  }
}

const mapStateToProps = ({
  userItems: { isLoading, myItems, sharedWithMe }
}: RootState) => ({
  isLoading,
  myItems,
  sharedWithMe
});

const mapDispatchToProps = (dispatch: Dispatch<UserItemsActions>) => ({
  dispatchLoadUserItems: () => {
    dispatch(userItemsRequest());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FolderTreeContainer);
