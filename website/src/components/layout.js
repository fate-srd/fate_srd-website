/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import * as LottiePlayer from '@lottiefiles/lottie-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-solid-svg-icons';

import Header from './header';
import Footer from './footer';
import '../../../fate_srd-frontend/components/style.scss';
import bookOfHanzCover from '../images/store/Book of Hanz Cover.png';

const Layout = ({ children, aside }) => {
  const [showPromo, setShowPromo] = useState(false);
  const firesalePromoRef = useRef();

  const handleCloseClick = () => {
    setShowPromo(false);
  };

  useEffect(() => {
    const firesaleCookieName = 'Firesale';

    /**
     * https://www.w3schools.com/js/js_cookies.asp
     */
    function setCookie(cname, cvalue, exdays) {
      const d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      const expires = `expires=${d.toUTCString()}`;
      document.cookie = `${cname}=${cvalue};${expires};path=/`;
    }

    function checkCookie() {
      const cookieList = document.cookie;
      console.log(
        cookieList.includes(firesaleCookieName),
        'cookieList.includes(firesaleCookieName)'
      );
      return cookieList.includes(firesaleCookieName);
    }

    if (!checkCookie()) {
      console.log(firesaleCookieName, 'firesaleCookieName');
      setShowPromo(true);
    }
  }, []);

  return (
    <div className="page-wrapper">
      <Header />
      <div className="site-main">
        <div
          className={
            aside
              ? 'site-main__content site-main__content--aside'
              : 'site-main__content'
          }
        >
          {children}
        </div>
      </div>
      <Footer />
      <div
        className="firesale"
        ref={firesalePromoRef}
        style={showPromo ? { display: 'none' } : ''}
      >
        <div className="firesale-content">
          <img
            className="firesale-image"
            src={bookOfHanzCover}
            alt="Book of Hanz"
          />
          <div className="firesale-text">
            <p style={{ display: 'flex' }}>
              <span className="firesale-countdown">🔥 Only 32 copies left</span>
              <button
                type="button"
                className="firesale-close"
                onClick={handleCloseClick}
              >
                <FontAwesomeIcon icon={faTimes} />
                Close
              </button>
            </p>
            <h2>Book of Hanz Firesale</h2>
            <h3>Get your copy before they are gone!</h3>
            <a className="firesale-button" href="https://gumroad.com/l/qVWqe">
              $8 Buy Now
            </a>
          </div>
        </div>
        <lottie-player
          autoplay
          loop
          mode="normal"
          src="https://assets10.lottiefiles.com/packages/lf20_no9qrf5p.json"
          class="firesale-container"
        />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  aside: PropTypes.bool,
};

export default Layout;
