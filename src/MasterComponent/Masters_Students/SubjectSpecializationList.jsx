import React from 'react';
import MasterTable from '../../utilits/Mastertable';
import { subjectSpecializationApi } from '../../services/Masterservices/subjectSpecializationApi';

const SubjectSpecializationList = () => {
  return (
    <MasterTable
      api={subjectSpecializationApi}
      title="Subject Specialization"
      entityName="subjectspecialization"
    />
  );
};

export default SubjectSpecializationList;
