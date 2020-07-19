import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
      outline: none;
      box-sizing: inherit;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0) !important;
    }
    *,
    *::before,
    *::after {
      box-sizing: inherit;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    
    html {
      font-size: 62.5%; //1rem = 10px
      box-sizing: border-box;
      line-height: 1.15;
      --color-main: ${(props) => props.theme.colors.main};
      --color-text: ${(props) => props.theme.colors.text};
      --color-subText: ${(props) => props.theme.colors.subText};
      --color-grey: ${(props) => props.theme.colors.grey};
      --color-offGrey: ${(props) => props.theme.colors.offGrey};
      --color-subGrey: ${(props) => props.theme.colors.subGrey};
      --color-white: ${(props) => props.theme.colors.white};
      --color-offWhite: ${(props) => props.theme.colors.offWhite};
      --color-background: ${(props) => props.theme.colors.background};
      --shadow-color-light: rgba(255, 255, 255, 0.8);
      --shadow-color: rgba(45, 45, 45, 0.18);
      --shadow-color-dark: rgba(45, 45, 45, 0.3);
      --speed: 500ms;

      @media ${(props) => props.theme.mediaQueries.largest} {
          font-size: 60%;
      }

      @media ${(props) => props.theme.mediaQueries.large} {
          font-size: 57.5%;
      }

      @media ${(props) => props.theme.mediaQueries.small} {
          font-size: 55%;
      }
    }
    body {
      background-color: #EBEBEB;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      overflow: visible;
      font-family: "Montserrat", sans-serif;
      font-weight: 400;
    }
    p {
      font-family: "Raleway", sans-serif;
    }
    form,
    input,
    textarea,
    select,
    a {
      -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
    button {
      outline: none;
      cursor: pointer;
    }
`
