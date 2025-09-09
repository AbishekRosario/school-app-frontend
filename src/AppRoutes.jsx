import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ProtectedRoute from './componets/login&Registercomponets/ProtectedRoute';
import RoleRoute from './componets/login&Registercomponets/RoleRoute';

import Login from './componets/login&Registercomponets/Login';
import StudentRegister from './componets/login&Registercomponets/StudentRegister';
import TeacherRegister from './componets/login&Registercomponets/TeacherRegister';
import AdminRegister from './componets/login&Registercomponets/AdminRegister';
import VerifyEmail from './componets/login&Registercomponets/VerifyEmail';

import StudentDashboard from './pages/student/Dashboard';
import TeacherDashboard from './pages/teacher/Dashboard';
import AdminDashboard from './pages/admin/Dashboard';
import MasterCity from './Masterpages/MasterCity';
import MasterGender from './Masterpages/MasterGender';
import MasterBloodGroup from './Masterpages/MasterBloodGroup'
import MasterMotherOccupation from './Masterpages/MasterMotherOccupation';
import MasterFatherOccupation from './Masterpages/MasterFatherOccupation';
import MasterStd from './Masterpages/MasterStd';
import MasterSubjectSpecialization from './Masterpages/MasterSubjectSpecialization';
import MasterQualification from './Masterpages/MasterQualification';
import SectionList from './MasterComponent/Masters_Students/SectionList';
import ReligionList from './MasterComponent/Masters_Students/ReligionList';
import CasteList from './MasterComponent/Masters_Students/CasteList';
import DocumentTypeList from './MasterComponent/Masters_Students/DocumentTypeList';
import StatusList from './MasterComponent/Masters_Students/StatusList';
import AdmissionCategoryList from './MasterComponent/Masters_Students/AdmissionCategoryList';


import Dashboard from './componets/Dashboardscomponets/Dashboard'

import NotAuthorized from './componets/Dashboardscomponets/NotAuthorized';
import NotFound from './componets/Dashboardscomponets/NotFound';
import AppLayout from './componets/skeleton_compoents/AppLayout';

const AppRoutes = () => (
  <Routes>
    {/* Public */}
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<StudentRegister />} />
    <Route path="/teachers/register" element={<TeacherRegister />} />
    <Route path="/admin/register" element={< AdminRegister/>} />
    <Route path="/verify-email/:token" element={<VerifyEmail />} />
    <Route path="/dash" element={<Dashboard />} />
    {/* Protected */}
    <Route element={<ProtectedRoute />}>
      <Route element={<AppLayout />}>
        {/* Optional alias: /dashboard → role dashboard handled inside ProtectedRoute */}
        <Route path="/MasterCity" element={<MasterCity />} />
        <Route path="/MasterGender" element={<MasterGender />} />
        <Route path="/MasterBloodGroup" element={<MasterBloodGroup />} />
        <Route path="/MasterMotherOccupation" element={<MasterMotherOccupation />} />
        <Route path="/MasterFatherOccupation" element={<MasterFatherOccupation />} />
        <Route path="/MasterStd" element={<MasterStd />} />
        <Route path="/MasterSubjectSpecialization" element={<MasterSubjectSpecialization />} />
        <Route path="/MasterQualification" element={<MasterQualification />} />
        <Route path="/SectionList" element={<SectionList />} />
        <Route path="/ReligionList" element={<ReligionList />} />
        <Route path="/CasteList" element={<CasteList />} />
        <Route path="/DocumentTypeList" element={<DocumentTypeList />} />
        <Route path="/StatusList" element={<StatusList />} />
        <Route path="/AdmissionCategoryList" element={<AdmissionCategoryList />} />







        <Route element={<RoleRoute allowedRoles={['student']} />}>
          <Route path="/student/dashboard" element={<StudentDashboard />} />
        </Route>

        <Route element={<RoleRoute allowedRoles={['teacher']} />}>
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        </Route>

        <Route element={<RoleRoute allowedRoles={['admin']} />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Route>
      </Route>
    </Route>

    {/* Errors */}
    <Route path="/not-authorized" element={<NotAuthorized />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
