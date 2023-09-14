import React from 'react';
import styled from "styled-components";

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
`;

export function LoginInput({children, ...props}) {
  return (
    <div>
      <UserInputTitle>
        {children}
      </UserInputTitle>

      <UserInputStyle type={props.type} name={props.name} defaultValue={props.value} onChange={props.onChange}/>
    </div>
  )
}

export function JoinInput({children, ...props}) {
  return (
    <div>
      <UserInputTitle>
        {children}
      </UserInputTitle>

      <UserInputStyle type={props.type} name={props.name} defaultValue={props.value} onChange={props.onChange} placeholder={props.placeholder}/>
    </div>
  )
}
