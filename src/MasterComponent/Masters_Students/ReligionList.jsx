import React from 'react';
import MasterTable from '../../utilits/Mastertable';
import { religionApi } from '../../services/Masterservices/religionApi';

const ReligionList = () => {
  return (
    <MasterTable
      api={religionApi}
      title="Religion"
      entityName="religion"
    />
  );
};

export default ReligionList;
