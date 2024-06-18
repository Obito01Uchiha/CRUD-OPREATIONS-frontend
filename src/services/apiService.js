import axios from 'axios';

const apiUrl = 'https://react-crud-hiring.herokuapp.com/api';

const apiService = {
  signIn: async (email, password) => {
    return await axios.post(`${apiUrl}/auth/local`, {
      identifier: email,
      password,
    });
  },
  getAllStudents: async () => {
    const token = localStorage.getItem('token');
    return await axios.get(`${apiUrl}/students`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getStudent: async (id) => {
    const token = localStorage.getItem('token');
    return await axios.get(`${apiUrl}/students/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  createStudent: async (studentData) => {
    const token = localStorage.getItem('token');
    return await axios.post(`${apiUrl}/students`, { data: studentData }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  updateStudent: async (id, studentData) => {
    const token = localStorage.getItem('token');
    return await axios.put(`${apiUrl}/students/${id}`, { data: studentData }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  deleteStudent: async (id) => {
    const token = localStorage.getItem('token');
    return await axios.delete(`${apiUrl}/students/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getAllCourses: async () => {
    const token = localStorage.getItem('token');
    return await axios.get(`${apiUrl}/courses`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getAllPayments: async () => {
    const token = localStorage.getItem('token');
    return await axios.get(`${apiUrl}/payments`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  getAllUsers: async () => {
    const token = localStorage.getItem('token');
    return await axios.get(`${apiUrl}/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

export default apiService;