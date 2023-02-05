import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { PostContextProvider } from "./context/PostsContext";
import { UsersContextProvider } from "./context/UsersContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <UsersContextProvider>
        <PostContextProvider>
          <Router />
        </PostContextProvider>
      </UsersContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}