const _ = require("lodash")
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const pathMap = {
  blog: "blog",
  curso: "cursos"
}

module.exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent)
    const source = fileNode.sourceInstanceName

    const slug = createFilePath({
      node,
      getNode,
      basePath: pathMap[source]
    })
    createNodeField({
      node,
      name: "slug",
      value: `/${source}${slug}`
    })
    createNodeField({
      node,
      name: "template",
      value: source
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const tagTemplate = path.resolve("./src/templates/tag.js")

  return graphql(`
  {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
              template
            }
            frontmatter {
              tags
              title
              posttype
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({ node }, index) => {

      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/${node.fields.template}.js`),
        context: {
          // Data passed to context is available in page queries as GraphQL variables.
          slug: node.fields.slug,
          template: node.fields.template,
          tittle: node.frontmatter.tittle,
          posttype: node.frontmatter.posttype,
          previous,
          next,
        }
      })
    })

    // create Tags pages
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)
    // Make tag pages
    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}`,
        component: tagTemplate,
        context: {
          tag,
        },
      })
    })

  })
}
