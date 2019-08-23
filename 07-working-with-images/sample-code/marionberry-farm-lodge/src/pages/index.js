import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import BannerImageFluid from "../components/BannerImageFluid"

export default ({ data }) => (
  <Layout>
    <BannerImageFluid fluid={data.file.childImageSharp.fluid} alt="Lodge" />
    <p>Welcome to {data.site.siteMetadata.title}!</p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: { eq: "images/lodge.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
