const _ = require("lodash")
const path = require(`path`)

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = path.resolve("./src/templates/blog-post.js")
  const tagTemplate = path.resolve("./src/templates/tag.js")
  const courseTemplate = path.resolve("./src/templates/course-post.js")

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
            }
            frontmatter {
              tags
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
    posts.forEach(({ node }) => {
      if (node.frontmatter.posttype === "curso") {
        createPage({
          path: `/curso/${_.kebabCase(node.frontmatter.path)}`,
          component: courseTemplate,
          context: { slug: node.fields.slug }
        });
      } else {
        createPage({
          path: `/blog/${_.kebabCase(node.frontmatter.path)}`,
          component: postTemplate,
          context: { slug: node.fields.slug }
        });
      }
    });

    // create Tags pages
    // pulled directly from https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#add-tags-to-your-markdown-files
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
