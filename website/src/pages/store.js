import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import dtrImage from '../images/store/store-buy-dtr.png';
import itchImage from '../images/store/store-buy--itch.png';

const Store = () => (
  <Layout>
    <SEO title="Store" />
    <main className="main-content-wrapper">
      <h1 className="page-title">Store</h1>
      <div className="store-card">
        <h2>Book of Hanz</h2>
        <p>
          Turn Tracker cards are an easy way to track who has (and who hasn’t)
          taken a turn in your game. These are useful for any RPG system!
        </p>
        <p>Learn More</p>
        <a href="https://gumroad.com/l/qVWqe" className="store-card__button">
          Buy Now
        </a>
        <p className="small">
          48 page printed book. Also available as a PDF for $6.
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
    </main>
  </Layout>
);

export default Store;
