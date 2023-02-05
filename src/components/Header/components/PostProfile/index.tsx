import externalLinkIcon from '../../../../assets/external-link.svg'
import githubIcon from '../../../../assets/github.svg'
import calendarIcon from '../../../../assets/calendar.svg'
import messagesIcon from '../../../../assets/messages.svg'
import { FooterInfo, PostProfileContainer, PostProfileContentBody, PostProfileContentFooter, PostProfileContentHeader } from "./styles";
import { useContext } from 'react';
import { UsersContext } from '../../../../context/UsersContext';

interface Post {
  title: string,
  body: string,
  created_at: string,
  html_url: string,
  id: number
}

interface PostProfileProps {
  selectedPost?: Post
}

export function PostProfile({ selectedPost }: PostProfileProps) {

  const { user } = useContext(UsersContext)
  console.log(selectedPost)

  return (
      <PostProfileContainer>
        <PostProfileContentHeader>
          <a href='/'>
            <span>VOLTAR</span>
          </a>
          <a href={selectedPost?.html_url} target="_blank">
          <span>VER NO GITHUB</span>
            <img src={externalLinkIcon} alt="Icone de link externo" />
          </a>
        </PostProfileContentHeader>
        <PostProfileContentBody>
          <h1>{selectedPost?.title}</h1>
        </PostProfileContentBody>
        <PostProfileContentFooter>
          <FooterInfo>
            <img src={githubIcon} alt="Icone do github" />
            <span>{user.login}</span>
          </FooterInfo>
          <FooterInfo>
            <img src={calendarIcon} alt="Icone da empresa" />
            <span>Rocketseat</span>
          </FooterInfo>
          <FooterInfo>
            <img src={messagesIcon} alt="Icone dos seguidores" />
            <span>{user.followers} comentários</span>
          </FooterInfo>
        </PostProfileContentFooter>
      </PostProfileContainer>
  )
}