import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import NavBar from "../components/NavBar"

export default ({ data }) => (
  <Layout>
    <NavBar />
    <p>This site was built on {data.site.buildTime}</p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      buildTime(formatString: "MM-DD-YYYY hh:mm:ss")
    }
  }
`
