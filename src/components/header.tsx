import * as React from 'react'

interface TitleProps { text: string }

export function Header(props: TitleProps) {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  )
}