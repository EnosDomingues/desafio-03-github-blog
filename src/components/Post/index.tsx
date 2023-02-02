import { PostContainer } from "./styles";
import { formatDistance } from 'date-fns'
import ptBR from "date-fns/locale/pt-BR";

interface PostProps {
  title: string,
  body: string,
  created_at: string
}

export function Post({ title, body, created_at }: PostProps) {
  const postDate = formatDistance(Date.now(),new Date(created_at), { locale: ptBR})
  return (
    <PostContainer>
      <header>
        <h1>{title}</h1>
        <span>{postDate}</span>
      </header>
      <div>
        <p>
          {body}
        </p>
      </div>
    </PostContainer>
  )
}