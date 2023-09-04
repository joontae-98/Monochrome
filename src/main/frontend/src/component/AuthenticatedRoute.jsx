import React from 'react';
import AuthenticationService from "../service/AuthenticationService";
import {Navigate, Route} from "react-router";

function AuthenticatedRoute(props) {

  if (AuthenticationService.isUserLoggedIn()) {
    return <Route {...props}/>
  } else {
    return <Route element={<Navigate replace to={'/login'}/>}/>
  }
}

export default AuthenticatedRoute;