import styled from "styled-components";

export const PostContainer = styled.a`
  background-color: ${props => props.theme["base-post"]};
  border: 2px solid transparent;
  width: 26rem;
  height: 16.25rem;
  border-radius: 10px;
  padding: 2rem;

  &:hover {
    border: 2px solid ${props => props.theme["base-span"]};
    cursor: pointer;
  }

  header {
    display: flex;
    align-items: flex-start;
    height: 4rem;

    h1 {
      max-width: 17.68rem;
      color: ${props => props.theme["base-title"]};
      font-size: ${props => props.theme.fontSize.xl};
    }
  
    span {
      color: ${props => props.theme["base-span"]};
      font-size: ${props => props.theme.fontSize.sm};
      line-height: 2;
      flex: 1;
      text-align: end;
    }
  }

  div > p {
    font-size: ${props => props.theme.fontSize.md};
    font-size: ${props => props.theme["base-text"]};
  }
`