import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const FooterText = styled.p`
  font-family: Verdana, Helvetica, sans-serif;
  font-size: 0.6rem;
  margin-left: 0.2rem;
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          year
        }
      }
    }
  `)

  return (
    <div>
      <FooterText>Copyright {data.site.siteMetadata.year}</FooterText>
    </div>
  )
}
