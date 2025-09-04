import React, { useState,useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomSelect from '../../utilits/custom-arrowdropdown';
import apiMethods from '../../api/axiosInstance';
import HeaderBar from './HeaderBar';
import Footer from './FooterBar';
import useDropdowns from "../../componets/DropDownCommonComponets/useDropdowns";


const StudentRegister = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

 // ✅ FIX: Memoize the tables array so it's stable across renders
    const tables = useMemo(
        () => [
            "std_master",
            "m_bloodgroup",
            "m_fatheroccupation",
            "m_motheroccupation",
            "m_gender" // 👈 you’re using gender but forgot to request it
        ],
        []
    );

    const { dropdowns, loading: dropdownLoading, error: dropdownError } = useDropdowns(tables);

    const [form, setForm] = useState({
        register_number: '',
        name: '',
        phone_number: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        pincode: '',
        date_of_birth: '',
        gender: '',
        standard: '',
        blood_group: '',
        father_name: '',
        mother_name: '',
        father_occupation: '',
        mother_occupation: '',
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'pincode' && (!/^\d*$/.test(value) || value.length > 6)) return;
        if (name === 'phone_number') {
            if (!/^\d*$/.test(value) || value.length > 10) return;
            if (value.length === 1 && !/^[6-9]$/.test(value)) return;
        }
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

            if (!/^\d{6}$/.test(form.pincode)) {
                throw new Error('Pincode must be 6 digits');
            }

            if (form.password !== form.confirmPassword) {
                throw new Error('Passwords do not match');
            }

            // Prepare data for API (remove confirmPassword)
            const { confirmPassword, ...registrationData } = form;

            console.log('Sending registration data:', registrationData);

            const response = await apiMethods.post('/auth/register/student', registrationData);

            if (!response.data.success) {
                throw new Error(response.data.message || 'Registration failed');
            }

            toast.success('Registration successful! Please check your email for verification.');

            // Reset form
            setForm({
                register_number: '',
                name: '',
                phone_number: '',
                email: '',
                password: '',
                confirmPassword: '',
                address: '',
                pincode: '',
                date_of_birth: '',
                gender:'',
                standard: '',
                blood_group: '',
                father_name: '',
                mother_name: '',
                father_occupation: '',
                mother_occupation: '',
            });

            // Only navigate if login route exists
            navigate('/login', { replace: true });
        } catch (err) {
            console.error('Registration error:', err);
            const errorMessage = err.response?.data?.message || err.message || 'Registration failed. Please try again.';
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
                        <h4 className="text-center mb-4">Student Registration</h4>

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
                            name="register_number"
                            className="form-control mb-3"
                            placeholder="Register Number"
                            value={form.register_number}
                            onChange={handleChange}
                            required
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
                        <input
                            type="text"
                            name="phone_number"
                            className="form-control mb-3"
                            placeholder="Phone Number"
                            value={form.phone_number}
                            onChange={handleChange}
                            required
                            autoComplete="tel"
                        />


                        {/* Password */}
                        <div className="input-group mb-3">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                className="form-control"
                                placeholder="Password"
                                value={form.password}
                                onChange={handleChange}
                                required
                                autoComplete="new-password"
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
                            />
                            <span className="input-group-text" onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={{ cursor: 'pointer' }}>
                                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </span>
                        </div>

                        {/* Address, Pincode */}
                        <textarea name="address" className="form-control mb-3" placeholder="Address" value={form.address} onChange={handleChange} required />
                        <input type="text" name="pincode" className="form-control mb-3" placeholder="Pincode" value={form.pincode} onChange={handleChange} required />

                        {/* DOB, Standard */}
                        <input type="date" name="date_of_birth" className="form-control mb-3" value={form.date_of_birth} onChange={handleChange} required />
                        <CustomSelect
                            label="Gender"
                            name="gender"
                            value={form.gender}
                            onChange={handleChange}
                            options={dropdowns.m_gender?.map((g) => g.name) || []}
                        />
                        <CustomSelect
                            label="Select Standard"
                            name="standard"
                            value={form.standard}
                            onChange={handleChange}
                            options={dropdowns.std_master?.map((s) => s.name) || []}
                        />


                        {/* Blood Group */}
                        <CustomSelect
                            label="Select Blood Group"
                            name="blood_group"
                            value={form.blood_group}
                            onChange={handleChange}
                            options={dropdowns.m_bloodgroup?.map((bg) => bg.name) || []}
                        />


                        {/* Father & Mother */}
                        <input type="text" name="father_name" className="form-control mb-3" placeholder="Father's Name" value={form.father_name} onChange={handleChange} required />
                        <CustomSelect
                            label="Father's Occupation"
                            name="father_occupation"
                            value={form.father_occupation}
                            onChange={handleChange}
                            options={dropdowns.m_fatheroccupation?.map((f) => f.name) || []}
                        />
                        <input type="text" name="mother_name" className="form-control mb-3" placeholder="Mother's Name" value={form.mother_name} onChange={handleChange} required />
                        <CustomSelect
                            label="Mother's Occupation"
                            name="mother_occupation"
                            value={form.mother_occupation}
                            onChange={handleChange}
                            options={dropdowns.m_motheroccupation?.map((m) => m.name) || []}
                        />
                        <button
                            type="submit"
                            className="btn btn-secondary w-100 fw-semibold"
                            disabled={loading}
                        >
                            {loading ? 'Registering...' : 'Register'}
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default StudentRegister;


