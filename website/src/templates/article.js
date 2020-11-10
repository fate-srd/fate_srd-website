import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';
import linkIcon from 'fate_srd-frontend/images/icons/link-solid.svg';
import Layout from '../components/layout';
import Aside from '../components/aside';
import SEO from '../components/seo';

function Article({ data }) {
  const pageData = data.allArticles.nodes[0];
  let pageContent =
    pageData.body.processed !== ''
      ? pageData.body.processed
      : pageData.body.value;

  function replacer(match, p1, p2, p3, offset, string) {
    console.log(`p2 is ${p2}`);
    const hash = p2
      .replace(/ /g, '-')
      .replace(/[?,:()“”"'’*]/g, '')
      .replace(/^-/, '')
      .toLowerCase();
    return `<h${p1} id="${hash}">${p2}<a href="#${hash}" class="anchor" style="background-image: url(${linkIcon})"></a></h${p1}>`;
  }
  // pageContent = pageContent.replace(
  //   /<h(\d+).*?id=".+".*?>([^<>]*)<\/h(\d+)>/gi,
  //   replacer
  // );
  pageContent = pageContent.replace(/<h(\d+)>([^<>]*)<\/h(\d+)>/gi, replacer);

  const ruleBook = pageData.relationships.tags[0].name;
  const authorlist =
    data.allArticles.nodes[0].relationships.tags[0].relationships.node__author;

  return (
    <Layout aside>
      <SEO title={pageData.title} />
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
