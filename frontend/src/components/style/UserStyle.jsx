import React, {useState} from 'react';
import styled from "styled-components";
import {emailCheck, nameCheck, passwordCheck, phoneCheck} from "../../service/ValidateCheck";

export const UserLayout = styled.div`
  margin: 7rem auto;
`;

export const LoginLogo = styled.h2 `
  font-family: 'GmarketSans';
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 800)};
  letter-spacing: -0.12rem;
  font-size: ${(props) => (props.fontSize ? props.fontSize : `2.3rem`)};
  text-align: center;
  margin-bottom: 0.3rem;
`;

export const LogoGray = styled(LoginLogo)`
  color: #b2b2b2;
  letter-spacing: 0.01rem;
  margin-bottom: 0.5rem;
`;

export const PageTitle = styled.h2 `
  font-weight: 800;
  letter-spacing: -0.05rem;
  font-size: 2.3rem;
  text-align: center;
  margin-bottom: 0.7rem;
`;

export const PageInfo = styled.p `
  text-align: center;
  margin-bottom: 1.5rem;
  color: #777;
  font-size: 1.1rem;
  font-weight: 400;
`;

export const InfoLink = styled.p `
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  color: #777;
  font-size: 1.1rem;
  font-weight: 400;
`;

/* login input */
const UserInputTitle = styled.h5`
  font-weight: bold;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.0rem;
  color : #555;
`;

const UserInputStyle = styled.input `
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #c2c2c2;
  margin-bottom: 1.2rem;
  padding: 0.3rem 0;

  &:active,
  &:focus {
    outline: none;
    border-bottom: 1px solid #555;
  }

  &:focus::placeholder {
    color :transparent;
  }
`;

export function LoginInput({children, ...props}) {
  return (
    <div>
      <UserInputTitle>
        {children}
      </UserInputTitle>

      <UserInputStyle type={props.type} name={props.name} defaultValue={props.value} onChange={props.onChange} onBlur={props.onChange}/>
    </div>
  )
}

/* join */

const CheckMessage = styled.p `
  margin-bottom: 0.9rem;
  color: ${ (props) => (props.$state ? "green" : "red")};
  font-size: 0.90rem;
  font-weight: 400;
  height: 1.1rem;
`;

const JoinInputStyle = styled(UserInputStyle)`
  margin-bottom: 0.4rem;
`;

export function JoinInput({children, checkFunction, index, name, ...props}) {

  const [checkData, setCheckData] = useState({
    state : false,
    message : "",
  });

  /*const typeFuncion = {
    email : emailCheck,
    password : passwordCheck,
    name : nameCheck,
    phone : phoneCheck
  };*/

  const changeMessageResult = (value) => {

    let result;

      switch (name){
        case "email" :
          result =  emailCheck(value);
          break;

        case "password" :
          result =  passwordCheck(value);
          break;

        case "name" :
          result = nameCheck(value);
          break;

        case "phone" :
          result = phoneCheck(value);
          break;
      };

    setCheckData({
      state : result.state,
      message : result.message
    });

    // console.log(result.state);
    checkFunction(index, result.state);
  };

  return (
    <div>
      <UserInputTitle>
        {children}
      </UserInputTitle>

      <JoinInputStyle type={props.type} name={name} defaultValue={props.value} onBlur={(e) => {
        changeMessageResult(props.value);
      }} onKeyUp={(e) => {
        props.onChange(e);
        changeMessageResult(props.value);
      }} placeholder={props.placeholder}/>

      <div>
        {/* styled 요소로만 사용하는 state 값은 $를 붙여 명시해주어야 react 문법에 맞다 */}
        <CheckMessage $state={checkData.state}>
          {checkData.message}
        </CheckMessage>
      </div>
    </div>
  )
};
