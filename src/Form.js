import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        phone: '',
        country: '',
        city: '',
        pan: '',
        aadhar: ''
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const errors = {};

        if (!formData.firstName) errors.firstName = "First Name is required";
        if (!formData.lastName) errors.lastName = "Last Name is required";
        if (!formData.username) errors.username = "Username is required";
        if (!formData.email) errors.email = "Email is required";
        if (!formData.password) errors.password = "Password is required";
        if (!formData.phone) errors.phone = "Phone number is required";
        if (!formData.country) errors.country = "Country is required";
        if (!formData.city) errors.city = "City is required";
        if (!formData.pan) errors.pan = "PAN number is required";
        if (!formData.aadhar) errors.aadhar = "Aadhar number is required";

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form Data:', formData); // Check formData in console
            navigate('/success', { state: { formData } });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
            </div>
            <div>
                <label>Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
            </div>
            <div>
                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
                {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
            </div>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
            </div>
            <div>
                <label>Phone Number</label>
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
                {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
            </div>
            <div>
                <label>Country</label>
                <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                >
                    <option value="">Select Country</option>
                    {/* Add country options here */}
                    <option value="USA">USA</option>
                    <option value="India">India</option>
                    {/* Add more countries as needed */}
                </select>
                {errors.country && <p style={{ color: 'red' }}>{errors.country}</p>}
            </div>
            <div>
                <label>City</label>
                <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                >
                    <option value="">Select City</option>
                    {/* Add city options here */}
                    <option value="New York">New York</option>
                    <option value="Mumbai">Mumbai</option>
                    {/* Add more cities as needed */}
                </select>
                {errors.city && <p style={{ color: 'red' }}>{errors.city}</p>}
            </div>
            <div>
                <label>PAN Number</label>
                <input
                    type="text"
                    name="pan"
                    value={formData.pan}
                    onChange={handleChange}
                />
                {errors.pan && <p style={{ color: 'red' }}>{errors.pan}</p>}
            </div>
            <div>
                <label>Aadhar Number</label>
                <input
                    type="text"
                    name="aadhar"
                    value={formData.aadhar}
                    onChange={handleChange}
                />
                {errors.aadhar && <p style={{ color: 'red' }}>{errors.aadhar}</p>}
            </div>
            <button type="submit" disabled={Object.keys(errors).length !== 0}>
                Submit
            </button>
        </form>
    );
};

export default Form;
