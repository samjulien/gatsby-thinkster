import React from "react"
import { graphql } from "gatsby"
import styled, { css } from "styled-components"
import Layout from "../components/Layout"
import NavBar from "../components/NavBar"

const Button = styled.button`
  margin-top: 10px;
  background: white;
  color: black;
  font-family: Verdana, Helvetica, sans-serif;
  border-radius: 5px;
  font-size: 1.2rem;

  ${props =>
    props.primary &&
    css`
      background: purple;
      color: white;
    `}
`

export default ({ data }) => (
  <Layout noHeader>
    <h1>About {data.site.siteMetadata.title}</h1>
    <NavBar />
    <p>{data.site.siteMetadata.description}</p>
    <p>Made with love by {data.site.siteMetadata.author}.</p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
