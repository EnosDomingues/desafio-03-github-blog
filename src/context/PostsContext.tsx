import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Post {
  title: string,
  body: string,
  created_at: string,
  html_url: string,
  id: number
}

interface PostsContextType {
  posts: Post[]
  setQuery: React.Dispatch<React.SetStateAction<string>>
}

interface PostContextProviderProps {
  children: ReactNode
}

export const PostsContext = createContext({} as PostsContextType)

export function PostContextProvider({ children }: PostContextProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    api.get(`/search/issues?q=${query}%20repo:EnosDomingues/desafio-03-github-blog`)
       .then(res => {
        const { items } = res.data
        setPosts(items)
        console.log(items)
       })
  }, [query])

  return (
    <PostsContext.Provider value={{ posts, setQuery }}>
      {children}
    </PostsContext.Provider>
  )
}