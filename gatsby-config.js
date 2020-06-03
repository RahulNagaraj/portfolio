/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const config = require('./src/data/config')

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: config.title,
    description: config.description,
    url: config.url,
    appIcon: config.appIcon,
    siteLanguage: config.siteLanguage,
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
        display: 'standalone',
        icon: config.appIcon,
        crossOrigin: `use-credentials`,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
  ],
}
