/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import "../../../fate_srd-frontend/components/style.scss"

const Layout = ({ children }) => {
  return (
    <div className="page-wrapper">
      <Header />
      <div class="site-main">
        <div class="site-main__content">{children}</div>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
