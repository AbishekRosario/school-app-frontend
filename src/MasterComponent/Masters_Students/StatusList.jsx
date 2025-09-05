import React from 'react';
import MasterTable from '../../utilits/Mastertable';
import { statusApi } from '../../services/Masterservices/statusApi';

const StatusList = () => {
  return (
    <MasterTable
      api={statusApi}
      title="Status"
      entityName="status"
    />
  );
};

export default StatusList;
