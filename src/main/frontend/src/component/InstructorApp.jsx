import React from 'react';
import {Route, Routes} from "react-router";
import AuthenticatedRoute from "./AuthenticatedRoute";
import ListCoursesComponent from "./ListCoursesComponent";
import LogoutComponent from "./LogoutComponent";
import LoginComponent from "./LoginComponent";
import MenuComponent from "./MenuComponent";
import {BrowserRouter} from "react-router-dom";


function InstructorApp() {

  return (
      <>
        <BrowserRouter>
          <>
            <MenuComponent/>
            <Routes>
              <Route path={'/'} element={<LoginComponent/>}/>
              <Route path={'/login'} element={<LoginComponent/>}/>
              {/*<AuthenticatedRoute path={'/logout'} element={<LogoutComponent/>}/>*/}
              {/*<AuthenticatedRoute path={'/courses'} element={<ListCoursesComponent/>}/>*/}
            </Routes>
          </>
        </BrowserRouter>
      </>
  )
}

export default InstructorApp;