import React from "react";
import MasterTable from "../../utilits/Mastertable";
import { admissionCategoryApi } from "../../services/Masterservices/admissionCategoryApi";

const AdmissionCategoryList = () => {
  return (
    <MasterTable
      api={admissionCategoryApi}
      title="Admission Categories"
      entityName="admission category"
    />
  );
};

export default AdmissionCategoryList;
