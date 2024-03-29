module.exports = {
  siteMetadata: {
    title: `Gatsby.js Lightweight Template`,
    description: `This is Gatsby.js lightweight starter template.`,
    author: `Willi Lazarov`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `willi-lazarov`,
        short_name: `wl`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
  ],
}
