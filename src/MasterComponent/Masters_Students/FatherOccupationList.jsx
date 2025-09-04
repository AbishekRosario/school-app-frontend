import React from 'react';
import MasterTable from '../../utilits/Mastertable';
import { fatherOccupationApi } from '../../services/Masterservices/fatherOccupationApi';

const FatherOccupationList = () => {
  return (
    <MasterTable
      api={fatherOccupationApi}
      title="Father Occupation"
      entityName="fatheroccupation"
    />
  );
};

export default FatherOccupationList;
