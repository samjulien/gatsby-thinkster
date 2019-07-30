import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import headerStyles from "./header.module.css"

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
    <div className={headerStyles.headerContainer}>
      <h1>{data.site.siteMetadata.title}</h1>
    </div>
  )
}
