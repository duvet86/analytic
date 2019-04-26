import React, { FC } from "react";

import LoadingContainer from "loading/LoadingContainer";
import FolderContainer from "sidebar/FolderContainer";
import useDataApi from "lib/useDataApi";
import { IFolderChild, ItemTypeIds } from "sidebar/types";

import StarredIcon from "@material-ui/icons/Star";

const FolderTreeContainer: FC = () => {
  const { data, isLoading } = useDataApi<IFolderChild[]>(
    `api/useritems/myitems?tenant=${process.env.TENANT_ID}&itemTypeIds=${
      ItemTypeIds.SYSTEM_DATAVIEW
    }&itemTypeIds=${ItemTypeIds.USER_DATAVIEW}&itemTypeIds=${
      ItemTypeIds.PAGE_BUILDER
    }`,
    []
  );

  return (
    <LoadingContainer isLoading={isLoading}>
      <FolderContainer
        nested={1}
        label="Starred"
        childFolders={data}
        CutomFolderIcon={StarredIcon}
      />
    </LoadingContainer>
  );
};

export default FolderTreeContainer;
