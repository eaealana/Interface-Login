import styled from "styled-components";
import { Link } from "react-router-dom"

export const Span = styled.span`
  color: #238ac2;
  font-weight: 700;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  gap: 1rem;
`;

// header
export const Header = styled.div`
  display: flex;
  align-self: flex-start;
  width: 100vw;
  padding: 1rem;
  border-bottom: 1px solid #808080;
`;

export const Image = styled.img`
  margin-right: 0.7rem;
`;

export const LoginWithGoogle = styled.p`
  font: 500 0.9rem "Roboto", sans-serif;

  letter-spacing: 1px;
  color: #808080;
`;

export const H1Login = styled.h1`
  margin-top: 2rem;
  font: 500 2rem "Roboto", sans-serif;
  letter-spacing: 1px;
  color: #000;
`;

export const ProceedToApp = styled.p`
  margin-bottom: 1rem;
  font: 500 0.9rem "Roboto", sans-serif;
  letter-spacing: 1px;
  color: #808080;
`;

// inputs
export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextEmail = styled.p`
  font: 500 0.7rem "Roboto", sans-serif;
  letter-spacing: 1px;
  color: #238ac2;
  background-color: #fff;

  margin: 0.4rem 0 0 0.6rem;
  padding: 0.2rem;
  position: absolute;
`;

export const TextPassword = styled.p`
  font: 500 0.7rem "Roboto", sans-serif;
  letter-spacing: 1px;
  color: #238ac2;
  background-color: #fff;

  margin: 4.9rem 0 0 0.6rem;
  padding: 0.2rem;
  position: absolute;
`;

export const Inputs = styled.input`
  padding: 1rem 0.5rem;
  width: 24rem;
  height: 2.5rem;
  margin: 1rem 0;

  background-color: #add8e6;
  border: 1px solid #238ac2;
  border-radius: 2px;
  color: #000;
  outline: none;

  transition: border 0.7s;

  &:hover {
    border: 2px solid #238ac2;
  }
`;

export const ForgotPassword = styled.p`
  font: 700 0.8rem "Roboto", sans-serif;
  color: #238ac2;
  cursor: pointer;

  margin: 0 3.7rem;
  align-self: flex-start;

  transition: all 0.7s;

  &:hover {
    color: #808080;
  }

  &:active {
    opacity: 0.5;
  }
`;

// text
export const Text = styled.p`
  margin: 1rem;
  font: 500 0.8rem "Roboto", sans-serif;
  letter-spacing: 1px;
  color: #808080;
`;

// button
export const ButtonLogin = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 17rem;
  height: 3rem;
  margin: 2rem 0;

  border: none;
  border-radius: 4px;
  background: #000;
  cursor: pointer;

  font: 700 0.9rem "Roboto", sans-serif;
  letter-spacing: 2px;

  transition: opacity 0.7s;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.2;
  }
`;
