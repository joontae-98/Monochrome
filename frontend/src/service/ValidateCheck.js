/* 유효성 검사를 위한 함수 모음 */

import {type} from "@testing-library/user-event/dist/type";

/*export function validateCheck(type, value){
  let result = {};
  return result;
}*/

const result = {
  state : "fail",
  message : null
};

export function emailCheck(value){

  const emailRegExp =
    /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

  if(!emailRegExp.test(value)){
    result.message = "이메일 형식이 올바르지 않습니다."
  } else {
    // 이메일 중복 체크
    result.state = "success";
    result.message = "사용 가능한 이메일입니다.";
  }

  return result;
}

export function passwordCheck(value){

  const passwordRegExp =
    /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

  if(!passwordRegExp.test(value)){
    result.message = "숫자, 영문자, 특수문자 모두 포함 8자리 이상!"
  } else {
    result.state = "success";
    result.message = "사용 가능한 비밀번호입니다.";
  }

  return result;
}

export function nameCheck(value){

  // const phoneRegExp = /^[0-9]{10, 11}$/;

  if(value.length <2){
    result.message = "이름은 2글자 이상 입력해주세요."
  } else {
    result.state = "success";
    result.message = "사용 가능한 이름입니다.";
  }

  return result;
}

export function phoneCheck(value){

  const phoneRegExp = /^[0-9]{10, 11}$/;

  if(!phoneRegExp.test(value)){
    result.message = "숫자만 입력해주세요."
  } else {
    result.state = "success";
    result.message = "사용 가능한 번호입니다.";
  }

  return result;
}