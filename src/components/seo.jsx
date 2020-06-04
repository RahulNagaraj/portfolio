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
        siteUrl
        appIcon
      }
    }
  }
`

const SEO = ({ title, description, meta, lang }) => {
  // const { pathname } = useLocation()
  const { site } = useStaticQuery(query)
  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    appIcon,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    siteUrl, // TODO: url: `${url}/pathname`
    appIcon, // TODO: url: `${appIcon}/pathname`
  }

  return (
    <Helmet
      title={seo.title}
      htmlAttributes={{
        lang,
      }}
      titleTemplate={`%s | ${seo.title}`}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'image',
          content: seo.appIcon,
        },
        {
          property: 'og:url',
          content: seo.siteUrl,
        },
      ].concat(meta)}
    />
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  lang: PropTypes.string,
}

SEO.defaultProps = {
  title: null,
  description: null,
  meta: [],
  lang: 'en',
}

export default SEO
