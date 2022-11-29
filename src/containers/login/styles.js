import styled from "styled-components";
import { Link } from "react-router-dom"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  gap: 1rem;
`;

export const Image = styled.img`
  width: 80vw;
  margin: 2rem 0 1rem 0;
`;

export const H1 = styled.h1`
  font: 700 1.7rem "Roboto", sans-serif;
  letter-spacing: 1px;
`;

export const ButtonLogin = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 3rem;
  margin: 3rem 0 2rem 0;

  border: none;
  border-radius: 4px;
  background: #d93856;
  cursor: pointer;

  font: 500 0.9 "Roboto", sans-serif;
  letter-spacing: 1px;

  transition: all 0.7s;

  &:hover {
    background-color: #882335;
  }

  &:active {
    opacity: 0.2;
  }
`;
