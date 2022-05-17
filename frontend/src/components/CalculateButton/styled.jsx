import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 20px;
  border: 1px solid transparent;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  background-color: rgba(var(--blue), 0.9);
  transition: 0.2s linear;
  &:hover {
    background-color: rgb(var(--blue));
  }
`;
