import React from 'react';
import {Link} from "react-router-dom";
import {Navbar} from "react-bootstrap";

function Logo() {

  return (<Navbar.Brand>
    <Link to={'/'} className={'logo'}>Monochrome</Link>
  </Navbar.Brand>)
}

export default Logo;