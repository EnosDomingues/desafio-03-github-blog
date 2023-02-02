import { ReactNode } from "react";
import { BodyContainer } from "./styles";


interface BodyContentProps {
  children: ReactNode
}


export function BodyContent({ children }: BodyContentProps) {
  return (
    <BodyContainer>
      { children }
    </BodyContainer>
  )
}