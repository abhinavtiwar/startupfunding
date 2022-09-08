
import { Formik } from "formik";
import Swal from "sweetalert2";
import * as Yup from "yup";
import './Signup.css';
import c1 from "./images/email.png";
import msglogo from "./images/msglogo.png";
import passwordlogo from "../images/passwordlogo.png";
function InvestorSignup() {
  
  
    const handleFormSubmit = (formdata) => {
      console.log("Form submitted!!");
      console.log(formdata);
  
      fetch('http://localhost:5000/user/add', {
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
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={c1} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Signup Page</h1>
           <Formik
                initialValues={{
                firstname  : "",  
                lastname  : "",  
                email: "",
                  password: "",
                   }} //specifying initial value for form
                onSubmit={handleFormSubmit} // function to handle form submission
                // validationSchema={loginSchema}
              >
                 {({ values, handleChange, handleSubmit, errors, touched }) => (
                  <form onSubmit={handleSubmit}>
           <div>
             <img src={msglogo} alt="msglogo" className="email"/>
             <input type="text" placeholder="First name" className="name"/>
           </div>
           <div className="second-input">
             <img src={passwordlogo} alt="password" className="email"/>
             <input type="password" placeholder="Last name" className="name"/>
           </div>
           <div className="second-input">
             <img src={passwordlogo} alt="password" className="email"/>
             <input type="password" placeholder="email" className="name"/>
           </div>
           <div className="second-input">
             <img src={passwordlogo} alt="password" className="email"/>
             <input type="password" placeholder="password" className="name"/>
           </div>
          <div className="login-button">
          <button>Signup</button>
          </div>
           
            <p className="link">
              <a href="#">Forgot password ?</a> Or <a href="#">Sign Up</a><hr/>
            </p>
           
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