import React from "react"
import { Layout } from "../components/layout/layout"
import { Header } from "../components/header"

export default function Home() {
  return (
    <Layout>
      <Header text="Get Out Now!" />
      <p>Outside Lies Magic.</p>
      <p>Publish this</p>
    </Layout>
  )
}
