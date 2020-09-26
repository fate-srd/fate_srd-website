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

import logo from '../../../fate_srd-frontend/images/logo.svg';

class Header extends React.Component {
  componentDidMount() {
    const context = document;
    const mobileToggle = context.querySelector(
      '.site-header__branding__menu-toggle'
    );
    const mainMenu = context.querySelector('.nav-primary');
    const body = context.querySelector('body');
    const navInPage = context.querySelector('.nav-in-page');
    const subToggle = context.querySelector('.nav-primary__sub');
    const rulesToggle = context.querySelector('.nav-primary__rules-wrapper');

    const handleMainMenu = () => {
      mainMenu.classList.toggle('nav-primary--open');
      body.classList.toggle('noscroll');
      mobileToggle.classList.toggle('open');
      navInPage.classList.toggle('hide');
    };

    const handleRulesToggle = () => {
      subToggle.classList.toggle('nav-primary__sub--open');
    };

    mobileToggle.addEventListener('click', handleMainMenu);
    rulesToggle.addEventListener('click', handleRulesToggle);
  }

  render() {
    return (
      <header className="site-header">
        <div className="site-header__branding">
          <Link to="/">
            <img src={logo} alt="" className="site-header__logo" />
          </Link>
          <div className="site-header__branding__menu-toggle">
            <FontAwesomeIcon icon={faBars} className="bars" />
            <FontAwesomeIcon icon={faTimes} className="times" />
          </div>
        </div>
        <div className="site-header__nav">
          <nav className="nav-primary">
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
                    <dt>Fate Books</dt>
                    <dd>
                      <Link to="/atomic-robo">Atomic Robo</Link>
                    </dd>
                    <dd>
                      <Link to="/venture-city">Venture City</Link>
                    </dd>
                    <dd>
                      <Link to="/war-of-ashes">War of Ashes</Link>
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
                  <FontAwesomeIcon
                    icon={faTreasureChest}
                    className="nav-primary__link-icon"
                  />
                  Games &amp; Products
                </a>
              </li>
              <li className="nav-primary__li">
                <a className="nav-primary__link" href="#1">
                  <FontAwesomeIcon
                    icon={faHeadSideHeadphones}
                    className="nav-primary__link-icon"
                  />
                  Podcasts &amp; Videos
                </a>
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
                <a className="nav-primary__link" href="#1">
                  <FontAwesomeIcon
                    icon={faFolderDownload}
                    className="nav-primary__link-icon"
                  />
                  Downloads
                </a>
              </li>
              <li className="nav-primary__li nav-primary__li--search">
                <a className="nav-primary__link" href="#1">
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="nav-primary__link-icon"
                  />
                  Search
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
