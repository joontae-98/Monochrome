import React, {useState} from 'react';
import {JoinCheckMessage, JoinInput, LoginInput, LogoGray, PageInfo, PageTitle, UserLayout} from "../style/UserStyle";
import {Col, Row} from "react-bootstrap";

function Join(props) {

  const [joinInfo, setJoinInfo] = useState({
    email: '',
    password: '',
    name : '',
    phone : '',
  });

  const [checkValidate, setCheckValidate] = useState({
    email: 'fail',
    password: 'fail',
    name : 'fail',
    phone : 'fail',
  });

  const handleChange = (e) => {
    setJoinInfo({
      ...joinInfo,
      [e.target.name]: e.target.value
    });
  };

  const checkFunction = (type, value) => {
    setCheckValidate({
      ...checkValidate,
      [type] : value
    });
    console.log(" 테스트 결과 : " + type + "," + value);
  };

  return (
    <UserLayout>
      <LogoGray fontWeight={300} fontSize={'1.1rem'}>Monochrome</LogoGray>
      <PageTitle>회원가입</PageTitle>

      <PageInfo>
        회원 정보를 입력해주세요.
      </PageInfo>

      <Row className={'justify-content-center px-2'}>
        <Col md={5}>
          {/* 이메일 영역 */}
          <JoinInput type={"text"} name={"email"} value={joinInfo.email} onChange={handleChange} checkFunction={checkFunction} placeholder={"예) monochrome@gmail.com"}>
            이메일
          </JoinInput>
          {/*<JoinCheckMessage type={"email"} value={joinInfo.email} checkFunction={checkFunction}/>*/}

          {/* 비밀번호 영역 */}
          <JoinInput type={"password"} name={"password"} value={joinInfo.password} onChange={handleChange} placeholder={"영문, 숫자, 특수문자 조합 8자리 이상"}>
            비밀번호
          </JoinInput>

          {/* 이름 영역 */}
          <JoinInput type={"text"} name={"name"} value={joinInfo.name} onChange={handleChange} placeholder={"이름을 입력해주세요."}>
            이름
          </JoinInput>

          {/* 핸드폰 번호 영역 */}
          <JoinInput type={"text"} name={"phone"} value={joinInfo.phone} onChange={handleChange} placeholder={"-를 제외한 휴대폰 번호를 입력해주세요."}>
            휴대폰 번호
          </JoinInput>
        </Col>
      </Row>

    </UserLayout>
  )
}

export default Join;