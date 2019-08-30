import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
        }
      }
    }
  `)

  return (
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <meta name="image" content={data.site.siteMetadata.image} />
    </Helmet>
  )
}
