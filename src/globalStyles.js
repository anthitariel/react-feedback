import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  overflow: hidden;
  font-family: 'Roboto', sans-serif;
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

}
`;

export const Container = styled.div`
  width: 100%;
`;

export default GlobalStyle;
