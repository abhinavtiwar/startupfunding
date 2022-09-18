import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import profile from "../main/image/a.png";
import { Formik } from "formik";
import { Button } from "@mui/material";
const StartupProfile = ({ fetchData }) => {
 
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('startup')));
  const [startupFormData, setStartupFormData] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [startupArray, setStartupArray] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(currentUser);
  const handleFormSubmit = (formdata) => {

    fetch("http://localhost:5000/startup/update/" + currentUser._id, {
      method: "PUT",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res.status);
      if (res.status === 200) {
       
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "update successful",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: " error occured",
        });
      }
    });
  };

  
  return (
    <div className="container">
      <div className="contact-box">
        <div className="contact-left">
          <h3>Update Your Profile</h3>
          <Formik initialValues={currentUser} onSubmit={handleFormSubmit}>
            {({ values, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className="input-row">
                  <div className="input-group">
                    <label>Name</label>
                    <input
                      type="text"
                      placeholder="Name"
                      id="name"
                      value={values.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-group">
                    <label>Phone</label>
                    <input
                      type="text"
                      placeholder="Phone Number"
                      id="phone"
                      value={values.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="input-row">
                  <div className="input-group">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-group">
                    <label>Title</label>
                    <input
                      type="text"
                      placeholder="New Title"
                      id="title"
                      value={values.title}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="input-row">
                  <div className="input-group">
                    <label>Password</label>
                    <input
                      type="number"
                      placeholder="Password"
                      id="password"
                      value={values.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-group">
                    <label>Year</label>
                    <input
                      type="number"
                      placeholder="Year"
                      id="year"
                      value={values.year}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 5 }}
                 
                >
                  UPDATE
                </Button>
              </form>
            )}
          </Formik>
        </div>
        
        <div className="contact-right">
          <h3>StartUp Profile</h3>
          <img className="photo" src={profile} alt="profile" />

          <table>
            <tr>
              <td>Title :</td>
              <td>{currentUser.title}</td>
            </tr>
            <tr>
              <td>Name :</td>
              <td>{currentUser.name}</td>
            </tr>
            <tr>
              <td>Phone :</td>
              <td>{currentUser.phone}</td>
            </tr>
            <tr>
              <td>Email :</td>
              <td>{currentUser.email}</td>
            </tr>
            <tr>
              <td>Year :</td>
              <td>{currentUser.year}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StartupProfile;
