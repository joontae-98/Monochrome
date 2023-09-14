import React from 'react';
import {Link} from "react-router-dom";
import MainSlide from "./MainSlide";

function Main() {

  return (<>
    <div>main</div>

    <Link to={'/test'}>test</Link>
    <br/>

    <Link to={'/login'}>login</Link>

    <MainSlide/>
  </>)
}

export default Main;