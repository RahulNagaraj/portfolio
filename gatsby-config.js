/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const config = require('./content/meta/config')

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: config.title,
    description: config.description,
    author: config.author,
    siteUrl: config.siteUrl,
    appIcon: config.appIcon,
    social: config.social,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.title,
        short_name: config.shortTitle,
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icon: config.appIcon,
        crossOrigin: `use-credentials`,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
  ],
}
