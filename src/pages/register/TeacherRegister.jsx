import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import apiMethods from '../../api/axiosInstance';

const TeacherRegister = () => {
  const [formData, setFormData] = useState({
    employee_id: '',
    name: '',
    email: '',
    password: '',
    subject_specialization: '',
    // other teacher fields
  });
  const [errors, setErrors] = useState({});
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiMethods.post('/auth/register/teacher', formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      // Success message or redirect
    } catch (error) {
      setErrors(error.response?.data?.errors || {});
    }
  };

  if (user?.role !== 'admin') {
    return <div>Not authorized</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Teacher registration form fields */}
    </form>
  );
};

export default TeacherRegister;