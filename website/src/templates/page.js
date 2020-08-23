import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const pageData = data.allPages.edges[0].node
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>{pageData.title}</h1>
        <div
          style={{ maxWidth: `900px`, marginBottom: `1.45rem`, width: `100%` }}
        ></div>
        <div dangerouslySetInnerHTML={{ __html: pageData.body }}></div>
      </div>
    </Layout>
  )
}
//1e01aa9a-7977-5aaf-9868-d9b907808ae8
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
