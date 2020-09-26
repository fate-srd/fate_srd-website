import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Aside from '../components/aside';
import Layout from '../components/layout';
import Menu from '../components/menu';

const ThreeRocketeers = () => {
  const data = useStaticQuery(graphql`
    {
      hero: file(name: { eq: "hero--three-rocketeers" }) {
        id
        name
        childImageSharp {
          fluid(jpegQuality: 90, maxHeight: 400) {
            base64
            tracedSVG
            srcWebp
            srcSetWebp
            originalImg
            originalName
          }
        }
      }
      authors: allNodeAuthor(
        filter: {
          relationships: {
            field_tags: { elemMatch: { name: { eq: "Three Rocketeers" } } }
          }
        }
      ) {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `);

  const authorlist = data.authors.edges.map((item) => {
    const properties = {
      title: item.node.title,
    };
    return properties;
  });

  return (
    <Layout aside>
      <main className="main-content-wrapper main-content-wrapper--with-hero">
        <Img
          fluid={data.hero.childImageSharp.fluid}
          alt=""
          className="main-content__hero"
        />
        <div className="main-content--with-hero__content">
          <h1 className="page-title">Three Rocketeers</h1>

          <p>
            A deadly cabal of nobles and clergy threaten to usurp Her Majesty
            Queen Marie-Hélène’s throne and hand Gallia over to Pope Regulus IV,
            and the Rocketeers now work from the shadows to protect the queen
            from threats both foreign and domestic. Foreign spies and papal
            agents lurk in every shadow as the trap draws ever closer. A
            laser-sharp blade and even sharper wits will serve you well as
            interstellar powers play the game of puppets and shadows. The fate
            of the crown is in your hands.
          </p>

          <Menu menuName="menu-three-rocketeers" classBase="nav-lp" />
        </div>
      </main>
      <aside className="aside-wrapper">
        <Aside ruleBook="Three Rocketeers" authorlist={authorlist} />
      </aside>
    </Layout>
  );
};

export default ThreeRocketeers;
