import { EllipseBlurLeft, EllipseBlurRight, HeaderContainer, RectangleBlur } from "./styles";
import logo from '../../assets/logo.svg'
import effectLeft from '../../assets/effect-left.svg'
import effectRight from '../../assets/effect-right.svg'
import { Profile } from "./components/Profile";

export function Header() {
  return (
    <HeaderContainer>
      <img src={effectLeft} alt="" id="effect-left"/>
      <img src={effectRight} alt="" id="effect-right"/>

      <img src={logo} alt="" id="logo" />

      <RectangleBlur />
      <EllipseBlurLeft />

      <Profile />
    </HeaderContainer>
  )
}