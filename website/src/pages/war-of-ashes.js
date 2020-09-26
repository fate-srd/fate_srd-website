import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Aside from '../components/aside';
import Layout from '../components/layout';
import Menu from '../components/menu';
import SEO from '../components/seo';

const WarOfAshes = () => {
  const data = useStaticQuery(graphql`
    {
      hero: file(name: { eq: "hero--war-of-ashes" }) {
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
            field_tags: { elemMatch: { name: { eq: "War of Ashes" } } }
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
      <SEO title="War of Ashes" />
      <main className="main-content-wrapper main-content-wrapper--with-hero">
        <Img
          fluid={data.hero.childImageSharp.fluid}
          alt=""
          className="main-content__hero"
        />
        <div className="main-content--with-hero__content">
          <h1 className="page-title">War of Ashes</h1>

          <p>
            Welcome to the War of Ashes RPG: Fate of Agaptus! This “grimsical”
            minis-friendly tabletop RPG is based on the popular miniature game.
            Head off to adventure in a world where the inhabitants might look
            cute and cuddly but often carry pointy objects with which they might
            just decide to stab you. Play as a determined Elvorix, a vengeful
            Vidaar, a militaristic Jaarl, or a ravenous Kuld. Stage
            Romanic-style battles and then celebrate your victory with a pint of
            kogg.
          </p>

          <Menu menuName="menu-war-of-ashes" classBase="nav-lp" />
        </div>
      </main>
      <aside className="aside-wrapper">
        <Aside ruleBook="War of Ashes" authorlist={authorlist} />
      </aside>
    </Layout>
  );
};

export default WarOfAshes;
