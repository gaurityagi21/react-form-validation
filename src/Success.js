import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
    const location = useLocation();
    const formData = location.state?.formData; // Access the form data from location.state

    if (!formData) {
        return <div>Loading...</div>; // Display loading if form data is not yet available
    }

    return (
        <div>
            <h2>Submission Successful!</h2>
            <p><strong>First Name:</strong> {formData.firstName}</p>
            <p><strong>Last Name:</strong> {formData.lastName}</p>
            <p><strong>Username:</strong> {formData.username}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Phone Number:</strong> {formData.phone}</p>
            <p><strong>Country:</strong> {formData.country}</p>
            <p><strong>City:</strong> {formData.city}</p>
            <p><strong>PAN Number:</strong> {formData.pan}</p>
            <p><strong>Aadhar Number:</strong> {formData.aadhar}</p>
        </div>
    );
};

export default Success;
