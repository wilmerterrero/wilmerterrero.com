import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Titles from "../components/titles"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => {

  const data = useStaticQuery(graphql`
    query allPosts {
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
          emoji="📌" 
          title="Artículos"
          id="blog"
          // link="Ver todos los artículos"
          // href="#!"
        />
        <div className="blog-list">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <article key={node.fields.slug}>
                <header>
                  <h2>
                    <a
                      href={`${node.fields.slug}`}
                    >
                      {title}
                    </a>
                  </h2>
                  <small>{node.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.spoiler || node.excerpt,
                    }}
                  />
                </section>
              </article>
            )
          })}
        </div>
      </Layout>
  )
}

export default Blog