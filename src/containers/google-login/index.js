import React from "react";
import Google from "../../assets/google.png";

import {
  Container,
  // header
  Header,
  Image,
  LoginWithGoogle,
  // main
  H1Login,
  ProceedToApp,
  // inputs
  ContainerInputs,
  TextEmail,
  TextPassword,
  Inputs,
  // text
  ForgotPassword,
  Text,
  // login
  ButtonLogin,
  // span
  Span,
} from "./styles";
const GoogleLogin = () => {
  return (
    <Container>
      <Header>
        <Image src={Google} />
        <LoginWithGoogle>Login with Google</LoginWithGoogle>
      </Header>

      <H1Login>Login</H1Login>
      <ProceedToApp>
        Proceed to <Span>App</Span>
      </ProceedToApp>

      <ContainerInputs>
        <TextEmail>E-mail</TextEmail>
        <Inputs type="email" />

        <TextPassword>Password</TextPassword>
        <Inputs type="password" />
      </ContainerInputs>

      <ForgotPassword>Forgot password?</ForgotPassword>

      <Text>
        To continue, Google will share your name, address and email address and
        your profile picture with the App. Please review the app's{" "}
        <Span>Privacy Policy </Span>and <Span>Terms of Service </Span>before
        using it.
      </Text>

      <ButtonLogin to="/">Login</ButtonLogin>
    </Container>
  );
};

export default GoogleLogin;
