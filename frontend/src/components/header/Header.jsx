import React from 'react';
import AuthenticationService from "../../service/AuthenticationService";
import {Link} from "react-router-dom";
import {Container, Navbar} from "react-bootstrap";
import Logo from "./Logo";
import HeaderRight from "./HeaderRight";

function Header() {
  const logout = () => {
    const token = localStorage.getItem('token');
    console.log(`token : ${token}`);
  }

  return (
      <Container fluid={'md'} className={'mx-auto'}>
        <Navbar>
          <Container className={'py-3'}>
            <Logo/>
            <HeaderRight/>
          </Container>
        </Navbar>
        {/*<nav className="navbar navbar-expand-md navbar-dark bg-dark">*/}
        {/*  <div><a href="http://www.in28minutes.com" className="navbar-brand">in28Minutes</a></div>*/}
        {/*  <ul className="navbar-nav">*/}
        {/*    <li><Link className="nav-link" to="/courses">Courses</Link></li>*/}
        {/*  </ul>*/}
        {/*  <ul className="navbar-nav navbar-collapse justify-content-end">*/}
        {/*    <button type={'button'} className={'btn btn-primary'} onClick={logout}>token</button>*/}
        {/*    /!*{!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}*!/*/}
        {/*    /!*{isUserLoggedIn &&*!/*/}
        {/*    /!*    <li><Link className="nav-link" to="/logout" onClick={logout}>Logout</Link></li>}*!/*/}
        {/*  </ul>*/}
        {/*</nav>*/}
      </Container>
  )
}

export default Header;