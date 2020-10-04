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
      hero: file(name: { eq: "hero--odds-ends" }) {
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
    }
  `);

  return (
    <Layout aside>
      <SEO title="Odds &amp; Ends" />
      <main className="main-content-wrapper main-content-wrapper--with-hero">
        <Img
          fluid={data.hero.childImageSharp.fluid}
          alt=""
          className="main-content__hero"
        />
        <div className="main-content--with-hero__content">
          <h1 className="page-title">Odds &amp; Ends</h1>

          <p>A collection of small SRD content for use in your games.</p>

          <Menu menuName="menu-odds-ends" classBase="nav-lp" />
        </div>
      </main>
      <aside className="aside-wrapper">
        <Aside ruleBook="Odds and Ends" />
      </aside>
    </Layout>
  );
};

export default AtomicRobo;
