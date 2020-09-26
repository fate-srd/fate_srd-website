import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Aside from '../components/aside';
import Layout from '../components/layout';
import Menu from '../components/menu';
import SEO from '../components/seo';

const VentureCity = () => {
  const data = useStaticQuery(graphql`
    {
      hero: file(name: { eq: "hero--venture-city" }) {
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
            field_tags: { elemMatch: { name: { eq: "Venture City" } } }
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
      <SEO title="Venture City" />
      <main className="main-content-wrapper main-content-wrapper--with-hero">
        <Img
          fluid={data.hero.childImageSharp.fluid}
          alt=""
          className="main-content__hero"
        />
        <div className="main-content--with-hero__content">
          <h1 className="page-title">Venture City</h1>

          <p>
            Take a trip to Venture City, a world of superpowers, villainous
            corporations, and ruthless gangs, set in a near-future where powers
            are for sale. From the corporate sponsored heroes to the
            supervillains in the news, and all the way down to the little guys
            who try to hide their powers, there are superheroes everywhere you
            see. Bring them to your Fate Core table with this Venture City
            compilation, which includes both Venture City Stories and Venture
            City Powers, written by masterminds Brian Engard and Ed Turner.
          </p>

          <Menu menuName="menu-venture-city" classBase="nav-lp" />
        </div>
      </main>
      <aside className="aside-wrapper">
        <Aside ruleBook="Venture City" authorlist={authorlist} />
      </aside>
    </Layout>
  );
};

export default VentureCity;
