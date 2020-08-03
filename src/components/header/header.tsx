import React, { FunctionComponent } from "react"
import "typeface-montserrat"
import "./header.css"

export interface TitleProps {
  text: string
}

export const Header: FunctionComponent<TitleProps> = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}
