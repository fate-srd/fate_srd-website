import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Aside from '../components/aside';
import Layout from '../components/layout';
import Menu from '../components/menu';
import SEO from '../components/seo';

const FateSystemToolkitLP = () => {
  const data = useStaticQuery(graphql`
    {
      hero: file(name: { eq: "hero--fate-system-toolkit" }) {
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
            field_tags: { elemMatch: { name: { eq: "Fate System Toolkit" } } }
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
      <SEO title="Fate System Toolkit" />
      <main className="main-content-wrapper main-content-wrapper--with-hero">
        <Img
          fluid={data.hero.childImageSharp.fluid}
          alt=""
          className="main-content__hero"
        />
        <div className="main-content--with-hero__content">
          <h1 className="page-title">Fate System Toolkit</h1>
          <p>
            Rules, glorious rules! The Fate Core system is flexible, hackable,
            and adaptable to any world you can dream up. This Fate System
            Toolkit is packed with system ideas to bring those dreams to life.
          </p>
          <p>
            Learn how to hack the skill system to better suit your terraforming
            campaign. Get ideas on how to create races and societies for your
            woodland elves, subterranean aliens, or afterlife police force.
            Customize our magic starters to create your own system, and use our
            gadget starters to bring your gear to life (only not literally).
          </p>
          <p>
            Whatever genre you’re gaming, you’ll find a wide array of
            customizable concepts and optional rules in the Fate System Toolkit
            to take your campaign to the next level.
          </p>
          <Menu menuName="menu-fate-system-toolkit" classBase="nav-lp" />
        </div>
      </main>
      <aside className="aside-wrapper">
        <Aside ruleBook="Fate System Toolkit" authorlist={authorlist} />
      </aside>
    </Layout>
  );
};

export default FateSystemToolkitLP;
