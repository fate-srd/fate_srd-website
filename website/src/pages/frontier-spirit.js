import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Aside from '../components/aside';
import Layout from '../components/layout';
import SEO from '../components/seo';

const FrontierSpirit = () => {
  const data = useStaticQuery(graphql`
    {
      hero: file(name: { eq: "hero--frontier-spirit" }) {
        id
        name
        childImageSharp {
          fluid(jpegQuality: 90, maxHeight: 400) {
            base64
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
            field_tags: { elemMatch: { name: { eq: "Frontier Spirit" } } }
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
      <SEO title="Frontier Spirit" />
      <main className="main-content-wrapper main-content-wrapper--with-hero">
        <Img
          fluid={data.hero.childImageSharp.fluid}
          alt=""
          className="main-content__hero"
        />
        <div className="main-content--with-hero__content">
          <h1 className="page-title">Frontier Spirit</h1>

          <p>
            Despite its long history, the Commonwealth has only civilized a
            fraction of the galaxy. Life on an undeveloped colony world is hard.
            The problems are never-ending: pirate raids, corporate
            claim-jumpers, outlaw settlers, unpredictable weather...and an alien
            spirit world unused to coexisting with sentient creatures.
          </p>
        </div>
      </main>
      <aside className="aside-wrapper">
        <Aside ruleBook="Frontier Spirit" authorlist={authorlist} />
      </aside>
    </Layout>
  );
};

export default FrontierSpirit;
