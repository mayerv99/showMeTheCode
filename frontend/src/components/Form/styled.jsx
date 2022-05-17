import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .select {
    width: 20%;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input {
    width: 20%;
    padding: 1px 10px;
    border: 1px solid #c3c3c3;
    border-radius: 5px;
    font-size: 16px;
  }

  button {
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
  }
`;
