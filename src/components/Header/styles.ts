import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  max-width: 100vw;

  height: 18.5rem;
  background-color: ${props => props.theme["base-profile"]};

  & img[id='logo'] {
    margin-top: 3rem;
    height: 6.125rem;
    width: 9.25rem;
  }

  & img[id='effect-left'] {
    height: 11.75rem;

    position: absolute;
    left: 0;
    top: 4.375rem;
  }

  & img[id='effect-right'] {
    height: 14.75rem;

    position: absolute;
    right: 0;
    top: 1.875rem;
  }
`

export const RectangleBlur = styled.div`
  width: 55.68rem;
  height: 3.25rem;
  background-color: ${props => props.theme["base-blur"]};
  position: absolute;
  bottom: 9px;
  filter: blur(140px);
`

export const EllipseBlurLeft = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-color: ${props => props.theme["base-blur"]};
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-60%, -60%);
  filter: blur(140px);
`

export const EllipseBlurRight = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-color: ${props => props.theme["base-blur"]};
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(60%, 60%);
  filter: blur(140px);
`