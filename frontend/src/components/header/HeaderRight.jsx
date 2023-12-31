import React from 'react';
import {Navbar} from "react-bootstrap";
import LoginBtn from "./LoginBtn";

function HeaderRight() {

  return (
      <Navbar.Collapse className={'justify-content-between'}>
        <div>
          <h6>Category</h6>
        </div>
        <div className={'d-flex'}>
          <h6>Cart</h6>
          <h6>MyPage</h6>
          <LoginBtn/>
        </div>

      </Navbar.Collapse>
  )
}

export default HeaderRight;