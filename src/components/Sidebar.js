import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src="/logo.png" alt="Logo" className="sidebar-logo" />
      </div>
      <ul className="sidebar-nav">
        <li className="sidebar-nav-item">
          <Link className="sidebar-nav-link" to="/dashboard">
            <i className="fas fa-tachometer-alt"></i>
            Dashboard
          </Link>
        </li>
        <li className="sidebar-nav-item">
          <Link className="sidebar-nav-link" to="/add-student">
            <i className="fas fa-plus-circle"></i>
            Add Student
          </Link>
        </li>
        <li className="sidebar-nav-item">
          <Link className="sidebar-nav-link" to="/courses">
            <i className="fas fa-book"></i>
            Courses
          </Link>
        </li>
        <li className="sidebar-nav-item">
          <Link className="sidebar-nav-link" to="/payments">
            <i className="fas fa-money-bill-wave"></i>
            Payments
          </Link>
        </li>
        <li className="sidebar-nav-item">
          <Link className="sidebar-nav-link" to="/settings">
            <i className="fas fa-cog"></i>
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;