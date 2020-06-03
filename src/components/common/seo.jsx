import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        url
        appIcon
        lang: siteLanguage
      }
    }
  }
`

const SEO = ({ title, description }) => {
  // const { pathname } = useLocation()
  const { site } = useStaticQuery(query)
  const {
    defaultTitle,
    defaultDescription,
    url,
    appIcon,
    lang,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url, // TODO: url: `${url}/pathname`
    appIcon, // TODO: url: `${appIcon}/pathname`
    lang,
  }

  return (
    <Helmet title={seo.title} htmlAttributes={{ lang: seo.lang }}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.appIcon} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.appIcon && <meta property="og:image" content={seo.appIcon} />}
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
}

export default SEO
