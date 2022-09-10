import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Main from './components/main';
import InvestorLogin from './components/main/InvestorLogin';
import InvestorSignup from './components/main/InvestorSignup';
import StartupLogin from './components/main/StartupLogin';
import StartupSignup from './components/main/StartupSignup';
import Admin from './components/admin';
import User from './components/user';
import AdminProfile from './components/admin/Profile';
import UserProfile from './components/user/Profile';
import ResetPassword from './components/main/ResetPassword';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route element={<Main />} path="main">
            <Route path="Investorlogin" element={<InvestorLogin />} />
            <Route path="Investorsignup" element={<InvestorSignup />} />
            <Route path="Startuplogin" element={<StartupLogin />} />
            <Route path="Startupsignup" element={<StartupSignup />} />
            <Route path="reset" element={<ResetPassword />} />
          </Route>
          
          <Route element={<Admin />} path="admin">
            <Route path="pofile" element={<AdminProfile />} />
          
          </Route>
          {/* ljdshngd */}
          <Route element={<User />} path="user">
            <Route path="pofile" element={<UserProfile />} />
          
          </Route>

          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
