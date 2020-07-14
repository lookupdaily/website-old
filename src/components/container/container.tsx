import React, { FunctionComponent } from "react"
import containerStyles from "./container.module.css"

interface ContainerProps {
  children: React.ReactNode
}

export const Container: FunctionComponent<ContainerProps> = ({ children }) => {
  return <div className={containerStyles.container}>{children}</div>
}
