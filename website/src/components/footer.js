import { Link } from 'gatsby';
import React from 'react';

import logo from '../../../fate_srd-frontend/images/logo.svg';
import patreon from '../../../fate_srd-frontend/images/become_a_patron_button@2x.png';

const Footer = () => (
  <footer className="site-footer">
    <div className="site-footer__content">
      <div className="site-footer__logo-wrapper">
        <Link to="/" className="site-footer__link">
          <img src={logo} alt="" className="site-footer__logo" />
        </Link>
      </div>
      <a
        href="https://www.patreon.com/fate_srd"
        className="site-footer__patreon"
      >
        <img src={patreon} alt="" className="site-footer__patreon-img" />
      </a>
      <nav className="site-footer__nav">
        <ul className="site-footer__ul">
          <li className="site-footer__li">
            <Link to="/about-site" className="site-footer__link">
              About This Site
            </Link>
          </li>
          <li className="site-footer__li">
            <a className="site-footer__link" href="/contact-us">
              Contact Us
            </a>
          </li>
          <li className="site-footer__li">
            <Link to="/official-licensing-fate" className="site-footer__link">
              Official Licensing
            </Link>
          </li>
          <li className="site-footer__li">
            <Link to="/privacy-policy" className="site-footer__link">
              Privacy Policy
            </Link>
          </li>
          <li className="site-footer__li">
            <a
              className="site-footer__link"
              href="https://twitter.com/Fate_SRD"
            >
              Fate SRD on Twitter
            </a>
          </li>
          <li className="site-footer__li">
            <a
              className="site-footer__link"
              href="https://datastudio.google.com/open/1BkbV6PR0sUJMQOJrIOQ5bN3PGt3u4Jky"
            >
              Site Stats
            </a>
          </li>
        </ul>

        <ul className="site-footer__ul">
          <li className="site-footer__li">
            <a
              href="https://fate.1d12monos.com/"
              className="site-footer__link"
              target="_blank"
              rel="noreferrer"
            >
              Fate SRD in Spanish
            </a>
          </li>
          <li className="site-footer__li">
            <a
              href="https://srd.faterpg.de/"
              className="site-footer__link"
              target="_blank"
              rel="noreferrer"
            >
              Fate SRD in German
            </a>
          </li>
          <li className="site-footer__li">
            <a
              href="https://www.fateitalia.it/"
              className="site-footer__link"
              target="_blank"
              rel="noreferrer"
            >
              Fate SRD in Italian
            </a>
          </li>
          <li className="site-footer__li">
            <a
              href="https://fate-srd.fr/"
              className="site-footer__link"
              target="_blank"
              rel="noreferrer"
            >
              Fate SRD in French
            </a>
          </li>
          <li className="site-footer__li">
            <a
              href="https://fatesrdbrasil.gitlab.io/fate-srd-brasil/"
              className="site-footer__link"
              target="_blank"
              rel="noreferrer"
            >
              Fate SRD in Brazilian Portuguese
            </a>
          </li>
        </ul>
      </nav>
      <div className="site-footer__legal">
        <div className="content">
          <p>
            This site is copyright 2013–{new Date().getFullYear()}&nbsp;
            <a href="http://randyoest.com">Amazing Rando Design</a>, except
            where otherwise noted. It is only possible because of the generous
            nature of Evil Hat Productions, LLC, who, in their wisdom, opened up
            the system to improve the Fate RPG ecosystem. Give them monies.
          </p>
          <p>This site is not affiliated with Evil Hat Productions, LLC.</p>
          <p>
            This work is based on{' '}
            <a href="http://www.faterpg.com/">Fate Core System</a> and Fate
            Accelerated Edition, products of Evil Hat Productions, LLC,
            developed, authored, and edited by Leonard Balsera, Brian Engard,
            Jeremy Keller, Ryan Macklin, Mike Olson, Clark Valentine, Amanda
            Valentine, Fred Hicks, and Rob Donoghue, and licensed for our use
            under the{' '}
            <a href="https://creativecommons.org/licenses/by/3.0/">
              Creative Commons Attribution 3.0 Unported license
            </a>
            .
          </p>
          <p>
            Fate™ is a trademark of Evil Hat Productions, LLC. The Powered by
            Fate logo is © Evil Hat Productions, LLC and is used with
            permission.
          </p>
          <p>
            The Fate Core font is © Evil Hat Productions, LLC and is used with
            permission. The Four Actions icons were designed by Jeremy Keller.
          </p>
          <p>
            This work is based on{' '}
            <a href="http://www.faterpg.com/">Fate Condensed</a> (found at{' '}
            <a href="http://www.faterpg.com/">http://www.faterpg.com/</a>), a
            product of Evil Hat Productions, LLC, developed, authored, and
            edited by PK Sullivan, Ed Turner, Leonard Balsera, Fred Hicks,
            Richard Bellingham, Robert Hanz, Ryan Macklin, and Sophie Lagacé,
            and licensed for our use under the{' '}
            <a href="https://creativecommons.org/licenses/by/3.0/">
              Creative Commons Attribution 3.0 Unported license
            </a>
            .
          </p>
          <p>
            Content from <a href="https://ihunt.fun">#iHunt</a> is licensed
            under a{' '}
            <a
              rel="license"
              href="http://creativecommons.org/licenses/by-sa/3.0/us/"
            >
              Creative Commons Attribution-ShareAlike 3.0 United States License
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  </footer>
);

Footer.defaultProps = {
  siteTitle: ``,
};

export default Footer;
