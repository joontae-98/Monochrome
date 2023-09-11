import React from 'react';
import styled from "styled-components";

export const UserLayout = styled.div`
  margin: 7rem auto;
`;

export const LoginLogo = styled.h2 `
  font-family: 'GmarketSans';
  font-weight: 800;
  letter-spacing: -0.12rem;
  font-size: 2.3rem;
  text-align: center;
  margin-bottom: 0.2rem;
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
const LoginInputTitle = styled.h5`
  font-weight: bold;
  margin-bottom: 0;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  color : #555;
`;

const LoginInputStyle = styled.input `
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
      <LoginInputTitle>
        {children}
      </LoginInputTitle>

      <LoginInputStyle type={props.type} name={props.name} value={props.value} onChange={props.onChange}/>
    </div>
  )
}
