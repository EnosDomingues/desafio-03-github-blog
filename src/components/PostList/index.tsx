import { useContext } from "react";
import { PostsContext } from "../../context/PostsContext";
import { Post } from "../Post";
import { PostListContainer } from "./styles";

export function PostList() {
  const { posts } = useContext(PostsContext)

  return (
    <PostListContainer>
      {posts.map((post) => {
        return (
          <Post key={post.id} body={post.body} title={post.title} created_at={post.created_at}/>
        )
      })}
    </PostListContainer>
  )
}