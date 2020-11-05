import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Aside from '../components/aside';
import Layout from '../components/layout';
import Menu from '../components/menu';
import SEO from '../components/seo';

const GodsAndMonsters = () => {
  const data = useStaticQuery(graphql`
    {
      hero: file(name: { eq: "hero--gods-and-monsters" }) {
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
            field_tags: { elemMatch: { name: { eq: "Gods and Monsters" } } }
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
      <SEO title="Gods and Monsters" />
      <main className="main-content-wrapper main-content-wrapper--with-hero">
        <Img
          fluid={data.hero.childImageSharp.fluid}
          alt=""
          className="main-content__hero"
        />
        <div className="main-content--with-hero__content">
          <h1 className="page-title">Gods and Monsters</h1>

          <p>
            The world is young and majestic, and humans eke out a living and
            dream of civilization. But you are not like them: you are a god. A
            primal creature, your soul a blazing font of power, your body an
            expression of your nature. The more extreme your behavior the
            greater the power you can wield—but it is easy to become lost in a
            single facet of your existence and cross the line from god to
            monster.
          </p>

          <Menu menuName="menu-gods-and-monsters" classBase="nav-lp" />
        </div>
      </main>
      <aside className="aside-wrapper">
        <Aside ruleBook="Gods and Monsters" authorlist={authorlist} />
      </aside>
    </Layout>
  );
};

export default GodsAndMonsters;
