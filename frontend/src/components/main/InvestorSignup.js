
import { Formik } from "formik";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";

import profile from "./image/a.png";
import email from "./image/email.jpg";
import pass from "./image/pass.png";
function InvestorSignup() {
  
  
    const handleFormSubmit = (formdata) => {
      console.log("Form submitted!!");
      console.log(formdata);
  
      fetch('http://localhost:5000/investor/add', {
        method: 'POST',
        body : JSON.stringify(formdata),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        if(res.status === 200){
          Swal.fire({
            icon : 'success',
            title : 'Success 😀👌',
            text : 'signup Successful'
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
     <div className="sub-main l">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Signup Page</h1>
           <Formik
                initialValues={{
                  fname:"",
                  lname:"",
                  email:"",
                  contact:"",
                  age:"",
                  password:"",
                  aadhar:"",
                  createdAt:new Date()
                   }} //specifying initial value for form
                onSubmit={handleFormSubmit} // function to handle form submission
                // validationSchema={loginSchema}
              >
                 {({ values, handleChange, handleSubmit, errors, touched }) => (
                  <form onSubmit={handleSubmit}>
           <div>
             <img src={email} alt="msglogo" className="email"/>
             <input type="text" id="fname"  onChange={handleChange} placeholder="First name" className="fname"/>
           </div>
           <div className="second-input">
             <img src={email} alt="msglogo" className="email"/>
             <input type="text" id="lname"  onChange={handleChange} placeholder="Last name" className="lname"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="password" className="email"/>
             <input type="number" id="contact"  onChange={handleChange} placeholder="contact" className="contact"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="password" className="email"/>
             <input type="email" id="email"  onChange={handleChange} placeholder="email" className="Email"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="password" className="email"/>
             <input type="number" id="age"  onChange={handleChange} placeholder="Age" className="age"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="password" className="email"/>
             <input type="password" id="password"  onChange={handleChange} placeholder="Password" className=""/>
           </div>
           <div className="second-input">
             <img src={pass} alt="password" className="email"/>
             <input type="number" id="aadhar"  onChange={handleChange} placeholder="Aadhar" className="aadhar"/>
           </div>
          <div className="login-button">
          <button type="Submit">Signup</button>
          </div>
           
          <h5 className="text-center mt-2">
              Already have an account?   <Link to="/main/InvestorLogin">Login Here</Link>
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

export default InvestorSignup;