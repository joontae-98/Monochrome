import axios from "axios";

let ACCESS_TOKEN = localStorage.getItem("token");

/** CREATE CUSTOM AXIOS INSTANCE */
export const AuthApi = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${ACCESS_TOKEN}`,
  },
});

/** LOGIN API */
// promise 객체로 리턴하기 위해 async await 사용
export const login = async ({email, password}) => {
  const data = {email, password};
  const response = await AuthApi.post(`/auth/authenticate`, data);
  return response.data;
}