import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: white;
  padding: 30px 45px;
  border-radius: 10px;
  text-align: center;
  max-width: 30%;
`;

export const Header = styled.div`
  margin-bottom: 20px;
`;

export const Content = styled.div`
  height: 30%;
`;

export const Footer = styled.div`
  margin-top: 50px;

  button {
    border: none;
    color: rgb(var(--blue));
    background-color: transparent;
    cursor: pointer;
  }
`;
