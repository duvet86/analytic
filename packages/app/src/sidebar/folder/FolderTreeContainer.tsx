import React, { FC } from "react";

import { useDataApi, IFolderChild, LoadingContainer } from "@mis/common";

import FolderTree from "./FolderTree";

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
