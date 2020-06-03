import React from 'react'
import Layout from '../components/common/layout'
import SEO from '../components/common/seo'
import Home from './home'

export default function App() {
  return (
    <Layout>
      <SEO />
      <Home />
    </Layout>
  )
}
