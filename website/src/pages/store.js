import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import bohCover from '../images/store/Book of Hanz Cover.png';
import tableBkg from '../images/store/tim-mossholder-ysDq0fY-bzo-unsplash.jpg';
import tt from '../images/store/turn-tracker.jpg';
import ttBkg from '../images/store/TurnTracker_BadGreen.jpg';
import audiobook from '../images/store/audiobook.png';
import audiobookBkg from '../images/store/audiobook-bkg.jpg';
import thoughts from '../images/store/thoughts.jpg';
import thoughtsBkg from '../images/store/thoughts-bkg.jpg';

const products = [
  {
    title: 'Book of Hanz',
    description:
      'Collected for the first time, The Book of Hanz unlocks the code to better Fate games than you ever imagined.',
    smallText: '48 page PDF.',
    image: bohCover,
    bkgImage: tableBkg,
    buy: [
      {
        label: 'PDF',
        price: '6',
        type: '',
        url: 'https://www.drivethrurpg.com/product/350062/Book-of-Hanz',
      },
    ],
    alsoAvailableText:
      'Print-on-demand (for international folks) & PDF available at:',
    alsoAvailable: [
      'https://www.drivethrurpg.com/product/350062/Book-of-Hanz',
      'https://amazingrando.itch.io/book-of-hanz',
    ],
  },
  {
    title: 'Turn Tracker Initiative Cards',
    description:
      'Turn Tracker cards are an easy way to track who has (and who hasn’t) taken a turn in your game. These are useful for any RPG system!',
    smallText: 'Print-on-demand through DriveThruRPG.',
    image: tt,
    bkgImage: ttBkg,
    buy: [
      {
        label: 'Card Deck',
        price: '4',
        type: '',
        url:
          'https://www.drivethrurpg.com/product/146133/Turn-Tracker-Initiative-Cards',
      },
    ],
  },
  {
    title: 'Fate Accelerated SRD Audiobook',
    description:
      'This is a reading of the Fate Accelerated SRD for those who would benefit from having an audio version of the acclaimed grab-n-go roleplaying game.',
    image: audiobook,
    bkgImage: audiobookBkg,
    buy: [
      {
        label: 'Audiobook',
        price: '3',
        type: '',
        url: 'https://amazingrando.itch.io/fate-accelerated-srd-audiobook',
      },
    ],
    alsoAvailableText: 'Also available at:',
    alsoAvailable: [
      'https://www.drivethrurpg.com/product/289768/Fate-Accelerated-SRD-Audiobook',
    ],
  },
  {
    title: 'Thoughts on Fate: A Collection of Essays on the Fate RPG',
    description:
      'Thoughts on Fate is a collection of essays that cover a wealth of topics about the Fate roleplaying game.',
    image: thoughts,
    bkgImage: thoughtsBkg,
    buy: [
      {
        label: 'Pay What You Want',
        price: '',
        type: '',
        url: 'https://amazingrando.itch.io/thoughts-on-the-fate-rpg',
      },
    ],
    alsoAvailableText: 'Also available at:',
    alsoAvailable: [
      'https://www.drivethrurpg.com/product/176051/Thoughts-on-Fate-A-Collection-of-Essays-on-the-Fate-RPG',
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
