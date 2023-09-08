import React from 'react';
import {isUserLoggedIn} from "../../service/AuthApi";

function LoginBtn() {

  return isUserLoggedIn() ? <h6>logout</h6> : <h6>login</h6>
}

export default LoginBtn;