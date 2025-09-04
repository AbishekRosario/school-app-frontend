import React from 'react';
import MasterTable from '../../utilits/Mastertable';
import { cityApi } from '../../services/Masterservices/cityApi';

const CityList = () => {
  return (
    <MasterTable
      api={cityApi}
      title="Cite"
      entityName="Cite"
    />
  );
};

export default CityList;