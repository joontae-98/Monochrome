import axios from "axios";

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

class AuthenticationService {

  //로그인 요청 함수
  executeJwtAuthenticationService(email, password) {
    return axios.post('/auth/authenticate',
        {email, password}
    );
  }

  //수정 필요
  registerSuccessfulLoginForJwt(res) {
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, res.email);
    this.setupAxiosInterceptors(res.token);
  }

  setupAxiosInterceptors() {
    axios.interceptors.request.use(
        config => {
          const token = localStorage.getItem('token');
          console.log(token);
          if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;

          }
          // config.headers['Content-Type'] = 'application/json';
          return config;
        },
        error => {
          Promise.reject(error)
        });
  }

  //수정 필요
  isUserLoggedIn() {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) return false;
    return true;
  }

  //수정 필요
  logout() {
    sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
  }
}

export default new AuthenticationService();