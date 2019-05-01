import React, { FC } from "react";

import LoadingContainer from "loading/LoadingContainer";
import FolderTree from "sidebar/folder/FolderTree";

import { useDataApi } from "lib/useDataApi";
import { IFolderChild } from "sidebar/types";

interface IProps {
  url: string;
}

const FolderTreeContainer: FC<IProps> = ({ url }) => {
  const [{ isLoading, data }] = useDataApi<IFolderChild[]>(url, []);

  return (
    <LoadingContainer isLoading={isLoading}>
      <FolderTree folderList={data} />
    </LoadingContainer>
  );
};

export default FolderTreeContainer;
