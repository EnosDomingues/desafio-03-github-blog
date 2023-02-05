import { useContext } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useParams } from "react-router-dom";
import { BodyPostContainer, BodyWrapper } from "../../components/BodyContent/styles";
import { Header } from "../../components/Header";
import { PostsContext } from "../../context/PostsContext";
import { SelectedPostContainer } from "./styles";

export function SelectedPost() {
  const { postId } = useParams();
  const { posts } = useContext(PostsContext)
  const selectedPost = posts.find(post => String(post.id) === postId)
  console.log(selectedPost?.body)

  return (
    <SelectedPostContainer>
      <Header selectedPost={selectedPost}/>
      <BodyWrapper>
        <BodyPostContainer>
         <ReactMarkdown children={selectedPost?.body || ''} />
        </BodyPostContainer>
      </BodyWrapper>
    </SelectedPostContainer>
  )
}