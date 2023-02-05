import { PostContainer } from "./styles";
import { formatDistance } from 'date-fns'
import ptBR from "date-fns/locale/pt-BR";
import { useNavigate } from "react-router-dom";

interface PostProps {
  title: string;
  body: string;
  id: number;
  created_at: string;
}

export function Post({ title, body, created_at, id }: PostProps) {
  const postDate = formatDistance(Date.now(),new Date(created_at), { locale: ptBR})
  const formattedPostContent = body.length >= 260 ? body.substring(0, 260).concat('...') : body
  const navigate = useNavigate()
  return (
    <PostContainer onClick={() => navigate(`/post/${id}`)}>
      <header>
        <h1>{title}</h1>
        <span>{postDate}</span>
      </header>
      <div>
        <p>
          {formattedPostContent}
        </p>
      </div>
    </PostContainer>
  )
}