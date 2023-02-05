import { BodyContent } from "../../components/BodyContent";
import { BodyWrapper } from "../../components/BodyContent/styles";
import { Header } from "../../components/Header";
import { PostList } from "../../components/PostList";
import { SearchForm } from "../../components/SearchForm";


export function Home() {
  return(
    <>
      <Header />
      <BodyWrapper>
        <BodyContent>
          <SearchForm />
          <PostList />
        </BodyContent>
      </BodyWrapper>
    </>
  )
}