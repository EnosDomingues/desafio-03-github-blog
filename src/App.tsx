import { BodyContent } from "./components/BodyContent";
import { BodyWrapper } from "./components/BodyContent/styles";
import { Header } from "./components/Header";
import { PostList } from "./components/PostList";
import { SearchForm } from "./components/SearchForm";
import { PostContextProvider } from "./context/PostsContext";
import { UsersContextProvider } from "./context/UsersContext";

export function App() {
  return (
    <UsersContextProvider>
      <PostContextProvider>
      <Header />
      <BodyWrapper>
        <BodyContent>
         <SearchForm />
         <PostList />
        </BodyContent>
      </BodyWrapper>
      </PostContextProvider>
    </UsersContextProvider>
  )
}