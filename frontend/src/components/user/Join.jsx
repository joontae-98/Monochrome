import React, {useState} from 'react';
import {JoinInput, LoginInput, LogoGray, PageInfo, PageTitle, UserLayout} from "../style/UserStyle";
import {Col, Row} from "react-bootstrap";

function Join(props) {

  const [joinInfo, setJoinInfo] = useState({
    email: '',
    password: '',
    name : '',
    phone : '',
  });

  const handleChange = (e) => {
    setJoinInfo({
      ...joinInfo,
      [e.target.name]: e.target.value
    });
  };

  return (
    <UserLayout>
      <LogoGray fontWeight={300} fontSize={'1.1rem'}>Monochrome</LogoGray>
      <PageTitle>회원가입</PageTitle>

      <PageInfo>
        회원 정보를 입력해주세요.
      </PageInfo>

      <Row className={'justify-content-center'}>
        <Col md={5}>
          <JoinInput type={"text"} name={"username"} value={joinInfo.email} onChange={handleChange} placeholder={"예) monochrome@gmail.com"}>
            이메일
          </JoinInput>
          <JoinInput type={"password"} name={"password"} value={joinInfo.password} onChange={handleChange} placeholder={"영문, 숫자, 특수문자 조합 8자리 이상"}>
            비밀번호
          </JoinInput>
          <JoinInput type={"text"} name={"username"} value={joinInfo.name} onChange={handleChange} placeholder={"이름을 입력해주세요."}>
            이름
          </JoinInput>
        </Col>
      </Row>

    </UserLayout>
  )
}

export default Join;