import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../services/apiService';
import StudentsList from './StudentsList';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [totalStudents, setTotalStudents] = useState(0);
  const [totalCourses, setTotalCourses] = useState(0);
  const [totalPayments, setTotalPayments] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentsResponse = await apiService.getAllStudents();
        setStudents(studentsResponse.data.data);
        setTotalStudents(studentsResponse.data.meta.pagination.total);

        const coursesResponse = await apiService.getAllCourses();
        setTotalCourses(coursesResponse.data.meta.pagination.total);

        const paymentsResponse = await apiService.getAllPayments();
        setTotalPayments(paymentsResponse.data.meta.pagination.total);

        const usersResponse = await apiService.getAllUsers();
        setTotalUsers(usersResponse.data.meta.pagination.total);
      } catch (error) {
        console.error(error);
        if (error.response.status === 401) {
          navigate('/signin');
        }
      }
    };
    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">CRUD OPERATIONS</h1>
        <div className="dashboard-stats">
          <div className="stat">
            <i className="fas fa-graduation-cap"></i>
            <span className="stat-number">{totalStudents}</span>
            <span className="stat-label">Students</span>
          </div>
          <div className="stat">
            <i className="fas fa-book"></i>
            <span className="stat-number">{totalCourses}</span>
            <span className="stat-label">Courses</span>
          </div>
          <div className="stat">
            <i className="fas fa-money-bill-wave"></i>
            <span className="stat-number">{totalPayments}</span>
            <span className="stat-label">Payments</span>
          </div>
          <div className="stat">
            <i className="fas fa-user"></i>
            <span className="stat-number">{totalUsers}</span>
            <span className="stat-label">Users</span>
          </div>
        </div>
      </div>
      <StudentsList students={students} />
    </div>
  );
};

export default Dashboard;