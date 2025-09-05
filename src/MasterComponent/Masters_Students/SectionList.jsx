import React from 'react';
import MasterTable from '../../utilits/Mastertable';
import { sectionApi } from '../../services/Masterservices/sectionApi';

const SectionList = () => {
  return (
    <MasterTable
      api={sectionApi}
      title="Section"
      entityName="section"
    />
  );
};

export default SectionList;
