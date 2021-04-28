import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Aside from '../components/aside';
import Layout from '../components/layout';
import Menu from '../components/menu';
import SEO from '../components/seo';

const AtomicRobo = () => {
  const data = useStaticQuery(graphql`
    {
      hero: file(name: { eq: "hero--atomic-robo" }) {
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
            field_tags: { elemMatch: { name: { eq: "Atomic Robo" } } }
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
      <SEO title="Atomic Robo" />
      <main className="main-content-wrapper main-content-wrapper--with-hero">
        <Img
          fluid={data.hero.childImageSharp.fluid}
          alt=""
          className="main-content__hero"
        />
        <div className="main-content--with-hero__content">
          <h1 className="page-title">Atomic Robo</h1>

          <p>
            Are you ready for some two-fisted science adventure? Then it's time
            for the Atomic Robo RPG! Have you ever wanted to face down global
            conspiracy as an immortal atomic robot or Carl Sagan? The Atomic
            Robo RPG makes it possible. The Atomic Robo RPG brings you the most
            explosive Fate Core System experience yet. This is action science
            like you've never seen it before, coming straight at you from the
            pages of the popular Atomic Robo comics by Brian Clevinger and Scott
            Wegener. Play as an Action Scientist or immortal robot, super-spy or
            pulp adventurer—or something stranger still from the hidden corners
            of super-science!
          </p>
        </div>
      </main>
      <aside className="aside-wrapper">
        <Aside ruleBook="Atomic Robo" authorlist={authorlist} />
      </aside>
    </Layout>
  );
};

export default AtomicRobo;
