import styled from "styled-components";

export const BodyWrapper = styled.div`
  min-height: 20rem;
  width: 100vw;
  filter: blur(0);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme["base-background"]};
  color: ${props => props.theme["base-text"]};
`

export const BodyContainer = styled.div`
  width: 54rem;
`

export const BodyPostContainer = styled.div`
  margin-top: 5rem;
  padding: 2.5rem 2rem;
  max-width: 54rem;
`