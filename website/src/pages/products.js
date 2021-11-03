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
            relationships {
              field_publisher {
                name
                relationships {
                  node__fate_books {
                    title
                    field_link {
                      uri
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const products = data.allNodeFateBooks.edges;

  const publisherList = [];

  const handleProduct = (value) => {
    if (
      value.node.relationships.field_publisher &&
      !publisherList.includes(value.node.relationships.field_publisher.name)
    ) {
      const publisher = value.node.relationships.field_publisher.name;
      const listOfProducts =
        value.node.relationships.field_publisher.relationships.node__fate_books;
      publisherList.push(value.node.relationships.field_publisher.name);

      return (
        <div>
          <h3 key={publisher} id={publisher}>
            {publisher}
          </h3>
          <ul className="full-reset-ul">
            {listOfProducts
              .sort(function (a, b) {
                if (a.title < b.title) return -1;
                if (a.title > b.title) return 1;
                return 0;
              })
              .map((item) => (
                <li key={item.title}>
                  <a href={item.field_link.uri}>
                    {item.title}
                    {/* {item.field_link.uri.includes('itch') ? ' (itch.io)' : ''}
                    {item.field_link.uri.includes('drivethrurpg')
                      ? ' (DriveThruRPG)'
                      : ''} */}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      );
    }
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
