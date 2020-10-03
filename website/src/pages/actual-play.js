import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ActualPlay = () => {
  const data = useStaticQuery(graphql`
    {
      allNodeMedia(sort: { fields: title }) {
        edges {
          node {
            id
            title
            field_authoring_entity
            field_link {
              uri
            }
            relationships {
              field_ap_tags {
                name
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="Actual Play" />
      <main className="main-content-wrapper">
        <h1 className="page-title">Actual Play</h1>
        <p>
          An <strong>actual play</strong> is the play of a role-playing game
          that is performed as entertainment for an audience wider than the
          group of people who are playing it, generally recorded and broadcast
          over the internet. Actual plays may be performed live like a theatre
          show, by video recording, or as a sound recording (i.e. podcast). Some
          actual plays may be provided in several or all of these formats.
        </p>

        <ul>
          {data.allNodeMedia.edges.map((item) => (
            <li key={item.node.title}>
              <a href={item.node.field_link.uri}>{item.node.title}</a> by{' '}
              <em>{item.node.field_authoring_entity}</em>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
};

export default ActualPlay;
