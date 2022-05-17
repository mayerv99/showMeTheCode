import styled from "styled-components";

export const Wrapper = styled.section`
  height: ${(props) => (props.isFirst ? "90vh" : "100vh")};
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.backgroundColor === "gray" ? "rgb(var(--gray))" : "white"};
`;
