import { Link } from 'gatsby';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faTreasureChest,
  faComments,
  faHeadSideHeadphones,
  faSearch,
  faFolderDownload,
  faBars,
  faTimes,
  faPlus,
  faMinus,
} from '@fortawesome/pro-regular-svg-icons';
import PatreonBar from './PatreonBar';

import logo from '../../../fate_srd-frontend/images/logo.svg';

class Header extends React.Component {
  componentDidMount() {
    const context = document;
    const mobileToggles = context.querySelectorAll(
      '.site-header__branding__menu-toggle'
    );
    const mainMenu = context.querySelector('.nav-primary');
    const subToggle = context.querySelector('.nav-primary__sub');
    const rulesToggle = context.querySelector('.nav-primary__rules-wrapper');

    const handleMainMenu = () => {
      mainMenu.classList.toggle('nav-primary--open');
      mobileToggles.forEach((toggle) => toggle.classList.toggle('open'));
    };

    const handleRulesToggle = () => {
      subToggle.classList.toggle('nav-primary__sub--open');
    };

    mobileToggles.forEach((toggle) =>
      toggle.addEventListener('click', handleMainMenu)
    );
    rulesToggle.addEventListener('click', handleRulesToggle);
  }

  render() {
    return (
      <header className="site-header">
        <div className="site-header__branding">
          <Link to="/">
            <img src={logo} alt="Fate SRD Logo" className="site-header__logo" />
          </Link>
          <div className="site-header__branding__menu-toggle">
            <FontAwesomeIcon icon={faBars} className="bars" />
          </div>
        </div>
        <div className="site-header__nav">
          <nav
            className="nav-primary"
            role="navigation"
            aria-label="Primary Navigation"
          >
            <div className="site-header__branding site-header__branding--inside">
              <img
                src={logo}
                alt="Fate SRD Logo"
                className="site-header__logo"
              />
              <div className="site-header__branding__menu-toggle">
                <FontAwesomeIcon icon={faTimes} className="times" />
              </div>
            </div>
            <ul className="nav-primary__ul">
              <li className="nav-primary__li has-nav-flyout nav-primary__sub">
                <a className="nav-primary__link" href="#3">
                  <FontAwesomeIcon
                    icon={faBook}
                    className="nav-primary__link-icon"
                  />
                  <span className="nav-primary__rules-wrapper">
                    Rules
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="nav-primary__sub__mobile-toggle plus"
                    />
                    <FontAwesomeIcon
                      icon={faMinus}
                      className="nav-primary__sub__mobile-toggle minus"
                    />
                  </span>
                </a>
                <div className="nav-flyout">
                  <dl className="nav-flyout__region">
                    <dt>Core Rules</dt>
                    <dd>
                      <Link to="/fate-core">Fate Core</Link>
                    </dd>
                    <dd>
                      <Link to="/fate-accelerated">Fate Accelerated</Link>
                    </dd>
                    <dd>
                      <Link to="/fate-condensed">Fate Condensed</Link>
                    </dd>
                  </dl>

                  <dl className="nav-flyout__region">
                    <dt>Toolkits</dt>
                    <dd>
                      <Link to="/fate-system-toolkit">Fate System Toolkit</Link>
                    </dd>
                    <dd>
                      <Link to="/fate-adversary-toolkit">
                        Fate Adversary Toolkit
                      </Link>
                    </dd>
                  </dl>

                  <dl className="nav-flyout__region">
                    <dt>Fate World Books</dt>
                    <dd>
                      <Link to="/atomic-robo">Atomic Robo</Link>
                    </dd>
                    <dd>
                      <Link to="/venture-city">Venture City</Link>
                    </dd>
                    <dd>
                      <Link to="/war-of-ashes">War of Ashes</Link>
                    </dd>
                    <dd>
                      <Link to="/ihunt">#iHunt</Link>
                    </dd>
                  </dl>

                  <dl className="nav-flyout__region">
                    <dt>Worlds of Adventure</dt>
                    <dd>
                      <Link to="/frontier-spirit">Frontier Spirit</Link>
                    </dd>
                    <dd>
                      <Link to="/gods-and-monsters">Gods and Monsters</Link>
                    </dd>
                    <dd>
                      <Link to="/sails-full-of-stars">Sails Full of Stars</Link>
                    </dd>
                    <dd>
                      <Link to="/three-rocketeers">Three Rocketeers</Link>
                    </dd>
                  </dl>

                  <dl className="nav-flyout__region">
                    <dt>Fate Codex</dt>
                    <dd>
                      <Link to="/fate-codex/fate-codex-volume-1">Volume 1</Link>
                    </dd>
                    <dd>
                      <Link to="/fate-codex/fate-codex-volume-2">Volume 2</Link>
                    </dd>
                    <dd>
                      <Link to="/fate-codex/fate-codex-volume-3">Volume 3</Link>
                    </dd>
                  </dl>

                  <dl className="nav-flyout__region">
                    <dt>Odds &amp; Ends</dt>
                    <dd>
                      <Link to="/odds-and-ends">Odds &amp; Ends</Link>
                    </dd>
                  </dl>
                </div>
              </li>
              <li className="nav-primary__li">
                <Link className="nav-primary__link" to="/products">
                  <FontAwesomeIcon
                    icon={faTreasureChest}
                    className="nav-primary__link-icon"
                  />
                  Games &amp; Products
                </Link>
              </li>
              <li className="nav-primary__li">
                <Link to="/actual-play" className="nav-primary__link">
                  <FontAwesomeIcon
                    icon={faHeadSideHeadphones}
                    className="nav-primary__link-icon"
                  />
                  Actual Play
                </Link>
              </li>
              <li className="nav-primary__li">
                <a
                  className="nav-primary__link"
                  href="https://community.fate-srd.com/"
                >
                  <FontAwesomeIcon
                    icon={faComments}
                    className="nav-primary__link-icon"
                  />
                  Community
                </a>
              </li>
              <li className="nav-primary__li">
                <Link to="/downloads" className="nav-primary__link">
                  <FontAwesomeIcon
                    icon={faFolderDownload}
                    className="nav-primary__link-icon"
                  />
                  Downloads
                </Link>
              </li>
              <li className="nav-primary__li nav-primary__li--search">
                <Link className="nav-primary__link" to="/search" role="search">
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="nav-primary__link-icon"
                  />
                  Search
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <PatreonBar />
      </header>
    );
  }
}

export default Header;
