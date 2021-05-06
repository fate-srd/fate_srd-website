import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import dtrImage from '../images/store/store-buy-dtr.png';
import itchImage from '../images/store/store-buy--itch.png';
import bohCover from '../images/store/Book of Hanz Cover.png';
import tt from '../images/store/tt.png';

const products = [
  {
    title: 'Book of Hanz',
    description:
      'Turn Tracker cards are an easy way to track who has (and who hasn’t) taken a turn in your game. These are useful for any RPG system!',
    smallText: '48 page printed book and PDF.',
    image: bohCover,
    buy: [
      {
        label: 'Print & PDF',
        price: '14',
        type: '',
      },
      {
        label: 'PDF',
        price: '6',
        type: 'small',
      },
    ],
    alsoAvailable: [
      'https://www.drivethrurpg.com/product/146133/Turn-Tracker-Initiative-Cards',
      'https://amazingrando.itch.io/product/146133/Turn-Tracker-Initiative-Cards',
    ],
  },
  {
    title: 'Turn Tracker Initiative Cards',
    description:
      'Turn Tracker cards are an easy way to track who has (and who hasn’t) taken a turn in your game. These are useful for any RPG system!',
    smallText:
      '48 page printed book and PDF. Also available as only a PDF for $6.',
    image: tt,
    buy: [
      {
        label: 'Cards',
        price: '4',
        type: '',
        url:
          'https://www.drivethrurpg.com/product/146133/Turn-Tracker-Initiative-Cards',
      },
    ],
  },
];

const Button = ({ label, url, price, type }) => (
  <a href={url} className={`store-card__button store-card__button--${type}`}>
    <span
      className={`store-card__dollar-sign store-card__dollar-sign--${type}`}
    >
      $
    </span>
    {price} {label}
  </a>
);

const StoreCard = ({ card }) => {
  const { image, title, description, smallText, buy, alsoAvailable } = card;
  console.log(card);
  return (
    <div className="store-card">
      <img src={image} alt={title} className="store-card__image" />
      <div className="store-card__content">
        <h2>{title}</h2>
        <p>{description}</p>
        {buy.map((i) => (
          <Button label={i.label} price={i.price} type={i.type} url={i.url} />
        ))}
        <p className="small" style={{ marginTop: 'auto' }}>
          {smallText}
        </p>
        {alsoAvailable && (
          <p className="small" style={{ marginBottom: '0.5rem' }}>
            Also available at:
          </p>
        )}
        {alsoAvailable && (
          <ul className="store-card__also-available">
            {alsoAvailable.map((url) => (
              <li>
                <a href={url} className="store-card__also-available__link">
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
    <main className="main-content-wrapper main-content-wrapper--store">
      <div className="store-list">
        {products.map((x) => (
          <StoreCard card={x} />
        ))}

        {/* {[0, 1, 2].map(() => (
          <div className="store-card">
            <img src={bohCover} alt="" className="store-card__image" />
            <div className="store-card__content">
              <div className="store-card__circle">
                <span className="store-card__circle-dollar-sign">$</span>14
              </div>
              <h2>Book of Hanz</h2>
              <p>
                Turn Tracker cards are an easy way to track who has (and who
                hasn’t) taken a turn in your game. These are useful for any RPG
                system!
              </p>
              <p>Learn More</p>
              <a
                href="https://gumroad.com/l/qVWqe"
                className="store-card__button"
              >
                <span className="store-card__dollar-sign">$</span>14 Print &amp;
                PDF
              </a>
              <br />
              <a
                href="https://gumroad.com/l/qVWqe"
                className="store-card__button store-card__button--small"
              >
                <span className="store-card__dollar-sign store-card__dollar-sign--small">
                  $
                </span>
                6 PDF
              </a>
              <p className="small">
                48 page printed book and PDF. Also available as only a PDF for
                $6.
              </p>
              <p className="small">Also available at:</p>
              <ul className="store-card__also-available">
                <li>
                  <a href="https://www.drivethrucards.com/product/146133/Turn-Tracker-Initiative-Cards">
                    <img src={dtrImage} alt="DriveThruRPG" />
                  </a>
                </li>
                <li>
                  <a href="https://amazingrando.itch.io/book-of-hanz">
                    <img src={itchImage} alt="Itch.io" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ))} */}
      </div>
    </main>
  </Layout>
);

Button.propTypes = {
  label: PropTypes.string,
  url: PropTypes.string,
  price: PropTypes.string,
  type: PropTypes.string,
};

StoreCard.propTypes = {
  card: PropTypes.object,
};

export default Store;
