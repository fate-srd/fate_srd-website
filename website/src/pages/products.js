import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Products = () => {
  const data = useStaticQuery(graphql`
    {
      allNodeFateBooks(
        sort: { fields: relationships___field_publisher___name }
      ) {
        edges {
          node {
            title
            field_link {
              uri
            }
            field_online
            field_previous_version_of_fate
            relationships {
              field_publisher {
                name
              }
            }
          }
        }
      }
    }
  `);

  const products = data.allNodeFateBooks.edges;

  const publisherRender = (publisher) => <span>{publisher}</span>;

  const handleProduct = (value) => {
    const url = value.node.field_link.uri;
    const { title } = value.node;
    const publisher = value.node.relationships.field_publisher
      ? publisherRender(value.node.relationships.field_publisher.name)
      : '';

    return (
      <li className="product-list__item" key={title}>
        {publisher}
        <a href={url}>{title}</a>
      </li>
    );
  };

  return (
    <Layout>
      <SEO title="Games &amp; Products" />
      <main className="main-content-wrapper">
        <h1 className="page-title">Games &amp; Products</h1>
        <p>
          Discover Fate books, adventures, and more. If you notice something
          missing <Link to="/contact-us">let us know</Link>.
        </p>
        <ul className="product-list">{products.map(handleProduct)}</ul>
      </main>
    </Layout>
  );
};

export default Products;
