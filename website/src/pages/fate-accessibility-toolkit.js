import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Aside from '../components/aside';
import Layout from '../components/layout';
import SEO from '../components/seo';

const FateAccessibilityToolkit = () => {
  const data = useStaticQuery(graphql`
    {
      hero: file(name: { eq: "hero--fate-accessibility-toolkit" }) {
        id
        name
        childImageSharp {
          fluid(jpegQuality: 90, maxHeight: 400) {
            base64
            srcWebp
            srcSetWebp
            originalImg
            originalName
            aspectRatio
          }
        }
      }
      authors: allNodeAuthor(
        filter: {
          relationships: {
            field_tags: {
              elemMatch: { name: { eq: "Fate Accessibilty Toolkit" } }
            }
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
      <SEO title="Fate Accessibilty Toolkit" />
      <main className="main-content-wrapper main-content-wrapper--with-hero">
        <Img
          fluid={data.hero.childImageSharp.fluid}
          alt=""
          className="main-content__hero"
        />
        <div className="main-content--with-hero__content">
          <h1 className="page-title">Fate Accessibilty Toolkit</h1>
          <p>Accessibilty</p>
        </div>
      </main>
      <aside className="aside-wrapper">
        <Aside ruleBook="Fate Accessibilty Toolkit" authorlist={authorlist} />
      </aside>
    </Layout>
  );
};

export default FateAccessibilityToolkit;
