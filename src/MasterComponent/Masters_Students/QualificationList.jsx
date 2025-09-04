import React from 'react';
import MasterTable from '../../utilits/Mastertable';
import { qualificationApi } from '../../services/Masterservices/qualificationApi';

const QualificationList = () => {
  return (
    <MasterTable
      api={qualificationApi}
      title="Qualification"
      entityName="qualification"
    />
  );
};

export default QualificationList;
