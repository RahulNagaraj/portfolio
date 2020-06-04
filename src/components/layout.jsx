import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({ children, location }) => {
  // eslint-disable-next-line no-undef
  const rootPath = `${__PATH_PREFIX__}/`
  if (location.pathname === rootPath) {
    return (
      <div>
        {/* TODO: Header */}
        <main>{children}</main>
        {/* TODO: Footer */}
      </div>
    )
  }
  return null
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
}

Layout.defaultProps = {}

export default Layout
