import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

class Search extends React.Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://cse.google.com/cse.js?cx=605997aac81893733';
    this.div.appendChild(script);
  }

  render() {
    return (
      <Layout>
        <SEO title="Search" />
        <main className="main-content-wrapper" ref={(el) => (this.div = el)}>
          <h1 className="page-title">Search</h1>
          <div className="gcse-search"><a href="https://cse.google.com/cse?cx=605997aac81893733">Search the Fate SRD</a></div>
        </main>
      </Layout>
    );
  }
}

export default Search;
