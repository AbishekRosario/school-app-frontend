import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import apiMethods from '../../api/axiosInstance';

const StudentRegister = () => {
  const [formData, setFormData] = useState({
    register_number: '',
    name: '',
    email: '',
    password: '',
    // other student fields
  });
  const [errors, setErrors] = useState({});
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiMethods.post('/auth/register/student', formData);
      await login({
        identifier: formData.email,
        password: formData.password
      });
      navigate('/student/dashboard');
    } catch (error) {
      setErrors(error.response?.data?.errors || {});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Student registration form fields */}
    </form>
  );
};

export default StudentRegister;