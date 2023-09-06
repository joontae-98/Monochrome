import React from 'react';
import {Link} from "react-router-dom";

function Main() {

  return (<>
    <div>main</div>

    <Link to={'/test'}>test</Link>
    <br/>

    <Link to={'/login'}>login</Link>
  </>)
}

export default Main;