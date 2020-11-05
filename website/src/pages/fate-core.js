import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Aside from '../components/aside';
import Layout from '../components/layout';
import Menu from '../components/menu';
import SEO from '../components/seo';

const FateCoreLP = () => {
  const data = useStaticQuery(graphql`
    {
      hero: file(name: { eq: "hero--fate-core" }) {
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
            field_tags: { elemMatch: { name: { eq: "Fate Core" } } }
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
      <SEO title="Fate Core" />
      <main className="main-content-wrapper main-content-wrapper--with-hero">
        <Img
          fluid={data.hero.childImageSharp.fluid}
          alt=""
          className="main-content__hero"
        />
        <div className="main-content--with-hero__content">
          <h1 className="page-title">Fate Core</h1>
          <p>
            Grab your plasma rifles, spell components, and jetpacks! Name your
            game; Fate Core is the foundation that can make it happen. Fate Core
            is a flexible system that can support whatever worlds you dream up.
            Have you always wanted to play a post-apocalyptic spaghetti western
            with tentacle monsters? Swords and sorcery in space? Wish there was
            a game based on your favorite series of books, film, or television,
            but it never happened? Fate Core is your answer.
          </p>
          <p>
            Fate Core is a tabletop roleplaying game about proactive, capable
            people who lead dramatic lives. The type of drama they experience is
            up to you. But wherever they go, you can expect a fun storytelling
            experience full of twists…of fate.
          </p>
          <Menu menuName="menu-fate-core" classBase="nav-lp" />
        </div>
      </main>
      <aside className="aside-wrapper">
        <Aside ruleBook="Fate Core" authorlist={authorlist} />
      </aside>
    </Layout>
  );
};

export default FateCoreLP;
