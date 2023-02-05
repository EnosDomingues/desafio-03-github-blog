import styled from "styled-components";

export const PostProfileContainer = styled.div`
  /* width: min(80%, 54rem); */
  min-width: 54rem;
  height: 10.5rem;
  padding: 2rem 2.5rem;
  background-color: ${props => props.theme["base-profile"]};
  z-index: 1;
  transform: translateY(28%);
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 2px 28px ${props => props.theme["base-profile"]};
`

export const PostProfilePicture = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  margin-right: 2rem;
`

export const PostProfileContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
`

export const PostProfileContentHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 1rem;

  span {
    color: ${props => props.theme.blue};
    font-weight: bold;
    font-size: ${props => props.theme.fontSize.xs};
    margin-right: 0.5rem;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    padding: 0.25rem 0;
    border: 0;
    line-height: 1;
    cursor: pointer;
    border-bottom: 1px solid transparent;
    text-decoration: 0;

    &:hover {
      border-bottom: 1px solid ${props => props.theme.blue};
    }
  }

  div button img {
    width: 0.75rem;
    height: 0.75rem;
  }
`

export const PostProfileContentBody = styled.div`
  width: 100%;
  padding: 0.5rem 0;

  h1 {
    margin-top: 0.5rem;
    color: ${props => props.theme["base-title"]};
    font-size: ${props => props.theme.fontSize["2xl"]};
    font-weight: bold;
  }
`

export const PostProfileContentFooter = styled.footer`
  display: flex;
  gap: 2rem;
`

export const FooterInfo = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 0.5rem;
  }

  span {
    color: ${props => props.theme["base-span"]};
  }
`