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
export const login = ({email, password}) => {
  const data = {email, password};
  console.log(data);
  return AuthApi.post(`/auth/authenticate`, data);
}