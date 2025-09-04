import React from 'react';
import { useAuth } from '../../context/AuthContext';

const StudentDashboard = () => {
  const { currentUser } = useAuth();

  // Add null checks for user data
  if (!currentUser) {
    return <div>Loading user data...</div>;
  }

  return (
    <div>
      <h1>Student Dashboard</h1>
      <p>Welcome, {currentUser?.name || 'Student'} (ID: {currentUser?.register_number || 'N/A'})</p>
      {/* Student-specific content */}
    </div>
  );
};

export default StudentDashboard;