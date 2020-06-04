import React, { ReactNode } from 'react'

interface Props {
  location: Location
  title: string
  children?: ReactNode
}

const Layout = ({ children, location }: Props) => {
  const rootPath = `/`
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

export default Layout
