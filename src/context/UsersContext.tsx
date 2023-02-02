import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Post {
  title: string
  content: string
}

interface User {
  avatar_url: string
  login: string
  name: string
  bio: string
  html_url: string
  followers: number
  posts: Post[]
}

interface UsersContextType {
  user: User
}

interface UsersContextProviderProps {
  children: ReactNode
}

export const UsersContext = createContext({} as UsersContextType)

export function UsersContextProvider({ children }: UsersContextProviderProps) {

  const [user, setUser] = useState({} as User)

  useEffect(() => {

    api.get('/users/EnosDomingues')
       .then(response => {
        setUser(response.data)
        console.log(response.data)
       })

  }, [])



  return (
    <UsersContext.Provider value={{ user }}>
      {children}
    </UsersContext.Provider>
  )
}