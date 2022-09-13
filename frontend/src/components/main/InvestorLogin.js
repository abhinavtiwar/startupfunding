
import loginlogo from "./image/loginlogo.png";
import {Button } from "@mui/material";
import { Formik } from "formik";
import email from "./image/email.jpg";
import pass from "./image/pass.png";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { Link } from "react-router-dom";
function InvestorLogin() {
  const handleFormSubmit = (formdata) => {
    console.log("Form submitted!!");
    console.log(formdata);

    fetch('http://localhost:5000/investor/authenticate', {
      method: 'POST',
      body : JSON.stringify(formdata),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if(res.status === 200){ 
        Swal.fire({
          icon : 'success',
          title : 'Success',
          text : 'Login Successful'
        })
      }else if(res.status === 300){
        Swal.fire({
          icon : 'error',
          title : 'Oops!!',
          text : 'Invalid Credentials'
        })
      }
    })

  };

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(4, "Password should be longer than 4 characters")
      .required("Required"),
  });
  return (
    <div className="main">
      <div className="sub-main-Logins">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={loginlogo} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            <Formik
                initialValues={{ email: "", password: "" }} //specifying initial value for form
                onSubmit={handleFormSubmit} // function to handle form submission
                validationSchema={loginSchema}
              >
                {({ values, handleChange, handleSubmit, errors, touched }) => (
                  <form onSubmit={handleSubmit}>
            <div>
              <img src={email} alt="email" className="email" />
              <input type="email" placeholder="Investor email"
              id="email"//imp to write
                      value={values.email}//imp to write
                      onChange={handleChange}//imp to write
                      error={Boolean(errors.email) && touched.email}
                      helperText={touched.email ? errors.email : ""}
              className="name mt-3 " />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email " />
              <input type="password" placeholder="Password" 
              id="password"
              value={values.password}
              onChange={handleChange}
              error={Boolean(errors.password) && touched.password}
              helperText={touched.password ? errors.password : ""} 
              className="name mt-1" />
            </div>
            <h6> 
                    <Link to="/main/reset">Reset Password</Link>
                    </h6>
            <div className="login-button mt-2">
            <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 5 }}
          >
            Login Now
          </Button>
            </div>
            </form>
                )}
          </Formik>

            <h5 className="text-center mt-2">
              Don't have an account?  <Link to="/main/InvestorSignup">Sign up</Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestorLogin;
