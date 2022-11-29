import React from "react";
import Logo from "../../assets/warning.png";

import { Container, Image, H1, ButtonLogin } from "./styles";
const Login = () => {
  return (
    <Container>
      <Image alt="logo" src={Logo} />
      <H1>Oops, we are under construction</H1>
      <H1>Come back later!</H1>
      <ButtonLogin to="/">Go back</ButtonLogin>
    </Container>
  );
};

export default Login;
