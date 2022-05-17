import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  height: 90%;
  margin: 0 auto;

  h2 {
    margin-top: 50px;
    text-align: center;
    strong {
      color: rgb(var(--blue));
    }
  }
`;
export const Header = styled.div`
  text-align: center;
  h3 {
    color: rgb(var(--blue));
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    font-size: 16px;
    margin-bottom: 20px;
    letter-spacing: 2px;
  }
`;
export const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;
