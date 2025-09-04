import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

const NotAuthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div 
        className="card shadow-lg p-4 text-center"
        style={{ maxWidth: '420px', borderRadius: '15px' }}
      >
        <div className="mb-3 text-danger">
          <Lock size={50} />
        </div>
        <h2 className="fw-bold text-dark">Access Denied</h2>
        <p className="text-muted">
          You do not have permission to view this page.
        </p>
        <button
          className="btn btn-primary mt-3 px-4"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotAuthorized;
