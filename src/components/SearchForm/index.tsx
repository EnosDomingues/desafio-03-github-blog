import { ChangeEvent, useContext } from "react";
import { PostsContext } from "../../context/PostsContext";
import { SearchFormContainer } from "./styles";

export function SearchForm() {

  const { setQuery } = useContext(PostsContext)

  function handleSearchContent(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value)
  }

  return (
    <SearchFormContainer>
      <div>
        <h1>Publicações</h1>
        <span>6 publicações</span>
      </div>

      <input onChange={handleSearchContent} type="text" placeholder="Buscar conteúdo"/>
    </SearchFormContainer>
  )
}