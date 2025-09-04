import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apiMethods from '../../api/axiosInstance';
import HeaderBar from './HeaderBar';
import Footer from './FooterBar';

const AdminRegister = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        username: '',
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Basic validation
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
                throw new Error('Enter a valid email');
            }

            if (form.password.length < 8) {
                throw new Error('Password must be at least 8 characters');
            }

            if (form.password !== form.confirmPassword) {
                throw new Error('Passwords do not match');
            }

            // Prepare data for API (remove confirmPassword)
            const { confirmPassword, ...registrationData } = form;

            console.log('Sending admin registration data:', registrationData);

            const response = await apiMethods.post('/auth/register/admin', registrationData);

            if (!response.data.success) {
                throw new Error(response.data.message || 'Admin registration failed');
            }

            toast.success('Admin registration successful!');

            // Reset form
            setForm({
                username: '',
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
            });

            // Navigate to admin dashboard or login
            navigate('/admin/dashboard', { replace: true });
        } catch (err) {
            console.error('Admin registration error:', err);
            const errorMessage = err.response?.data?.message || err.message || 'Admin registration failed. Please try again.';
            setError(errorMessage);
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-page">
            <HeaderBar />
            <div className="login-bg">
                <form onSubmit={handleSubmit} className="login-form-outer">
                    <div className="login-form-inner">
                        <h4 className="text-center mb-4">Admin Registration</h4>
                        <p className="text-center text-muted mb-4">Restricted to authorized personnel only</p>

                        {error && (
                            <div className="alert alert-danger mb-3">
                                {error}
                            </div>
                        )}

                        {success && (
                            <div className="alert alert-success mb-3">
                                {success}
                            </div>
                        )}

                        <input
                            type="text"
                            name="username"
                            className="form-control mb-3"
                            placeholder="Username"
                            value={form.username}
                            onChange={handleChange}
                            required
                            autoComplete="username"
                        />
                        <input
                            type="text"
                            name="name"
                            className="form-control mb-3"
                            placeholder="Full Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            className="form-control mb-3"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            autoComplete="email"
                        />

                        {/* Password */}
                        <div className="input-group mb-3">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                className="form-control"
                                placeholder="Password (min 8 characters)"
                                value={form.password}
                                onChange={handleChange}
                                required
                                autoComplete="new-password"
                                minLength="8"
                            />
                            <span className="input-group-text" onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer' }}>
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </span>
                        </div>

                        {/* Confirm Password */}
                        <div className="input-group mb-3">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                name="confirmPassword"
                                className="form-control"
                                placeholder="Confirm Password"
                                value={form.confirmPassword}
                                onChange={handleChange}
                                required
                                autoComplete="new-password"
                                minLength="8"
                            />
                            <span className="input-group-text" onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={{ cursor: 'pointer' }}>
                                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </span>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-secondary w-100 fw-semibold"
                            disabled={loading}
                        >
                            {loading ? 'Creating Admin Account...' : 'Register Admin'}
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default AdminRegister;