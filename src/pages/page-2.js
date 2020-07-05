import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

function Header(props) {
  return (
    <h2>
      <Link to={`/${props.id}`}>{props.title}</Link>
    </h2>
  )
}

const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page!</h1>
    {data.allNodeArticle.nodes.map(node => (
      <Header title={node.title} id={node.id} />
    ))}
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const query = graphql`
  query {
    allNodeArticle {
      nodes {
        title
        id
      }
    }
  }
`

export default SecondPage
