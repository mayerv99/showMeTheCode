import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --text-primary: 20, 20, 40;
    --text-secondary: 129, 132, 163;
    --blue: 73, 59, 249;
    --gray: 239, 240, 255;
  }
  *{
    font-family: 'Andika', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
