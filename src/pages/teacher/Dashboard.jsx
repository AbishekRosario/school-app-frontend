import React from 'react';
import { useAuth } from '../../context/AuthContext';

const TeacherDashboard = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      <h1>Teacher Dashboard</h1>
      <p>Welcome, {currentUser.name} (Employee ID: {currentUser.employee_id})</p>
      {/* Teacher-specific content */}
    </div>
  );
};

export default TeacherDashboard;