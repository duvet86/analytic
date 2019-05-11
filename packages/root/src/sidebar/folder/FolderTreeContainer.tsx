import FolderTree from "sidebar/folder/FolderTree";
import React, { FC } from "react";
import { IFolderChild, LoadingContainer } from "@trimble/shared-components";
import { useDataApi } from "lib/useDataApi";

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
