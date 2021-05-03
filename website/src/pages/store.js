import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import dtrImage from '../images/store/store-buy-dtr.png';
import itchImage from '../images/store/store-buy--itch.png';
import bohCover from '../images/store/Book of Hanz Cover.png';
import tt from '../images/store/tt.png';

const products = [
  {
    title: 'Turn Tracker Initiative Cards',
    description:
      'Turn Tracker cards are an easy way to track who has (and who hasn’t) taken a turn in your game. These are useful for any RPG system!',
    smallText:
      '48 page printed book and PDF. Also available as only a PDF for $6.',
    image: tt,
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
  },
];

const Button = ({ label, url, price, type }) => (
  <a href={url} className={`store-card__button store-card__button--${type}`}>
    <span className="store-card__dollar-sign">$</span>
    {price} {label}
  </a>
);

const StoreCard = () => {
  const x = 1;
  const { image, title, description, smallText, buy } = products[0];
  return (
    <div className="store-card">
      <img src={image} alt={title} className="store-card__image" />
      <div className="store-card__content">
        <h2>{title}</h2>
        <p>{description}</p>
        {buy.map((i) => (
          <Button label={i.label} price={i.price} type={i.type} />
        ))}
        {/* {games
            .filter(game => game.node.donotaddtosite !== "Y")
            .map(game => (
              <Game
                title={game.node.titleofyourgame}
                author={game.node.author}
                description={game.node.descriptionofthegame}
                link={game.node.linktowherepeoplecanfindthegame}
                status={game.node.gamestatus}
                key={game.node.titleofyourgame + game.node.author}
              />
            ))} */}
        {/* <a href="https://gumroad.com/l/qVWqe" className="store-card__button">
          <span className="store-card__dollar-sign">$</span>14 Print &amp; PDF
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
        </a> */}
        <p className="small">{smallText}</p>
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
  );
};

const Store = () => (
  <Layout>
    <SEO title="Store" />
    <main className="main-content-wrapper main-content-wrapper--store">
      <h1 className="page-title">Store</h1>
      <div className="store-list">
        <StoreCard />
        {[0, 1, 2].map(() => (
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
        ))}
      </div>
    </main>
  </Layout>
);

export default Store;
