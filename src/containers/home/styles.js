import styled from "styled-components";
import { Link } from "react-router-dom"
import ImageGoogle from "../../assets/google.png";
import Arrow from "../../assets/arrow.png"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  gap: 1rem;
`;

export const Image = styled.img`
  margin: 2rem 0 1rem 0;
`;

export const H1 = styled.h1`
  font: 700 1.7rem "Roboto", sans-serif;
  letter-spacing: 1px;
`;

export const ContainerInputs = styled.div`
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

export const InputLabel = styled.p`
  letter-spacing: 1px;
  font: 500 0.9rem "Roboto", sans-serif;
  margin-top: 0.4rem;
`;

export const Inputs = styled.input`
  width: 20rem;
  margin-top: 0.4rem;

  background-color: transparent;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;

  transition: all 0.7s;

  &:hover {
    width: 25rem;
  }
`;

export const ButtonLogin = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 3rem;

  border: none;
  border-radius: 4px;
  background: #d93856;
  background-image: url("${Arrow}");
  background-repeat: no-repeat;
  background-position: 12rem;
  cursor: pointer;

  font: 500 1rem "Roboto", sans-serif;
  letter-spacing: 1px;

  transition: all 0.7s;

  &:hover {
    background-color: #882335;
    background-position: 17rem;
  }

  &:active {
    opacity: 0.2;
  }
`;

export const ButtonLoginGoogle = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 3rem;

  border: none;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.14);
  background-image: url("${ImageGoogle}");
  background-repeat: no-repeat;
  background-position: 2.5rem;
  cursor: pointer;

  font: 500 0.9rem "Roboto", sans-serif;
  letter-spacing: 1px;

  transition: all 0.7s;

  &:hover {
    background-color: rgb(90, 90, 90);
  }

  &:active {
    opacity: 0.2;
  }
`;

export const CreateLogin = styled(Link)`
  font-weight: 700;
  cursor: pointer;

  transition: all 0.7s;

  &:hover {
    color: gray;
  }

  &:active {
    opacity: 0.2;
  }
`;

export const PCreateLogin = styled.p`
  font: 500 0.9rem "Roboto", sans-serif;
  letter-spacing: 1px;

  margin: 2rem 0;
`;
