
import profile from "./image/a.png";
import email from "./image/email.jpg";
import pass from "./image/pass.png";
import { Link } from "react-router-dom";
function InvestorLogin() {
  return (
    <div className="main">
      <div className="sub-main-Login">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Login Page</h1>
            <div>
              <img src={email} alt="email" className="email" />
              <input type="email" placeholder="Investor email" className="name mt-3 " />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email " />
              <input type="password" placeholder="password" className="name mt-1" />
            </div>
            <h6> 
                    <Link to="/main/reset">Reset Password</Link>
                    </h6>
            <div className="login-button mt-2">
              <button>Login</button>
            </div>

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
