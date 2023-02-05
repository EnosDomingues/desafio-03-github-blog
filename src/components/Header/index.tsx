import { EllipseBlurLeft, EllipseBlurRight, HeaderContainer, RectangleBlur } from "./styles";
import logo from '../../assets/logo.svg'
import effectLeft from '../../assets/effect-left.svg'
import effectRight from '../../assets/effect-right.svg'
import { Profile } from "./components/Profile";
import { PostProfile } from "./components/PostProfile";
import { useLocation } from "react-router-dom";

interface Post {
  title: string,
  body: string,
  created_at: string,
  html_url: string,
  id: number
}

interface HeaderProps {
  selectedPost?: Post
}

export function Header({ selectedPost }: HeaderProps) {
  const { pathname } = useLocation()

  return (
    <HeaderContainer>
      <img src={effectLeft} alt="" id="effect-left"/>
      <img src={effectRight} alt="" id="effect-right"/>

      <img src={logo} alt="" id="logo" />

      <RectangleBlur />
      <EllipseBlurLeft />

      {pathname.includes('/post') ? <PostProfile selectedPost={selectedPost} /> : <Profile />}
    </HeaderContainer>
  )
}