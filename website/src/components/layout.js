/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/pro-solid-svg-icons';

import Header from './header';
import Footer from './footer';
import '../../../fate_srd-frontend/components/style.scss';
import bookOfHanzCover from '../images/store/Book of Hanz Cover.png';

const Layout = ({ children, aside }) => {
  const [showPromo, setShowPromo] = useState(false);
  const [gumroadCount, setGumroadCount] = useState(false);
  const firesalePromoRef = useRef();

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${cname}=${cvalue};${expires};path=/`;
  }

  const handleCloseClick = () => {
    setShowPromo(false);
    setCookie('firesale', false, 300);
  };

  const gumroad = async () => {
    const response = await fetch(
      `https://api.gumroad.com/v2/products/F1Uv9H_nAZhJNPtV9uCbbg%3D%3D?access_token=0LBKhBEA_zqQkc_LZ0xHg7vK4tEslbxnMdGOiNGksBQ`,
      {
        method: 'GET',
      }
    );
    const data = await response.json();
    if (data.product.max_purchase_count - data.product.sales_count > 0) {
      setGumroadCount(
        data.product.max_purchase_count - data.product.sales_count
      );
    }
  };

  const scriptAlreadyExists = () =>
    document.querySelector('script#lottieScript') !== null;

  const appendScript = () => {
    const script = document.createElement('script');
    script.id = 'lottieScript';
    script.src =
      'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
    script.async = true;
    script.defer = true;
    script.crossOrigin = 'anonymous';
    document.body.append(script);
  };

  useEffect(() => {
    if (!scriptAlreadyExists()) {
      appendScript();
    }
    gumroad();
  }, []);

  useEffect(() => {
    const firesaleCookieName = 'firesale';

    function checkCookie() {
      const cookieList = document.cookie;
      return cookieList.includes(firesaleCookieName);
    }

    if (!checkCookie()) {
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
      {showPromo && (
        <div
          className={showPromo ? 'firesale firesale--show' : 'firesale'}
          ref={firesalePromoRef}
        >
          <div className="firesale-content">
            <img
              className="firesale-image"
              src={bookOfHanzCover}
              alt="Book of Hanz"
            />
            <div className="firesale-text">
              <div style={{ display: 'flex' }}>
                <span className="firesale-countdown">
                  {gumroadCount
                    ? `🔥 Only ${gumroadCount} copies left`
                    : `SOLD OUT`}
                </span>
                <button
                  type="button"
                  className="firesale-close"
                  onClick={handleCloseClick}
                >
                  <FontAwesomeIcon icon={faTimes} />
                  Close
                </button>
              </div>
              <h2>Book of Hanz Firesale</h2>
              <h3>Get your copy before they are gone!</h3>
              <p>Free shipping (US only)</p>
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
      )}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  aside: PropTypes.bool,
};
export default Layout;
