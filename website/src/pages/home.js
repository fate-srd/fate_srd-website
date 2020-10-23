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
              fluid(jpegQuality: 90) {
                srcSet
                srcSetWebp
                srcWebp
                tracedSVG
                src
                base64
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
    return haystack[0].node.childImageSharp.fluid;
  };

  const womanRunning = singleImage('home-woman-running');
  const sciFi = singleImage('home-scifi');
  const monks = singleImage('home-monks');

  return (
    <Layout>
      <SEO title="Home" />
      <main className="main-content-wrapper">
        <div
          className="main-content main-content__home"
          style={{ minHeight: '1000px' }}
        >
          <section className="home__header">
            <Img fluid={womanRunning} alt="" className="home__woman-running" />
            <h1 className="page-title">Fate Roleplaying Game</h1>
            <h2>System Reference Document</h2>
            <p>
              Fames arcu nisi eros feugiat massa metus tortor luctus enim felis
              urna venenatis ultrices pretium pulvinar adipiscing facilisis
              placerat elementum. Neque ipsum eu cubilia fames.
            </p>
          </section>

          <section className="home__story-focused">
            <Img fluid={sciFi} alt="" className="home__story-focused__scifi" />
            <div className="home__story-focused__content">
              <h2>Story-focused tools</h2>
              <p>
                Orci ornare morbi convallis massa finibus ullamcorper netus eu
                facilisi in inceptos pulvinar blandit ultrices ut suscipit
                auctor scelerisque potenti
              </p>
            </div>
          </section>

          <section className="home__whatyouwant">
            <Img fluid={monks} alt="" className="home__whatyouwant__monks" />
            <div className="home__whatyouwant__content">
              <h2>Make it what YOU want</h2>
              <p>
                Orci ornare morbi convallis massa finibus ullamcorper netus eu
                facilisi in inceptos pulvinar blandit ultrices ut suscipit
                auctor scelerisque potenti
              </p>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
