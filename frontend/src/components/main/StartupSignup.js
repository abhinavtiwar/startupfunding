import { Formik } from "formik";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";

import profile from "./image/a.png";
import email from "./image/email.jpg";
import pass from "./image/pass.png";
function StartupSignup() {
  const handleFormSubmit = (formdata) => {
    console.log("Form submitted!!");
    console.log(formdata);

    fetch("http://localhost:5000/startup/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success 😀👌",
          text: "signup Successful",
        });
      } else if (res.status === 300) {
        Swal.fire({
          icon: "error",
          title: "Oops!!",
          text: "Invalid Credentials",
        });
      }
    });
  };
  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(4, "Password should be longer than 4 characters")
      .required("Required"),
  });

  return (
    <div className="mains">
      <div className="sub-mains">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Signup Page</h1>
            <Formik
              initialValues={{
                title: "",
                phone:"",
                name: "",
                email: "",
                password:"",
                year: "",
                teamInfo: Object,
                details: Array,
                createdAt: new Date(),
              }} //specifying initial value for form
              onSubmit={handleFormSubmit} // function to handle form submission
              // validationSchema={loginSchema}
            >
              {({ values, handleChange, handleSubmit, errors, touched }) => (
                <form onSubmit={handleSubmit}>
                  <div className="second-input">
                    <img src={email} alt="msglogo" className="email" />
                    <input type="text" id="title"   onChange={handleChange} placeholder="Title" className="title" />
                  </div>
                  <div className="second-input">
                    <img src={email} alt="msglogo" className="email" />
                    <input type="text" id="name"   onChange={handleChange} placeholder="Name" className="name" />
                  </div>
                  <div className="second-input">
                    <img src={pass} alt="password" className="email" />
                    <input type="email" id="email"   onChange={handleChange} placeholder="email" className="Email" />
                  </div>
                  <div className="second-input">
                    <img src={pass} alt="password" className="email" />
                    <input type="Password" id="password"   onChange={handleChange} placeholder="Password" className="password" />
                  </div>
                  <div className="second-input">
                    <img src={pass} alt="password" className="email" />
                    <input type="number" id="year"  onChange={handleChange} placeholder="Year" className="year" />
                  </div>
                  <div className="second-input">
                    <img src={pass} alt="password" className="email" />
                    <input type="text" id="phone"  onChange={handleChange} placeholder="Phone No" className="year" />
                  </div>

                  <div className="login-button">
                    <button type="Submit">Signup</button>
                  </div>

                  <h5 className="text-center mt-2">
                    Already have an account?{" "}
                    <Link to="/main/StartupLogin">Login Here</Link>
                  </h5>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartupSignup;
