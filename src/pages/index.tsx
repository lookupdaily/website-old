import * as React from "react"
import { Layout } from "../components/layout/layout"
import { Header } from "../components/header/header"

export default function Home(): React.ReactNode {
  return (
    <Layout>
      <Header text="Look Up. Daily" />
      <p>Outside Lies Magic</p>
    </Layout>
  )
}
