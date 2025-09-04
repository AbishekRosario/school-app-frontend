import React from 'react';
import MasterTable from '../../utilits/Mastertable';
import { bloodGroupApi } from '../../services/Masterservices/bloodGroupApi';

const BloodGroupList = () => {
  return (
    <MasterTable
      api={bloodGroupApi}
      title="Blood Group"
      entityName="bloodgroup"
    />
  );
};

export default BloodGroupList;
