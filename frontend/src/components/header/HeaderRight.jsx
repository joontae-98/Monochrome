import React from 'react';
import {Navbar} from "react-bootstrap";
import LoginBtn from "./LoginBtn";

function HeaderRight() {

  return (
      <Navbar.Collapse className={'justify-content-end'}>
        <h6>Cart</h6>
        <h6>MyPage</h6>
        <LoginBtn/>
      </Navbar.Collapse>
  )
}

export default HeaderRight;