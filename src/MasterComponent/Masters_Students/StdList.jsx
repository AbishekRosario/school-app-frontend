import React from 'react';
import MasterTable from '../../utilits/Mastertable';
import { stdMasterApi } from '../../services/Masterservices/stdMasterApi';

const StdList = () => {
  return (
    <MasterTable
      api={stdMasterApi}
      title="Student Master"
      entityName="stdmaster"
    />
  );
};

export default StdList;
