import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const TextDiv = styled.div`
  max-width: 30%;
  h3 {
    color: rgb(var(--blue));
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    letter-spacing: 2px;
    font-weight: bold;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
  h2 {
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 54px;
    letter-spacing: 0.5px;
  }
  p {
    margin: 20px 0;
    color: rgb(var(--text-secondary));
  }
`;
export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ServicesButton = styled.button`
  padding: 15px 30px;
  border: 1px solid transparent;
  border-radius: 5px;
  color: rgb(var(--blue));
  font-size: 16px;
  cursor: pointer;
  background-color: rgba(var(--gray), 0.9);
  transition: 0.2s linear;

  &:hover {
    background-color: rgba(var(--blue), 0.2);
  }
`;

export const ImageDiv = styled.div``;
