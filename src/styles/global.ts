import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme['base-background']};
    color: ${props => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-weight: 400;
    font-size: ${props => props.theme.fontSize.md};
    font-family: 'Nunito', sans-serif;
  }

  input {
    border: 0;
    outline: 0;
  }
`