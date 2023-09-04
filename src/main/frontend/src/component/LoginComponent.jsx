import React, {useState} from 'react';
import AuthenticationService from "../service/AuthenticationService";
import axios from "axios";

function LoginComponent(props) {
  const [state, setState] = useState({
    email: '1@1.1',
    password: '',
    hasLoginFailed: false,
    showSuccessMessage: false
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const loginClicked = () => {
    AuthenticationService.executeJwtAuthenticationService(state.email, state.password)
        .then((res) => {
          console.log(res);

          localStorage.setItem('token', res.data.token);
          // AuthenticationService.registerSuccessfulLoginForJwt(res);

        }).catch(error => {
      console.log(error);
      setState(
          {
            ...state,
            showSuccessMessage: false,
            hasLoginFailed: true
          }
      );
    });
  };

  const testClicked = () => {
    AuthenticationService.setupAxiosInterceptors();
    axios.get('http://localhost:8080/test')
        .then(res => {
              console.log(res);
            }
        )
        .catch(err => {
          console.log(err);
        });
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

export default LoginComponent;