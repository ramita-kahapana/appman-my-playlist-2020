import React from "react";
import {
  ContainerLogin,
  RightContainer,
  Logo,
  LeftContainer,
  SignContainer,
  HeadSign,
  Input,
  ButtonSubmit,
} from "../Login/styled";

export default function Register() {
  return (
    <>
      <ContainerLogin>
        <RightContainer>
          <Logo> Music </Logo>
        </RightContainer>
        <LeftContainer>
          <SignContainer>
            <HeadSign>Register</HeadSign>
            <Input placeholder="Username.."></Input>
            <Input placeholder="Password.."></Input>
            <Input placeholder="Confirm Password.."></Input>
            <ButtonSubmit>Submit</ButtonSubmit>
          </SignContainer>
        </LeftContainer>
      </ContainerLogin>
    </>
  );
}
