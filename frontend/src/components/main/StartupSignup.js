import { Formik } from "formik";
import Swal from "sweetalert2";
import * as Yup from "yup";

import profile from "./image/a.png";
import email from "./image/email.jpg";
import pass from "./image/pass.png";
function StartupSignup () {
  
  
    const handleFormSubmit = (formdata) => {
      console.log("Form submitted!!");
      console.log(formdata);
  
      fetch('http://localhost:5000/startup/add', {
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
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Signup Page</h1>
           <Formik
                initialValues={{
                    title:"",
                    description:"",
                    Email:"",
                    thumbnail:"",
                    year:"",
                    teamInfo:Object,
                     details:Array,
                    createdAt:new Date()
                   }} //specifying initial value for form
                onSubmit={handleFormSubmit} // function to handle form submission
                // validationSchema={loginSchema}
              >
                 {({ values, handleChange, handleSubmit, errors, touched }) => (
                  <form onSubmit={handleSubmit}>
           <div>
             <img src={email} alt="msglogo" className="email"/>
             <input type="text" placeholder="Title" className="title"/>
           </div>
           <div className="second-input">
             <img src={email} alt="msglogo" className="email"/>
             <input type="text" placeholder="Description" className="description"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="password" className="email"/>
             <input type="text" placeholder="Thumbnail" className="thumbnail"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="password" className="email"/>
             <input type="email" placeholder="email" className="Email"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="password" className="email"/>
             <input type="number" placeholder="Age" className="age"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="password" className="email"/>
             <input type="number" placeholder="Year" className="year"/>
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

export default StartupSignup;