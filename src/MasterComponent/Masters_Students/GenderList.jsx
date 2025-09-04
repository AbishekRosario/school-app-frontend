import React from 'react';
import MasterTable from '../../utilits/Mastertable';
import { genderApi } from '../../services/Masterservices/genderApi';

const GenderList = () => {
  return (
    <MasterTable
      api={genderApi}
      title="Gender"
      entityName="gender"
    />
  );
};

export default GenderList;
