import React from 'react';
import MasterTable from '../../utilits/Mastertable';
import { motherOccupationApi } from '../../services/Masterservices/motherOccupationApi';

const MotherOccupationList = () => {
  return (
    <MasterTable
      api={motherOccupationApi}
      title="Mother Occupation"
      entityName="motheroccupation"
    />
  );
};

export default MotherOccupationList;
