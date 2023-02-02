import { FooterInfo, ProfileContainer, ProfileContent, ProfileContentBody, ProfileContentFooter, ProfileContentHeader, ProfilePicture } from "./styles";
import externalLinkIcon from '../../../../assets/external-link.svg'
import githubIcon from '../../../../assets/github.svg'
import companyIcon from '../../../../assets/company.svg'
import followersIcon from '../../../../assets/followers.svg'
import { useContext } from "react";
import { UsersContext } from "../../../../context/UsersContext";

export function Profile() {
  const { user } = useContext(UsersContext)

  return (
    <ProfileContainer>
      <ProfilePicture src={user.avatar_url} alt="imagem de perfil" />
      <ProfileContent>
        <ProfileContentHeader>
          <h1>Enos Domingues</h1>
          <div>
           <a href={user.html_url} target="_blank">
           <span>GITHUB</span>
             <img src={externalLinkIcon} alt="Icone de link externo" />
           </a>
          </div>
        </ProfileContentHeader>
        <ProfileContentBody>
          <p>
          {user.bio}
          </p>
        </ProfileContentBody>
        <ProfileContentFooter>
          <FooterInfo>
            <img src={githubIcon} alt="Icone do github" />
            <span>{user.login}</span>
          </FooterInfo>
          <FooterInfo>
            <img src={companyIcon} alt="Icone da empresa" />
            <span>Rocketseat</span>
          </FooterInfo>
          <FooterInfo>
            <img src={followersIcon} alt="Icone dos seguidores" />
            <span>{user.followers} seguidores</span>
          </FooterInfo>
        </ProfileContentFooter>
      </ProfileContent>
    </ProfileContainer>
  )
}