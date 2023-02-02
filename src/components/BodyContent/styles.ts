import styled from "styled-components";

export const BodyWrapper = styled.div`
  min-height: 20rem;
  filter: blur(0);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme["base-background"]};
`

export const BodyContainer = styled.div`
  width: 54rem;
`