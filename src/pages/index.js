import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Home from './home'

const App = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO />
      <Home />
    </Layout>
  )
}

App.propTypes = {
  location: PropTypes.shape({}).isRequired,
}

App.defaultProps = {}

export default App
