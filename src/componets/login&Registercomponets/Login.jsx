import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../custom-css/Login.css';
import { useAuth } from '../../context/AuthContext';
import HeaderBar from './HeaderBar';

const Login = () => {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const res = await login({
                email_or_register: emailOrPhone,
                password,
            });

            const { user } = res.data;
            toast.success('Login successful!', { position: 'top-right', autoClose: 3000 });

            // Role-based navigation (replace to avoid back to login)
            if (user?.role === 'student') navigate('/student/dashboard', { replace: true });
            else if (user?.role === 'teacher') navigate('/teacher/dashboard', { replace: true });
            else if (user?.role === 'admin') navigate('/admin/dashboard', { replace: true });
            else navigate('/not-authorized', { replace: true });

        } catch (err) {
            const msg = err.response?.data?.message || 'Login failed. Please check your credentials.';
            setError(msg);
            toast.error(msg, { position: 'top-right', autoClose: 5000 });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page">

            <HeaderBar />

            <div className="login-bg">
                <form onSubmit={handleLogin} className="login-form-outer">
                    <div className="login-form-inner">
                        {/* <h4 className="text-center mb-4">Montfort's Login</h4> */}
                        {/* <div className="text-center">
                          <h4
                              className="mb-4 fw-bold"
                              style={{
                                  color: '#ffffff',
                                  letterSpacing: '1px',
                                  textShadow: '1px 1px 3px rgba(0,0,0,0.5)',
                                  borderBottom: '2px solid #ffc107',
                                  display: 'inline-block',
                                  paddingBottom: '5px'
                              }}
                          >
                              Montfort's Login
                          </h4>
                      </div> */}
                        <div className="text-center">
                            <h4
                                className="mb-4 fw-bold"
                                style={{
                                    letterSpacing: '1px',
                                    display: 'inline-block',
                                    paddingBottom: '5px',
                                    borderBottom: '2px solid #ffc107',
                                    color: '#6c757d',
                                    textShadow: '0 1px 0 #fff, 0 2px 2px rgba(0,0,0,0.2)',
                                    transition: 'all 0.3s ease-in-out',
                                    cursor: 'default'
                                }}
                                onMouseEnter={e => {
                                    e.target.style.letterSpacing = '2px';
                                    //   e.target.style.textShadow = '0 1px 0 #fff, 0 3px 6px rgba(255,193,7,0.5)';
                                    e.target.style.textShadow = '0 1px 0 #fff, 0 2px 2px rgba(0,0,0,0.2)';
                                }}
                                onMouseLeave={e => {
                                    e.target.style.letterSpacing = '1px';
                                    e.target.style.textShadow = '0 1px 0 #fff, 0 2px 2px rgba(0,0,0,0.2)';
                                }}
                            >
                                <span style={{ fontWeight: 800 }}>Montfort's</span> Login
                            </h4>
                        </div>


                        {error && (
                            <div className="alert alert-danger mb-3">
                                {error}
                            </div>
                        )}

                        <div className="mb-3 input-group">
                            <span className="input-group-text bg-secondary text-white">
                                <i className="bi bi-person-fill"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter email or register number"
                                value={emailOrPhone}
                                onChange={(e) => setEmailOrPhone(e.target.value)}
                                required
                                autoComplete="username"
                            />
                        </div>

                        {/* <div className="mb-4 input-group">
                            <span className="input-group-text bg-secondary text-white">
                                <i className="bi bi-lock-fill"></i>
                            </span>
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                autoComplete="current-password"
                            />
                            <button 
                                type="button" 
                                className="input-group-text bg-secondary text-white"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff size={10} /> : <Eye size={10} />}
                            </button>
                        </div> */}

                        <div className="mb-4 input-group position-relative">
                            <span className="input-group-text bg-secondary text-white">
                                <i className="bi bi-lock-fill"></i>
                            </span>
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control pe-5"  // Add padding to prevent text under icon
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                autoComplete="current-password"
                            />
                            {password && (  // Only show when there's text in the input
                                <button
                                    type="button"
                                    className="position-absolute end-0 top-50 translate-middle-y bg-transparent border-0"
                                    style={{ right: "40px", zIndex: 5 }}
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <EyeOff size={18} className="text-secondary" />
                                    ) : (
                                        <Eye size={18} className="text-secondary" />
                                    )}
                                </button>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="btn btn-secondary w-100 fw-semibold login-btn"
                            disabled={loading}
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;