import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import {Container} from "react-bootstrap";
import {Route, Routes} from "react-router";
import Main from "./components/Main";
import Login from "./components/Login";
import Test from "./components/Test";

function App() {

  return (
      <div className="App">
        <BrowserRouter>
          {/*header*/}
          <Header/>
          <Container fluid={'md'} className={'mx-auto'}>
            <Routes>
              <Route path={'/'} element={<Main/>}/>
              <Route path={'/login'} element={<Login/>}/>
              <Route path={'/test'} element={<Test/>}/>
            </Routes>
          </Container>
          {/*  footer*/}
        </BrowserRouter>
      </div>
  );
}

export default App;
