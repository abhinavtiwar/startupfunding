import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link, Routes, Navigate } from "react-router-dom";
import Main from "./components/main";
import InvestorLogin from "./components/main/InvestorLogin";
import InvestorSignup from "./components/main/InvestorSignup";
import StartupLogin from "./components/main/StartupLogin";
import StartupSignup from "./components/main/StartupSignup";
import Admin from "./components/admin";
import Investor from "./components/investor";
import User from "./components/investor";
import AdminProfile from "./components/admin/Profile";
import UserProfile from "./components/investor/Profile";
import ResetPassword from "./components/main/ResetPassword";
import ContactUs from "./components/main/ContactUs";
import Home from "./components/main/Home";
import ManageInvestor from "./components/admin/ManageInvestor";
import ManageStartup from "./components/admin/ManageStartup";
import StartupProfile from "./components/startup/StartupProfile";
import InvestorProfile from "./components/investor/InvestorProfile";
import StartupAuthorisor from "./startupAuth";
import Listing from "./components/main/Listing";
import Startup from "./components/startup";
import InvestorAuthorisor from "./investorAuth";
import StartupDetail from "./components/startup/StartupDetail";
import { useState } from "react";
import { UserProvider } from "./context/userContext";
function App() {

  const [currentStartup, setCurrentStartup] = useState(JSON.parse(sessionStorage.getItem('startup')));

  return (
    <div>
      <UserProvider startupUser = {currentStartup}>
      <BrowserRouter>
        <Routes>
          <Route element={<Navigate to="/main/home" />} path="/" />
          <Route element={<Main />} path="main">
            <Route path="Investorlogin" element={<InvestorLogin />} />
            <Route path="Investorsignup" element={<InvestorSignup />} />
            <Route path="Startuplogin" element={<StartupLogin />} />
            <Route path="Startupsignup" element={<StartupSignup />} />
            <Route path="reset" element={<ResetPassword />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="home" element={<Home />} />

            <Route path="listing" element={<Listing />} />
          </Route>

          <Route element={<Admin />} path="admin">
            <Route path="pofile" element={<AdminProfile />} />
            <Route path="manageinvestor" element={<ManageInvestor />} />
            <Route path="managestartup" element={<ManageStartup />} />
          </Route>

          <Route element={<Startup />} path="startup">
            <Route
              path="startupprofile"
              element={
                <StartupAuthorisor>
                  <StartupProfile />
                </StartupAuthorisor>
              }
            />
            <Route path="sdetail" element={<StartupDetail />} />
          </Route>

          <Route element={<Investor />} path="investor">
            <Route
              path="investorProfile"
              element={
                <InvestorAuthorisor>
                  <InvestorProfile />
                </InvestorAuthorisor>
              }
            />
          </Route>

          {/* ljdshngd */}
          <Route element={<User />} path="user">
            <Route path="pofile" element={<UserProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
