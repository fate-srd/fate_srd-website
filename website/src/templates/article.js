import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

// allNodeArticle {
//   nodes {
//     title
//     path {
//       alias
//     }
//     body {
//       processed
//     }
//   }
// }

export default ({ data }) => {
  const post = data.nodeArticle
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <div
          style={{ maxWidth: `900px`, marginBottom: `1.45rem`, width: `100%` }}
        ></div>
        <div dangerouslySetInnerHTML={{ __html: post.body.value }}></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    nodeArticle(id: { eq: $id }) {
      title
      body {
        value
      }
    }
  }
`
