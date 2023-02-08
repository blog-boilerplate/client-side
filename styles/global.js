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
  font-family: "Montserrat", sans-serif;
 
}
`;

export default GlobalStyles;
