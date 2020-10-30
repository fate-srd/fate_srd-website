import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/seo';
import Layout from '../components/layout';

const Home = () => {
  const data = useStaticQuery(graphql`
    {
      images: allFile(filter: { relativeDirectory: { regex: "/home/" } }) {
        edges {
          node {
            name
            id
            childImageSharp {
              fixed(base64Width: 10, quality: 80) {
                base64
                tracedSVG
                aspectRatio
                srcWebp
                srcSetWebp
                originalName
              }
            }
          }
        }
      }
    }
  `);

  const images = data.images.edges;

  const singleImage = (imageName) => {
    const haystack = images.filter((value) => value.node.name === imageName);
    return haystack[0].node.childImageSharp.fixed;
  };

  const womanRunning = singleImage('home-woman-running');
  const sciFi = singleImage('home-scifi');
  const monks = singleImage('home-monks');

  return (
    <Layout>
      <SEO title="Home" />
      <main className="main-content-wrapper">
        <div className="main-content main-content__home">
          <section className="home__section home__section--hero">
            {/* <Img fluid={womanRunning} alt="" className="image" /> */}
            <h1 className="page-title">Fate Roleplaying Game</h1>
            <h2>System Reference Document</h2>
            <p>
              Fames arcu nisi eros feugiat massa metus tortor luctus enim felis
              urna venenatis ultrices pretium pulvinar adipiscing facilisis
              placerat elementum. Neque ipsum eu cubilia fames.
            </p>
          </section>

          <section className="grid-2up">
            <section className="home__section home__section--story">
              {/* <Img fluid={sciFi} alt="" className="image" /> */}
              <div className="content">
                <h2>Story-focused tools</h2>
                <p>
                  Orci ornare morbi convallis massa finibus ullamcorper netus eu
                  facilisi in inceptos pulvinar blandit ultrices ut suscipit
                  auctor scelerisque potenti
                </p>
              </div>
            </section>

            <section className="home__section home__section--want">
              {/* <Img fluid={monks} alt="" className="image" /> */}
              <div className="content">
                <h2>Make it what YOU want</h2>
                <p>
                  Orci ornare morbi convallis massa finibus ullamcorper netus eu
                  facilisi in inceptos pulvinar blandit ultrices ut suscipit
                  auctor scelerisque potenti
                </p>
              </div>
            </section>
          </section>

          <section className="section__fate-core">
            <h2 style={{ marginBottom: '2rem' }}>Getting Started</h2>
            <ul className="core-rules-list">
              <li className="core-rules-list__item">
                <div className="core-rules-list__item__content">
                  <div className="core-rules-list__overview core-rules-list__overview--core">
                    The whole system
                  </div>
                  <h3>Fate Core</h3>
                  <p>
                    <strong>
                      Fate Core is a dynamic and flexible roleplaying game built
                      around proactive characters that you play.
                    </strong>{' '}
                    Fate Core does not have a default setting to encourage all
                    styles of play.
                  </p>
                  <a href="/" className="core-rules-list__button">
                    Start reading
                  </a>
                </div>
              </li>
              <li className="core-rules-list__item">
                <div className="core-rules-list__item__content">
                  <div className="core-rules-list__overview core-rules-list__overview--fae">
                    Get started quick!
                  </div>
                  <h3>Fate Accelerated</h3>
                  <p>
                    <strong>
                      <abbr title="Fate Accelerated">FAE</abbr> is a grab-n-go
                      version of Fate
                    </strong>
                    , written for <strong>easy prep and easy play</strong>.
                    Don't let that simplicity fool you, use these rules to run
                    any style and any length campaign.
                  </p>
                  <a href="/" className="core-rules-list__button">
                    Start reading
                  </a>
                </div>
              </li>
              <li className="core-rules-list__item">
                <div className="core-rules-list__item__content">
                  <div className="core-rules-list__overview core-rules-list__overview--condensed">
                    Compact version of Core
                  </div>
                  <h3>Fate Condensed</h3>
                  <p>
                    <strong>
                      Fate Condensed is a version of Fate Core System in a
                      compact form.
                    </strong>{' '}
                    It is a complete roleplaying game; while other books might
                    enhance your use of it, you don’t need any other book to
                    play.
                  </p>
                  <a href="/" className="core-rules-list__button">
                    Start reading
                  </a>
                </div>
              </li>
            </ul>
          </section>

          <section className="section__more-fate">
            <h2>Foo</h2>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
