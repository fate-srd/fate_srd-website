import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Aside from '../components/aside';

function Article({ data }) {
  const pageData = data.allArticles.nodes[0];
  const pageContent =
    pageData.body.processed !== ''
      ? pageData.body.processed
      : pageData.body.value;
  const ruleBook = pageData.relationships.tags[0].name;
  const authorlist =
    data.allArticles.nodes[0].relationships.tags[0].relationships.node__author;

  return (
    <Layout aside>
      <main className="main-content-wrapper">
        <p className="rules-section">{ruleBook}</p>
        <h1 className="page-title">{pageData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: pageContent }} />
      </main>
      <aside className="aside-wrapper">
        <Aside ruleBook={ruleBook} authorlist={authorlist} />
      </aside>
    </Layout>
  );
}

export const query = graphql`
  query($id: String!) {
    allArticles(filter: { id: { eq: $id } }) {
      nodes {
        title
        body {
          value
          processed
        }
        id
        relationships {
          tags {
            ... on taxonomy_term__fate_version {
              id
              name
              relationships {
                node__author {
                  title
                }
              }
            }
          }
        }
      }
    }
  }
`;

Article.propTypes = {
  data: PropTypes.object,
};

export default Article;
