import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <header>
  
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarExample01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink className="nav-link" to="/main/home">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to="/main/startuplogin">
        Startup Login
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/main/startupSignup">
        Startup SignUp
      </NavLink>
    </li>
        </ul>
      </div>
    </div>
  </nav>
 
 
</header>
    </div>
  )
}

export default Header