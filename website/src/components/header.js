// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "../../../fate_srd-frontend/images/logo.svg"

const Header = () => (
  <header className="site-header">
    <div className="site-header__branding">
      <img src={logo} alt="" className="site-header__logo" />
      <div className="site-header__branding__menu-toggle">
        <i className="far fa-bars"></i>
        <i className="far fa-times"></i>
      </div>
    </div>
    <div className="site-header__nav">
      <nav className="nav-primary">
        <ul className="nav-primary__ul">
          <li className="nav-primary__li has-nav-flyout nav-primary__sub">
            <a className="nav-primary__link" href="#3">
              <i className="far fa-book nav-primary__link-icon"></i>
              <span className="nav-primary__rules-wrapper">
                Rules
                <i className="far fa-plus nav-primary__sub__mobile-toggle"></i>
                <i className="far fa-minus nav-primary__sub__mobile-toggle"></i>
              </span>
            </a>
            <div className="nav-flyout">
              <dl className="nav-flyout__region">
                <dt>Core Rules</dt>
                <dd>
                  <a href="#1">Fate Core</a>
                </dd>
                <dd>
                  <a href="#1">Fate Accelerated</a>
                </dd>
                <dd>
                  <a href="#1">Fate Condensed</a>
                </dd>
              </dl>

              <dl className="nav-flyout__region">
                <dt>Toolkits</dt>
                <dd>
                  <a href="#1">Fate System Toolkit</a>
                </dd>
                <dd>
                  <a href="#1">Fate Adversary Toolkit</a>
                </dd>
              </dl>

              <dl className="nav-flyout__region">
                <dt>Fate Books</dt>
                <dd>
                  <a href="#1">Atomic Robo</a>
                </dd>
                <dd>
                  <a href="#1">Venture City</a>
                </dd>
                <dd>
                  <a href="#1">War of Ashes</a>
                </dd>
              </dl>

              <dl className="nav-flyout__region">
                <dt>Worlds of Adventure</dt>
                <dd>
                  <a href="#1">Frontier Spirit</a>
                </dd>
                <dd>
                  <a href="#1">Gods and Monsters</a>
                </dd>
                <dd>
                  <a href="#1">Sails Full of Stars</a>
                </dd>
                <dd>
                  <a href="#1">Three Rocketeers</a>
                </dd>
              </dl>

              <dl className="nav-flyout__region">
                <dt>Fate Codex</dt>
                <dd>
                  <a href="#1">Volume 1</a>
                </dd>
                <dd>
                  <a href="#1">Volume 2</a>
                </dd>
                <dd>
                  <a href="#1">Volume 3</a>
                </dd>
              </dl>

              <dl className="nav-flyout__region">
                <dt>Odds &amp; Ends</dt>
                <dd>
                  <a href="#1">Odds &amp; Ends</a>
                </dd>
              </dl>
            </div>
          </li>
          <li className="nav-primary__li">
            <a className="nav-primary__link" href="#1">
              <i className="far fa-treasure-chest nav-primary__link-icon"></i>
              Games &amp; Products
            </a>
          </li>
          <li className="nav-primary__li">
            <a className="nav-primary__link" href="#1">
              <i className="far fa-head-side-headphones nav-primary__link-icon"></i>
              Podcasts &amp; Videos
            </a>
          </li>
          <li className="nav-primary__li">
            <a className="nav-primary__link" href="#1">
              <i className="far fa-comments fa-swap-opacity nav-primary__link-icon"></i>
              Community
            </a>
          </li>
          <li className="nav-primary__li">
            <a className="nav-primary__link" href="#1">
              <i className="far fa-folder-download nav-primary__link-icon"></i>
              Downloads
            </a>
          </li>
          <li className="nav-primary__li nav-primary__li--search">
            <a className="nav-primary__link" href="#1">
              <i className="fas fa-search nav-primary__link-icon"></i>
              Search
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
