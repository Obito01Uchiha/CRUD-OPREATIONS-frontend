import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import apiService from '../services/apiService';
import '../styles/EditStudent.css';

const EditStudent = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [enrollNumber, setEnrollNumber] = useState('');
  const [dateOfAdmission, setDateOfAdmission] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.getStudent(id);
        setName(response.data.data.attributes.name);
        setEmail(response.data.data.attributes.email);
        setPhone(response.data.data.attributes.phone);
        setEnrollNumber(response.data.data.attributes.enrollNumber);
        setDateOfAdmission(response.data.data.attributes.dateOfAdmission);
      } catch (error) {
        console.error(error);
        alert('Failed to fetch student');
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await apiService.updateStudent(id, {
        name,
        email,
        phone,
        enrollNumber,
        dateOfAdmission,
      });
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
      alert('Failed to update student');
    }
  };

  return (
    <div className="edit-student-container">
      <h1 className="edit-student-title">Edit Student</h1>
      <form onSubmit={handleSubmit} className="edit-student-form">
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

export default EditStudent;