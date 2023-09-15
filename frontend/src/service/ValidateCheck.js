/* 유효성 검사를 위한 함수 모음 */

import {type} from "@testing-library/user-event/dist/type";
import {AuthApi} from "./AuthApi";

/*export function validateCheck(type, value){
  let result = {};
  return result;
}*/

const result = {
  state : false,
  message : null
};

const regExpType = {
  email : /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/,
  password : /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/,
  phone : /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/,
}

// 아이디 중복 확인 함수 추가
export const emailDuplicate = async (email) => {
  const data = {email}
  const response = await AuthApi.post(`/auth/check/emailCheck`, data);
  /*console.log(response.data);*/
  return response.data;
}

export function emailCheck(value){

  if(!regExpType.email.test(value)){
    result.state = false;
    result.message = "이메일 형식이 올바르지 않습니다."
  } else {
    // 이메일 중복 체크
    if (emailDuplicate(value)){
      result.state = true;
      result.message = "사용 가능한 이메일입니다.";
    } else {
      result.state = false;
      result.message = "이미 사용중인 이메일입니다."
    }
  }

  return result;
}

export function passwordCheck(value){

  if(!regExpType.password.test(value)){
    result.state = false;
    result.message = "숫자, 영문자, 특수문자 포함 8자리 이상!"
  } else {
    result.state = true;
    result.message = "사용 가능한 비밀번호입니다.";
  }

  return result;
}

export function phoneCheck(value){

  if(regExpType.phone.test(value)){
    result.state = true;
    result.message = "사용 가능한 번호입니다.";
  } else {
    result.state = false;
    result.message = "숫자만 입력해주세요."
  }

  return result;
}

export function nameCheck(value){

  if(value.length <2){
    result.state = false;
    result.message = "이름은 2글자 이상 입력해주세요."
  } else {
    result.state = true;
    result.message = "사용 가능한 이름입니다.";
  }

  return result;
}
