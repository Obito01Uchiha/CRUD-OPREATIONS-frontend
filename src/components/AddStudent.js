import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../services/apiService';
import '../styles/AddStudent.css';

const AddStudent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [enrollNumber, setEnrollNumber] = useState('');
  const [dateOfAdmission, setDateOfAdmission] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await apiService.createStudent({
        name,
        email,
        phone,
        enrollNumber,
        dateOfAdmission,
      });
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
      alert('Failed to create student');
    }
  };

  return (
    <div className="add-student-container">
      <h1 className="add-student-title">Add New Student</h1>
      <form onSubmit={handleSubmit} className="add-student-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="enrollNumber">Enroll Number:</label>
          <input
            type="text"
            id="enrollNumber"
            value={enrollNumber}
            onChange={(e) => setEnrollNumber(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfAdmission">Date of Admission:</label>
          <input
            type="date"
            id="dateOfAdmission"
            value={dateOfAdmission}
            onChange={(e) => setDateOfAdmission(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddStudent;