import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Aside from '../components/aside';
import Layout from '../components/layout';
import Menu from '../components/menu';
import SEO from '../components/seo';

const SailsFullOfStars = () => {
  const data = useStaticQuery(graphql`
    {
      hero: file(name: { eq: "hero--sails-full-of-stars" }) {
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
            field_tags: { elemMatch: { name: { eq: "Sails Full of Stars" } } }
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
      <SEO title="Sails Full of Stars" />
      <main className="main-content-wrapper main-content-wrapper--with-hero">
        <Img
          fluid={data.hero.childImageSharp.fluid}
          alt=""
          className="main-content__hero"
        />
        <div className="main-content--with-hero__content">
          <h1 className="page-title">Sails Full of Stars</h1>

          <p>
            In the year 1850, three empires struggle for control of the solar
            system: the Ottomans, whose vast Earthly empire may soon become
            obsolete; the Chinese, who pioneered the construction of rheoships;
            and the French, the new masters of alchemy. Wherever patrols are
            weak, pirates menace the shipping lanes. Sailors whisper rumors of
            dragons swimming through the black void. Fools and madmen push the
            boundaries of alchemy, heedless of the consequences.
          </p>

          <Menu menuName="menu-sails-full-of-stars" classBase="nav-lp" />
        </div>
      </main>
      <aside className="aside-wrapper">
        <Aside ruleBook="Sails Full of Stars" authorlist={authorlist} />
      </aside>
    </Layout>
  );
};

export default SailsFullOfStars;
