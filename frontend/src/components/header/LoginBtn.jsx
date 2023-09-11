import React from 'react';
import {isUserLoggedIn, logout} from "../../service/AuthApi";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function LoginBtn() {

  return (
    isUserLoggedIn() ?
    <Button onClick={logout}>Logout</Button>
    : <Link to={'/login'}>
        <h6>Login</h6>
      </Link>
  )
}

export default LoginBtn;