import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Downloads = () => {
  const data = useStaticQuery(graphql`
    {
      characterSheets: allNodeDownload(
        sort: { fields: title }
        filter: {
          relationships: {
            field_dl_tags: { elemMatch: { name: { eq: "Character Sheet" } } }
          }
        }
      ) {
        edges {
          node {
            title
            field_link {
              uri
            }
            field_hosted_elsewhere
            field_file {
              description
              display
            }
            relationships {
              field_file {
                id
                size
                uri {
                  url
                  value
                }
              }
            }
          }
        }
      }
      cheatSheet: allNodeDownload(
        sort: { fields: title }
        filter: {
          relationships: {
            field_dl_tags: { elemMatch: { name: { eq: "Cheat Sheet" } } }
          }
        }
      ) {
        edges {
          node {
            title
            field_link {
              uri
            }
            field_hosted_elsewhere
            field_file {
              description
              display
            }
            relationships {
              field_file {
                id
                size
                uri {
                  url
                  value
                }
              }
            }
          }
        }
      }
      exampleOfPlay: allNodeDownload(
        sort: { fields: title }
        filter: {
          relationships: {
            field_dl_tags: { elemMatch: { name: { eq: "Example of Play" } } }
          }
        }
      ) {
        edges {
          node {
            title
            field_link {
              uri
            }
            field_hosted_elsewhere
            field_file {
              description
              display
            }
            relationships {
              field_file {
                id
                size
                uri {
                  url
                  value
                }
              }
            }
          }
        }
      }
      gameCreation: allNodeDownload(
        sort: { fields: title }
        filter: {
          relationships: {
            field_dl_tags: { elemMatch: { name: { eq: "Game Creation" } } }
          }
        }
      ) {
        edges {
          node {
            title
            field_link {
              uri
            }
            field_hosted_elsewhere
            field_file {
              description
              display
            }
            relationships {
              field_file {
                id
                size
                uri {
                  url
                  value
                }
              }
            }
          }
        }
      }
      reference: allNodeDownload(
        sort: { fields: title }
        filter: {
          relationships: {
            field_dl_tags: { elemMatch: { name: { eq: "Reference" } } }
          }
        }
      ) {
        edges {
          node {
            title
            field_link {
              uri
            }
            field_hosted_elsewhere
            field_file {
              description
              display
            }
            relationships {
              field_file {
                id
                size
                uri {
                  url
                  value
                }
              }
            }
          }
        }
      }
    }
  `);

  function linkMaker(value) {
    const { title } = value.node;
    let url = '';
    if (value.node.relationships.field_file != null) {
      url = value.node.relationships.field_file.uri.url;
    }
    if (value.node.field_link != null) {
      url = value.node.field_link.uri;
    }

    return (
      <li>
        <a href={url}>{title}</a>
      </li>
    );
  }

  return (
    <Layout>
      <SEO title="Downloads" />
      <main className="main-content-wrapper">
        <h1 className="page-title">Downloads</h1>
        <p>
          Want to add your Download or Link to the page? Send us a message and
          we'll add it.
        </p>
        <h2>Character Sheets</h2>
        <ul>{data.characterSheets.edges.map(linkMaker)}</ul>
        <h2>Game Creation</h2>
        <ul>{data.gameCreation.edges.map(linkMaker)}</ul>
        <h2>Cheat Sheet</h2>
        <ul>{data.cheatSheet.edges.map(linkMaker)}</ul>
        <h2>Example of Play</h2>
        <ul>{data.exampleOfPlay.edges.map(linkMaker)}</ul>
        <h2>Reference</h2>
        <ul>{data.reference.edges.map(linkMaker)}</ul>
      </main>
    </Layout>
  );
};

export default Downloads;
