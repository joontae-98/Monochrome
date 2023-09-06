import axios from "axios";

let ACCESS_TOKEN = localStorage.getItem("token");

// 권한이 필요없는 API 요청일 경우 PREFIX를 null로 변경하여 error 처리
let PREFIX = ACCESS_TOKEN != null ? 'Bearer' : null;
/** CREATE CUSTOM AXIOS INSTANCE */
export const AuthApi = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `${PREFIX} ${ACCESS_TOKEN}`,
  },
});


/** LOGIN API */
// promise 객체로 리턴하기 위해 async await 사용
export const login = async ({email, password}) => {
  const data = {email, password};
  const response = await AuthApi.post(`/auth/authenticate`, data);
  return response.data;
}

export const logout = () => {
  localStorage.removeItem('token');
  window.location.href = '/';
}
export const goToLogin = (error) => {
  if (error.response.status === 403) {
    window.location.href = "/login"; // redirect
  } else {
    console.log("http error");
    console.log(error);
  }
}