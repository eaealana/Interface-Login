import React from "react";
import Logo from "../../assets/login2.svg";

import {
  Container,
  Image,
  H1,
  ContainerInputs,
  InputLabel,
  Inputs,
  ButtonLogin,
  ButtonLoginGoogle,
  CreateLogin,
  PCreateLogin,
} from "./styles";
const CreateAccount = () => {
  return (
    <Container>
      <Image alt="logo" src={Logo} />

      <H1>Let’s Get Started</H1>

      <ContainerInputs>
        <InputLabel>E-mail</InputLabel>
        <Inputs type="email" />

        <InputLabel>Password</InputLabel>
        <Inputs type="password" />
      </ContainerInputs>

      <ButtonLogin to="/login">Create Account</ButtonLogin>
      <ButtonLoginGoogle to="/google-login">Create with Google</ButtonLoginGoogle>
      <PCreateLogin>
        Are you a Member?<CreateLogin to="/"> Log In</CreateLogin>
      </PCreateLogin>
    </Container>
  );
};

export default CreateAccount;
