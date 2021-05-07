import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Aside from '../components/aside';
import Layout from '../components/layout';
import SEO from '../components/seo';

const FateAcceleratedLP = () => {
  const data = useStaticQuery(graphql`
    {
      hero: file(name: { eq: "hero--fate-accelerated" }) {
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
            field_tags: { elemMatch: { name: { eq: "Fate Accelerated" } } }
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
      <SEO title="Fate Accelerated" />
      <main className="main-content-wrapper main-content-wrapper--with-hero">
        <Img
          fluid={data.hero.childImageSharp.fluid}
          alt=""
          className="main-content__hero"
        />
        <div className="main-content--with-hero__content">
          <h1 className="page-title">Fate Accelerated</h1>

          <p>
            Fate Accelerated, or FAE, is a condensed version of Fate Core that
            brings all the flexibility and power of Fate in an easily
            digestible—and quickly read—package. With FAE, you and your friends
            can step into the world of your favorite books, movies, and TV or
            you can create a world of your own. And set up is simple—you can be
            playing in minutes. Whether you’re new to RPGs or an expert gamer,
            FAE brings something special to the table.
          </p>

          <p>Fate Accelerated Edition. Your story—full speed ahead.</p>
        </div>
      </main>
      <aside className="aside-wrapper">
        <Aside ruleBook="Fate Accelerated" authorlist={authorlist} />
      </aside>
    </Layout>
  );
};

export default FateAcceleratedLP;
