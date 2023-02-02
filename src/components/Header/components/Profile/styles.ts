import styled from "styled-components";

export const ProfileContainer = styled.div`
  /* width: min(80%, 54rem); */
  min-width: 54rem;
  height: 13.25rem;
  padding: 2rem 2.5rem;
  background-color: ${props => props.theme["base-profile"]};
  z-index: 1;
  transform: translateY(28%);
  display: flex;
  border-radius: 10px;
  box-shadow: 0 2px 28px ${props => props.theme["base-profile"]};
`

export const ProfilePicture = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  margin-right: 2rem;
`

export const ProfileContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
`

export const ProfileContentHeader = styled.header`
  display: flex;
  justify-content: space-between;

  h1 {
    color: ${props => props.theme["base-title"]};
    font-size: ${props => props.theme.fontSize["2xl"]};
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }

  div span {
    color: ${props => props.theme.blue};
    font-weight: bold;
    font-size: ${props => props.theme.fontSize.xs};
    margin-right: 0.5rem;
  }

  div a {
    background-color: transparent;
    padding: 0.25rem 0;
    border: 0;
    line-height: 0;
    cursor: pointer;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid ${props => props.theme.blue};
    }
  }

  div button img {
    width: 0.75rem;
    height: 0.75rem;
  }
`

export const ProfileContentBody = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  max-height: 18.5rem;
`

export const ProfileContentFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
  gap: 1.5rem;
  position: absolute;
  bottom: 1px;
`

export const FooterInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 0.5rem;
  }

  span {
    color: ${props => props.theme["base-subtitle"]};
  }
`