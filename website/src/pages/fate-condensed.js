import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Aside from '../components/aside';
import Layout from '../components/layout';
import Menu from '../components/menu';
import SEO from '../components/seo';

const FateCondensed = () => {
  const data = useStaticQuery(graphql`
    {
      hero: file(name: { eq: "hero--fate-condensed" }) {
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
            field_tags: { elemMatch: { name: { eq: "Fate Condensed" } } }
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
      <SEO title="Fate Condensed" />
      <main className="main-content-wrapper main-content-wrapper--with-hero">
        <Img
          fluid={data.hero.childImageSharp.fluid}
          alt=""
          className="main-content__hero"
        />
        <div className="main-content--with-hero__content">
          <h1 className="page-title">Fate Condensed</h1>
          <p>
            Fate Condensed is a compact, stand-alone version of the Fate Core
            System streamlined for clarity and ease of reference. Fate Condensed
            gives you easy-to- digest rules in as few pages as possible, letting
            you get to the table and roll the dice, fast. It includes a few
            simple refinements to the Fate Core engine honed over a decade of
            active play and development. And best of all, it’s 100% compatible
            with every one of our 90+ Fate products already published.
          </p>
        </div>
      </main>
      <aside className="aside-wrapper">
        <Aside ruleBook="Fate Condensed" authorlist={authorlist} />
      </aside>
    </Layout>
  );
};

export default FateCondensed;
