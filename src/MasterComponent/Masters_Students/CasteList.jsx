import React from 'react';
import MasterTable from '../../utilits/Mastertable';
import { casteApi } from '../../services/Masterservices/casteApi';

const CasteList = () => {
  return (
    <MasterTable
      api={casteApi}
      title="Caste"
      entityName="caste"
    />
  );
};

export default CasteList;
