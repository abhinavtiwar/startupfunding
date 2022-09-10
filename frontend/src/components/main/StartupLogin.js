import profile from "./image/a.png";
import email from "./image/email.jpg";
import pass from "./image/pass.png";
import { Link } from "react-router-dom";
function StartupLogin() {
  return (
    <div className="main">
      <div className="sub-main">
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
              <input type="text" placeholder="Investor name" className="name" />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email " />
              <input type="password" placeholder="password" className="name" />
            </div>
            <div className="login-button">
              <button>Login</button>
            </div>

            <h3 className="text-center text-muted">
              Don't have an account?<Link to="/main/InvestorSignup">Sign up</Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartupLogin;
