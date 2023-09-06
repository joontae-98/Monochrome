import React from 'react';
import AuthenticationService from "../service/AuthenticationService";
import {Link} from "react-router-dom";
import {AuthApi} from "../service/AuthApi";

function MenuComponent() {
  const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
  const logout = () => {
    localStorage.removeItem('token');
  }
  return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div><a href="http://www.in28minutes.com" className="navbar-brand">in28Minutes</a></div>
          <ul className="navbar-nav">
            <li><Link className="nav-link" to="/courses">Courses</Link></li>
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            <Link className="nav-link" to="/logout" onClick={logout}>Logout</Link>
            {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
            {isUserLoggedIn &&
                <li><Link className="nav-link" to="/logout" onClick={logout}>Logout</Link></li>}
          </ul>
        </nav>
      </header>
  )
}

export default MenuComponent;