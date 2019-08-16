import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const HeaderContainer = styled.div`
  color: purple;
`

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <HeaderContainer>
      <h1>{data.site.siteMetadata.title}</h1>
    </HeaderContainer>
  )
}
