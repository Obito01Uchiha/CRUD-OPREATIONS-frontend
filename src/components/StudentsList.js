import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/StudentsList.css';

const StudentsList = ({ students }) => {
  return (
    <div className="students-list">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Enroll Number</th>
            <th scope="col">Date of Admission</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.attributes.name}</td>
              <td>{student.attributes.email}</td>
              <td>{student.attributes.phone}</td>
              <td>{student.attributes.enrollNumber}</td>
              <td>{student.attributes.dateOfAdmission}</td>
              <td>
                <Link
                  to={`/edit-student/${student.id}`}
                  className="btn btn-sm btn-warning"
                >
                  Edit
                </Link>
                <button className="btn btn-sm btn-danger" disabled>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsList;