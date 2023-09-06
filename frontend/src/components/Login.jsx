import React, {useState} from 'react';
import {login} from "../service/AuthApi";

function Login(props) {
  const [state, setState] = useState({
    email: '1@1.1',
    password: ''
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const loginClicked = () => {
    //axios 인터셉터 방식
    // AuthenticationService.executeJwtAuthenticationService(state.email, state.password)
    //     .then((res) => {
    //       console.log(res);
    //       localStorage.setItem('token', res.data.token);
    //     }).catch(error => {
    //   console.log(error);
    // });

    // axios create를 이용한 방식
    // 참고 링크 https://velog.io/@sihoon_cho/React-SpringBoot-JWT-%EC%9D%B8%EC%A6%9D-%EA%B5%AC%ED%98%84-React%EC%97%90%EC%84%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
    login(state)
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
    <h1>Login</h1>
    <div className="container">
      {state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
      {state.showSuccessMessage && <div>Login successful</div>}
      User Name: <input type="text" name="username" value={state.email} onChange={handleChange}></input>
      Password: <input type="password" name="password" value={state.password} onChange={handleChange}></input>
      <button className="btn btn-success" onClick={loginClicked}>Login</button>
      <button type={'button'} className={'btn btn-primary'} onClick={testClicked}>test</button>

    </div>
  </div>)
}

export default Login;