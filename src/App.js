import './App.css';
import * as studentService from './services/studentService';
import * as contactService from './services/contactService';
import { useEffect, useState } from 'react';

function App() {
  const [students, setStudents] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    studentService.getStudents()
      .then(students => setStudents(students))
      .catch(error => onError(error));
  },[])

  function getContactsByStudentId(id) {
    contactService.getContactsByStudentId(id)
      .then(contacts => setContacts(contacts))
      .catch(onError);
  }

  function onError(error) {
    console.log(error);
  }

  function viewStudents() {
    setContacts([]);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-5">
          {contacts.length === 0 && 
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">School Code</th>
                  <th scope="col">Student Id</th>
                  <th scope="col">Student Name</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => {
                  return (
                    <tr key={student.studentId}>
                      <th scope="row">{index + 1}</th>
                      <td>{student.schoolCode}</td>
                      <td>{student.studentId}</td>
                      <td onClick={() => getContactsByStudentId(student.studentId)}>
                        <span className="student-link" >{student.lastName}, {student.firstName}</span>
                      </td>
                    </tr>);
                })}
              </tbody>
            </table>
          }
          {contacts.length > 0 && 
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Student Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Relationship</th>
                  <th scope="col">Email Address</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Address</th>
                  <th scope="col">City</th>
                  <th scope="col">State</th>
                  <th scope="col">Zip Code</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, index) => {
                  return (
                    <tr key={index + contact.studentId}>
                      <th scope="row">{index + 1}</th>
                      <td>{contact.studentId}</td>
                      <td>{contact.lastName}, {contact.firstName}</td>
                      <td>{contact.relationship}</td>
                      <td>{contact.emailAddress}</td>
                      <td>{contact.mobile}</td>
                      <td>{contact.address}</td>
                      <td>{contact.city}</td>
                      <td>{contact.state}</td>
                      <td>{contact.zipCode}</td>
                    </tr>);
                  })}
              </tbody>
            </table>
          }
          {contacts.length > 0 && <button className="btn btn-sm btn-primary" onClick={viewStudents}>View Students</button>}
        </div>
      </div>
    </div>
  );
}

export default App;
