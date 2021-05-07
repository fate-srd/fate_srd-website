import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import bohCover from '../images/store/Book of Hanz Cover.png';
import tableBkg from '../images/store/tim-mossholder-ysDq0fY-bzo-unsplash.jpg';

const products = [
  {
    title: 'Book of Hanz',
    description:
      'Collected for the first time in paperback, The Book of Hanz unlocks the code to better Fate games than you ever imagined.',
    smallText: '48 page printed book and PDF.',
    image: bohCover,
    bkgImage: tableBkg,
    buy: [
      {
        label: 'Print & PDF',
        price: '14',
        type: 'gumroad',
        url: 'https://gumroad.com/l/qVWqe',
        customClasses: 'gumroad-button',
      },
    ],
    alsoAvailableText: 'PDF available at:',
    alsoAvailable: [
      'https://www.drivethrurpg.com/product/350062/Book-of-Hanz',
      'https://amazingrando.itch.io/book-of-hanz',
    ],
  },
];

const Button = ({ label, url, price, type, customClasses }) => (
  <a
    href={url}
    className={
      customClasses || `store-card__button store-card__button--${type}`
    }
    target="_blank"
    rel="noreferrer"
  >
    <span
      className={`store-card__dollar-sign store-card__dollar-sign--${type}`}
    >
      $
    </span>
    {price} {label}
  </a>
);

const StoreCard = ({ card }) => {
  const {
    image,
    bkgImage,
    title,
    description,
    smallText,
    buy,
    alsoAvailable,
    alsoAvailableText,
  } = card;
  return (
    <div className="store-card">
      <div
        className="store-card__image-content"
        style={{ backgroundImage: `url(${bkgImage})`, backgroundSize: 'cover' }}
      >
        <img src={image} alt={title} className="store-card__image" />
      </div>
      <div className="store-card__content">
        <h2>{title}</h2>
        <p>{description}</p>
        {buy.map((i) => (
          <Button
            key={i.label}
            label={i.label}
            price={i.price}
            type={i.type}
            url={i.url}
            customClasses={i.customClasses}
          />
        ))}
        <p className="small" style={{ marginTop: 'auto' }}>
          {smallText}
        </p>
        {alsoAvailableText && (
          <p className="small" style={{ marginBottom: '0.5rem' }}>
            {alsoAvailableText}
          </p>
        )}
        {alsoAvailable && (
          <ul className="store-card__also-available">
            {alsoAvailable.map((url) => (
              <li>
                <a
                  href={url}
                  className="store-card__also-available__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Buy
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const Store = () => (
  <Layout>
    <SEO title="Store" />
    <Helmet>
      <script src="https://gumroad.com/js/gumroad.js" defer />
    </Helmet>
    <main className="main-content-wrapper main-content-wrapper--store">
      <div className="store-list">
        {products.map((x) => (
          <StoreCard card={x} key={x.title} />
        ))}
      </div>
    </main>
  </Layout>
);

Button.propTypes = {
  label: PropTypes.string,
  url: PropTypes.string,
  price: PropTypes.string,
  type: PropTypes.string,
  customClasses: PropTypes.string,
};

StoreCard.propTypes = {
  card: PropTypes.object,
};

export default Store;
