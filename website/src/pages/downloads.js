import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import downloadList from '../data/downloads.json';

const Downloads = () => (
  <Layout>
    <SEO title="Downloads" />
    <main className="main-content-wrapper">
      <h1 className="page-title">Downloads</h1>
      <p>
        Want to add your Download or Link to the page? Send us a message and
        we'll add it.
      </p>
      {downloadList.map(({ url, label }) => (
        <p>
          <a href={url}>{label}</a>
        </p>
      ))}
    </main>
  </Layout>
);

export default Downloads;
