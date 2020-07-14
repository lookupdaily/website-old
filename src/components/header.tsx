import * as React from "react"
import "typeface-montserrat"
import "./header.css"

interface TitleProps { text: string }

export const Header = (props: TitleProps) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}
