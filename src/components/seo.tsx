import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

interface Props {
  title?: string
  description?: string
  meta?: []
  lang?: string
}

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

const SEO = ({ title, description, meta, lang = 'en' }: Props) => {
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
          content: seo.description,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: seo.description,
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
      ].concat(meta || [])}
    />
  )
}

export default SEO
