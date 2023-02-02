import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html,
body {
  background-color: #fafafa;
  padding: 0;
  margin: 0;
}

* {
  box-sizing: border-box;
  --eggplant-gradient: #ef4e23;
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
}

`;

export default GlobalStyles;
