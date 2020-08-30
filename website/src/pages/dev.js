import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
      <main className="main-content-wrapper">
        <h1 className="page-title">List of Site Content</h1>
        <h2>Pages</h2>
        <ul>
          {data.allPages.nodes.map(item => (
            <li key={item.path}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <h2>Articles</h2>
        <ul>
          {console.log(data)}
          {data.allArticles.nodes.map(item => (
            <li key={item.path}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allPages(sort: { fields: title }) {
      nodes {
        title
        path
      }
    }
    allArticles(sort: { fields: title }) {
      nodes {
        title
        path
      }
    }
  }
`
