import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Aside from '../components/aside';
import Layout from '../components/layout';
import Menu from '../components/menu';

const FateAdversaryToolkitLP = () => {
  const data = useStaticQuery(graphql`
    {
      hero: file(name: { eq: "hero--fate-adversary-toolkit" }) {
        id
        name
        childImageSharp {
          fluid(jpegQuality: 90, maxHeight: 400) {
            base64
            tracedSVG
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
            field_tags: {
              elemMatch: { name: { eq: "Fate Adversary Toolkit" } }
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
      <main className="main-content-wrapper main-content-wrapper--with-hero">
        <Img
          fluid={data.hero.childImageSharp.fluid}
          alt=""
          className="main-content__hero"
        />
        <div className="main-content--with-hero__content">
          <h1 className="page-title">Fate Adversary Toolkit</h1>
          <p>
            Antagonists. Obstacles. Villains. Impediments. Call them what you
            will, but a great campaign needs opposition to create stirring
            conflict. The Fate Adversary Toolkit offers a variety of ideas,
            mechanics, and hacks to help you make the most out of every obstacle
            in your game. Explore what an adversary is in Fate terms, and always
            remember that everything is a character. Inhabit hostile worlds and
            situations that work against the players. Face down mooks and big
            bads built to provide high stakes drama and engage everyone at the
            table. Learn how to use high quality adversaries to drive your
            stories to completion.
          </p>
          <Menu menuName="menu-fate-adversary-toolkit" classBase="nav-lp" />
        </div>
      </main>
      <aside className="aside-wrapper">
        <Aside ruleBook="Fate Adversary Toolkit" authorlist={authorlist} />
      </aside>
    </Layout>
  );
};

export default FateAdversaryToolkitLP;
