import React from 'react';
import {Route, Routes} from "react-router";
import AuthenticatedRoute from "./AuthenticatedRoute";
import ListCoursesComponent from "./ListCoursesComponent";
import LogoutComponent from "./LogoutComponent";
import LoginComponent from "./LoginComponent";
import MenuComponent from "./MenuComponent";
import {BrowserRouter} from "react-router-dom";
import MonochromeMain from "./MonochromeMain";
import {Container} from "react-bootstrap";
import Test from "./Test";


function InstructorApp() {

  return (
      <>
        <BrowserRouter>
          {/*header*/}
          <MenuComponent/>
          <Container fluid={'md'} className={'mx-auto'}>
            <Routes>
              <Route path={'/'} element={<MonochromeMain/>}/>
              <Route path={'/auth/login'} element={<LoginComponent/>}/>
              <Route path={'/main/main'} element={<MonochromeMain/>}/>
              <Route path={'/test'} element={<Test/>}/>
              {/*<AuthenticatedRoute path={'/logout'} element={<LogoutComponent/>}/>*/}
              {/*<AuthenticatedRoute path={'/courses'} element={<ListCoursesComponent/>}/>*/}
            </Routes>
          </Container>
          {/*  footer*/}
        </BrowserRouter>
      </>
  )
}

export default InstructorApp;