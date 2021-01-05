import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import linkIcon from '../../../fate_srd-frontend/images/icons/link-solid.svg';
import Layout from '../components/layout';
import Aside from '../components/aside';
import SEO from '../components/seo';

function Article({ data }) {
  useEffect(() => {
    const h2 = document.querySelectorAll('.main-content-wrapper h2');
    const h3 = document.querySelectorAll('.main-content-wrapper h3');
    const h4 = document.querySelectorAll('.main-content-wrapper h4');

    const processAnchorLinks = (header) => {
      if (header.id !== '') {
        const anchor = `<a href="#${header.id}" class="anchor" style="background-image: url(${linkIcon})"></a>`;
        return (header.innerHTML += anchor);
      }
    };

    h2.forEach((header) => {
      processAnchorLinks(header);
    });
    h3.forEach((header) => {
      processAnchorLinks(header);
    });
    h4.forEach((header) => {
      processAnchorLinks(header);
    });
  }, []);

  const pageData = data.allArticles.nodes[0];
  let pageContent =
    pageData.body.processed !== ''
      ? pageData.body.processed
      : pageData.body.value;

  function replacer(match, p1, p2, p3, offset, string) {
    const hash = p2
      .replace(/ /g, '-')
      .replace(/[?,:()“”"'’*]/g, '')
      .replace(/^-/, '')
      .toLowerCase();
    return `<h${p1} id="${hash}">${p2}</h${p1}>`;
  }
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
