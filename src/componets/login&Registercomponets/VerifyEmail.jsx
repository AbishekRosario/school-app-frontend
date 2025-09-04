import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import apiMethods from '../../api/axiosInstance';

const VerifyEmail = () => {
  const { token } = useParams();
  const [status, setStatus] = useState('Click the button below to verify your email.');
  const [isSuccess, setIsSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    setLoading(true);
    try {
      const response = await apiMethods .get(`/auth/verify-email/${token}`);
      setStatus(response.data.message || 'Email verified successfully!');
      setIsSuccess(true);
    } catch (error) {
      setStatus(
        error.response?.data?.message ||
        'Email verification failed. Token may be invalid or expired.'
      );
      setIsSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-gradient bg-light px-3">
      <div className="card shadow border-0 w-100" style={{ maxWidth: '480px' }}>
        <div className="card-body p-4">
          <div className="text-center mb-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
              alt="Email Icon"
              width={70}
              className="mb-3"
            />
            <h3 className="card-title mb-2 text-primary fw-bold">Email Verification</h3>
            <p className={`small ${isSuccess === null ? 'text-secondary' : isSuccess ? 'text-success' : 'text-danger'}`}>
              {status}
            </p>
          </div>

          <div className="d-grid">
            {isSuccess ? (
              <Link to="/login" className="btn btn-primary">
                Go to Login
              </Link>
            ) : (
              <button
                className="btn btn-success"
                onClick={handleVerify}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Verifying...
                  </>
                ) : (
                  'Verify Email'
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;

