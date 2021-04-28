import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Aside from '../components/aside';
import Layout from '../components/layout';
import Menu from '../components/menu';
import SEO from '../components/seo';

const IHunt = () => {
  const data = useStaticQuery(graphql`
    {
      hero: file(name: { eq: "hero--ihunt" }) {
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
            field_tags: { elemMatch: { name: { eq: "#iHunt" } } }
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
      <SEO title="#iHunt" />
      <main className="main-content-wrapper main-content-wrapper--with-hero">
        <Img
          fluid={data.hero.childImageSharp.fluid}
          alt=""
          className="main-content__hero"
        />
        <div className="main-content--with-hero__content">
          <h1 className="page-title">#iHunt</h1>

          <p>
            #iHunt is a story telling game about killing monsters in the gig
            economy. In it, you play millennials scraping by paycheck to
            paycheck to make ends meet. A gig app called #iHunt offers them more
            money than they've ever made to hit the streets and kill vampires,
            werewolves, demons, and anything else that goes bump in the night.
          </p>
        </div>
      </main>
      <aside className="aside-wrapper">
        <Aside ruleBook="iHunt" authorlist={authorlist} />
      </aside>
    </Layout>
  );
};

export default IHunt;
