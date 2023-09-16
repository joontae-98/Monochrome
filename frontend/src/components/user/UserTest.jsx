import React from 'react';
import {Button} from "react-bootstrap";
import {emailDuplicate} from "../../service/ValidateCheck";

function UserTest(props) {

  return (
    <>
      <h1>테스트 페이지</h1>
      <Button className={'btn btn-primary'} onClick={(e) => {
        emailDuplicate('1@1.1');
      }}>테스트 버튼</Button>
    </>
  )
}

export default UserTest;