/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allPages {
        edges {
          node {
            id
            title
            path
          }
        }
      }
      allArticles {
        edges {
          node {
            id
            title
            path
          }
        }
      }
    }
  `).then(result => {
    result.data.allPages.edges.forEach(({ node }) => {
      createPage({
        path: node.path,
        component: path.resolve(`./src/templates/page.js`),
        context: {
          id: node.id,
        },
      })
    })
    result.data.allArticles.edges.forEach(({ node }) => {
      createPage({
        path: node.path,
        component: path.resolve(`./src/templates/article.js`),
        context: {
          id: node.id,
        },
      })
    })
  })
}
