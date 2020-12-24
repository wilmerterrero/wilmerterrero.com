import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Titles from "../components/titles"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] },
          filter: {frontmatter: {posttype: {eq: "blog"}}}
        ) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              spoiler
            }
            timeToRead
          }
        }
      }
    }
  `)

  const { site, allMarkdownRemark } = data;
  const siteTitle = site.siteMetadata.title
  const posts = allMarkdownRemark.edges

  return (
    <Layout title={siteTitle}>
        <SEO title="Artículos 📝" />
        <Titles
          title="Artículos"
          id="blog"
        />
        <div className="blog">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article className="blog-list" key={node.fields.slug}>
                <header>
                  <h2>
                    <a
                      href={`${node.fields.slug}`}
                    >
                      {title}
                    </a>
                  </h2>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.spoiler || node.excerpt,
                    }}
                  />
                </section>
                <div className="items">
                    <small className="items-inline">{node.frontmatter.date} <span role="img" aria-label="heart">📆</span></small>
                    <small className="items-inline">Tiempo de lectura: {node.timeToRead} minutos <span role="img" aria-label="heart">⌛</span></small>
                </div>
              </article>
            )
          })}
        </div>
      </Layout>
  )
}

export default Blog