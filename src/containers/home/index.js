import React from "react";
import Logo from "../../assets/login.svg";

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
const App = () => {
  return (
    <Container>
      <Image alt="logo" src={Logo} />

      <H1>Welcome Back 😃</H1>

      <ContainerInputs>
        <InputLabel>E-mail</InputLabel>
        <Inputs type="email" />

        <InputLabel>Password</InputLabel>
        <Inputs type="password" />
      </ContainerInputs>

      <ButtonLogin to="/login">Log in</ButtonLogin>
      <ButtonLoginGoogle to="/google-login">Log in with Google</ButtonLoginGoogle>
      <PCreateLogin>
        Newbie?<CreateLogin to="/create-account"> Create Account</CreateLogin>
      </PCreateLogin>
    </Container>
  );
};

export default App;
