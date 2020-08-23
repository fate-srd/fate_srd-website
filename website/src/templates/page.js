import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const pageData = data.allPages.edges[0].node
  return (
    <Layout>
      <main class="main-content-wrapper">
        <h1 class="page-title">{pageData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: pageData.body }}></div>
      </main>
      <aside class="aside-wrapper">Aside</aside>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    allPages(filter: { id: { eq: $id } }) {
      edges {
        node {
          id
          body
          title
          path
        }
      }
    }
  }
`
