import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

export default ({ data }) => (
  <Layout>
    <p>{data.site.siteMetadata.description}</p>
    <p>To make a reservation, give us a call at 360-555-0412.</p>
    <p>This site was made with love by {data.site.siteMetadata.author}.</p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        description
        author
      }
    }
  }
`
