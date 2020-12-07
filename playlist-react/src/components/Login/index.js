import React from "react";
import { Link } from "react-router-dom";
import {
  ContainerLogin,
  RightContainer,
  Logo,
  LeftContainer,
  SignContainer,
  HeadSign,
  Input,
  ButtonSubmit,
} from "./styled";

export default function Login() {
  return (
    <>
      <ContainerLogin>
        <RightContainer>
          <Logo> Music </Logo>
        </RightContainer>
        <LeftContainer>
          <SignContainer>
            <HeadSign>Login</HeadSign>
            <Input placeholder="Username.."></Input>
            <Input placeholder="Password.."></Input>
            <ButtonSubmit>Submit</ButtonSubmit>
            <Link to="/register">Created new account</Link>
          </SignContainer>
        </LeftContainer>
      </ContainerLogin>
    </>
  );
}
