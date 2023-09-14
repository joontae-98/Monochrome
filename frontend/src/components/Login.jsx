import React, {useState} from 'react';
import {login} from "../service/AuthApi";
import {InfoLink, LoginInput, LoginLogo, PageInfo, UserLayout} from "./style/UserStyle";
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function Login(props) {
  const [loginInfo, setLoginInfo] = useState({
    email: '1@1.1',
    password: ''
  });

  const handleChange = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value
    });
  };

  const loginClicked = () => {
    /*
    //axios 인터셉터 방식
    AuthenticationService.executeJwtAuthenticationService(state.email, state.password)
        .then((res) => {
          console.log(res);
          localStorage.setItem('token', res.data.token);
        }).catch(error => {
      console.log(error);
    });*/

    // axios create를 이용한 방식
    // 참고 링크 https://velog.io/@sihoon_cho/React-SpringBoot-JWT-%EC%9D%B8%EC%A6%9D-%EA%B5%AC%ED%98%84-React%EC%97%90%EC%84%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
    login(loginInfo)
        .then(res => {
          localStorage.setItem('token', res.token);
          window.location.href = '/';
        })
        .catch(err => {
          console.log(err);
        });
  };

  const testClicked = () => {
    localStorage.removeItem('token')
  }

  return (<div>
    <UserLayout>
      <LoginLogo>Monochrome</LoginLogo>

      <PageInfo>
        로그인 정보를 입력해주세요.
      </PageInfo>

      <Row className={'justify-content-center'}>
        <Col sm={4}>
          <LoginInput type={"text"} name={"username"} value={loginInfo.email} onChange={handleChange}>
            이메일
          </LoginInput>
          <LoginInput type={"password"} name={"password"} value={loginInfo.password} onChange={handleChange}>
            비밀번호
          </LoginInput>

          <div className={'d-grid gap-2 pt-3'}>
            <button className="btn btn-dark user-btn1" onClick={loginClicked}>LOGIN</button>
            <Link to={'/join'}>
              <InfoLink>회원가입</InfoLink>
            </Link>
          </div>
        </Col>
      </Row>

      {/*<button type={'button'} className={'btn btn-primary'} onClick={testClicked}>test</button>*/}

    </UserLayout>
  </div>)
}

export default Login;