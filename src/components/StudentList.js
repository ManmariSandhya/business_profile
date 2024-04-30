import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function StudentList() {
  const [userForm, setUserForm] = useState([]);

  const deleteStudent = (_id) => {
    axios
      .delete("http://localhost:4000/students/delete-student/" + _id)
      .then(() => {
        console.log("Data successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/students/")
      .then((res) => {
        setUserForm(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userForm]);

  return (
    <div>
      <table className="table">
        <thead >
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Business</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Adhar</th>
            <th scope="col">Disability</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col">Country</th>
            <th scope="col">Details</th>
            <th scope="col">Category</th>
            <th scope="col">Timings</th>
            <th scope="col">URL</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody style={{marginLeft:'-500px',width:'99.2%'}}>
          {userForm.map((user, index) => {
            return (
              <tr key={index}>
                <th scope="row">{user._id}</th>
                <td>{user.BusinessName}</td>
                <td>{user.Email}</td>
                <td>{user.PhoneNumber}</td>
                <td>{user.AdharNumber}</td>
                <td>{user.Disability}</td>
                <td>{user.City}</td>
                <td>{user.State}</td>
                <td>{user.Country}</td>
                <td>{user.BusinessDetails}</td>
                <td>{user.BusinessCategory}</td>
                <td>{user.Timings}</td>
                <td>{user.WebsiteURL}</td>
               
                <td>
                  <Link
                    className="btn btn-primary btn-sm me-2 w-100"
                    to={"/edit-student/" + user._id}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteStudent(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
