import styled from "styled-components";

export const SearchFormContainer = styled.div`
  margin-top: 12.25rem;
  display: flex;
  flex-direction: column;
  width: 100%;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: ${props => props.theme["base-subtitle"]};
      font-size: ${props => props.theme.fontSize.xl};
    }

    span {
      color: ${props => props.theme["base-span"]};
      font-size: 0.875rem;
    }
  }



  input {
    background-color: ${props => props.theme["base-input"]};
    border: 1px solid ${props => props.theme["base-border"]};
    color: ${props => props.theme["base-text"]};
    height: 3.125rem;
    margin-top: 0.75rem;
    border-radius: 6px;
    padding: 0.75rem 1rem;

    &::placeholder {
      color: ${props => props.theme["base-label"]}
    }

    &:focus {
      border: 1px solid ${props => props.theme.blue};
    }
  }
`