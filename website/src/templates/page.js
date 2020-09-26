import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

function Page({ data }) {
  const pageData = data.allPages.edges[0].node;

  return (
    <Layout>
      <SEO title={pageData.title} />
      <main className="main-content-wrapper">
        <h1 className="page-title">{pageData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: pageData.body }} />
      </main>
      <aside className="aside-wrapper">Aside</aside>
    </Layout>
  );
}

export const query = graphql`
  query($id: String!) {
    allPages(filter: { id: { eq: $id } }) {
      edges {
        node {
          id
          body
          title
          path
        }
      }
    }
  }
`;

Page.propTypes = {
  data: PropTypes.object,
};

export default Page;
