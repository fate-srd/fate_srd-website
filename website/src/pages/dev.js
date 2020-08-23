import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
      <main class="main-content-wrapper">
        <h1 class="page-title">List of Site Content</h1>
        <ul>
          {data.allPages.nodes.map(item => (
            <li>
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
    allPages {
      nodes {
        title
        path
      }
    }
  }
`
