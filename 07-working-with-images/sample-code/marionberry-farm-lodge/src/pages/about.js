import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import Layout from "../components/Layout"

const ForestImage = styled(Image)`
  border-radius: 10px;
  margin-top: 20px;
`

export default ({ data }) => (
  <Layout>
    <ForestImage fixed={data.file.childImageSharp.fixed} alt="Forest" />
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
    file(relativePath: { eq: "images/forest.jpg" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
