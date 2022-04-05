import { createGlobalStyle } from "styled-components"

import RobotoWoff2 from './fonts/Roboto.woff2';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoWoff2}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto';
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.textColor};

    &::-webkit-scrollbar {
      width: 0.8rem;
    }

    &::-webkit-scrollbar-track {
      background-color: ${(props) => props.theme.colors.darkPurple};
      box-shadow: inset 0.05 0 0 #838383;
    }

    &::-webkit-scrollbar-thumb {
      background-color: green;
      border-radius: 0.5rem;
      background: rgb(136,70,219);
      background: linear-gradient(180deg, rgba(136,70,219,1) 0%, rgba(13,198,243,1) 100%);
      box-shadow: -3px 4px 15px 5px #000000;
    }
  }

  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
`;

export default GlobalStyles;