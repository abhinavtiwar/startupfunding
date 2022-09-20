import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import profile from "../main/image/maj.jpg";
import { Formik } from "formik";
import { TextField, Button } from "@mui/material";
const InvestorProfile = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("investor"))
  );

  console.log(currentUser);
  const handleFormSubmit = (formdata) => {
    fetch("http://localhost:5000/investor/update/" + currentUser._id, {
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
          title: "Success 😀👌",
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
    
    <div class="contact-wrap">
      <div class="contact-in">
        <img className="photos" src={profile} alt="profile" />
        <hr></hr>
        <h1>Investor Profile</h1>
        <h2>
          <i class="fa fa-address-card" aria-hidden="true"></i>First Name  
        </h2>
       <p><h1 className="contentp" > {currentUser.fname}</h1></p>
        <h2>
          <i class="fa fa-address-card" aria-hidden="true"></i>Last Name
        </h2>
        <p><h1 className="contentp">{currentUser.lname}</h1></p>
        <h2>
          <i class="fa fa-phone" aria-hidden="true"></i> Phone
        </h2>
        <p><h1 className="contentp">{currentUser.contact}</h1></p>
        <h2>
          <i class="fa fa-envelope" aria-hidden="true"></i> Email
        </h2>
        <p><h1 className="contentp">{currentUser.email}</h1></p>
        <h2>
          <i class="fa fa-credit-card" aria-hidden="true"></i> Aadhar
        </h2>
        <p><h1 className="contentp">{currentUser.aadhar}</h1></p>
      </div>
      <div class="contact-in">
        <marquee>
          <h1>Update Your Profile</h1>
        </marquee>
        <Formik initialValues={currentUser} onSubmit={handleFormSubmit}>
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="First Name"
                sx={{ mt: 4 }}
                id="fname"
                type="text"
                value={values.fname}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Last Name"
                sx={{ mt: 4 }}
                id="lname"
                type="text"
                value={values.lname}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Contact No"
                sx={{ mt: 4 }}
                id="contact"
                value={values.contact}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Email Address"
                sx={{ mt: 4 }}
                type="email"
                id="email"
                value={values.email}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Age"
                sx={{ mt: 4 }}
                id="age"
                value={values.age}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Password"
                sx={{ mt: 4 }}
                id="password"
                type="password"
                value={values.password}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Aadhar"
                sx={{ mt: 4 }}
                id="aadhar"
                type="text"
                value={values.aadhar}
                onChange={handleChange}
              />

              <Button
                variant="contained"
                type="submit"
                color="success"
                fullWidth
                sx={{ mt: 13 }}
              >
                Update
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default InvestorProfile;
