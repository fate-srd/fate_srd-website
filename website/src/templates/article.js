import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import linkIcon from '../../../fate_srd-frontend/images/icons/link-solid.svg';
import Layout from '../components/layout';
import Aside from '../components/aside';
import SEO from '../components/seo';

function Article({ data }) {
  const [toc, setToc] = useState([{ text: 'testText', id: 'id-test' }]);

  useEffect(() => {
    const headers = document.querySelectorAll(
      '.main-content-wrapper h2, .main-content-wrapper h3, .main-content-wrapper h4'
    );

    const processAnchorLinks = (header) => {
      if (header.id !== '') {
        const anchor = `<a href="#${header.id}" class="anchor" style="background-image: url(${linkIcon})"></a>`;
        return (header.innerHTML += anchor);
      }
    };

    headers.forEach((header) => {
      processAnchorLinks(header);
    });

    const tocContent = () => {
      const content = [];
      for (const item of headers) {
        console.log(item.tagName);
        if (item.tagName === 'H2') {
          content.push({
            text: item.textContent,
            id: item.id,
          });
        }
      }
      if (content.length <= 1) {
        document.querySelector('.main-content-wrapper .toc').remove();
      }
      return content;
    };

    setToc(tocContent());
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
      .replace(/&amp;/, '')
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
        <div className="toc">
          <h5 className="toc__header">Table of Contents</h5>
          <ul className="toc__ul">
            {toc.map((item) => (
              <li>
                <a href={`#${item.id}`}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
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
