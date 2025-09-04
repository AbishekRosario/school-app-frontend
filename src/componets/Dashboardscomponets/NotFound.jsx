import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <div className="text-center p-5">
        <h1 className="display-1 fw-bold text-primary">404</h1>
        <p className="fs-3"> <span className="text-danger">Oops!</span> Page not found.</p>
        <p className="lead">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-4">
          <button 
            onClick={() => navigate(-1)} 
            className="btn btn-primary me-3"
          >
            Go Back
          </button>
          <button 
            onClick={() => navigate('/')} 
            className="btn btn-outline-primary"
          >
            Return Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;