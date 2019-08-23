/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Marionberry Farm Lodge",
    description:
      "Marionberry Farm Lodge is your rustic Pacific Northwest getaway. Unplug from your phone and sit by a fire. Spend the day at a nearby lake. Join us for classes on everything from blacksmithing to gardening. Whatever you do, take a break from screens and relax!",
    author: "The Marionberry Farm Lodge Team",
    year: 2019,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `events`,
        path: `${__dirname}/content/events/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve("./src/pages/markdownpage-template.js"),
        },
        plugins: [`gatsby-remark-images`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 400,
            },
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
