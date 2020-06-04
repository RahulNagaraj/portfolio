import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/common/layout'
import SEO from '../components/common/seo'

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

NotFoundPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.object,
  }).isRequired,
  location: PropTypes.string,
}

NotFoundPage.defaultProps = {
  location: '',
}

export default NotFoundPage
