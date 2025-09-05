import React from 'react';
import MasterTable from '../../utilits/Mastertable';
import { documentTypeApi } from '../../services/Masterservices/documentTypeApi';

const DocumentTypeList = () => {
  return (
    <MasterTable
      api={documentTypeApi}
      title="Document Type"
      entityName="documenttype"
    />
  );
};

export default DocumentTypeList;
