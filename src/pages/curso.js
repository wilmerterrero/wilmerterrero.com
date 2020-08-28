import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Titles from "../components/titles"
import SEO from "../components/seo"

const Courses = ({ data }) => {

    const { site, allMarkdownRemark } = data;
    const siteTitle = site.siteMetadata.title
    const posts = allMarkdownRemark.edges

  return (
    <Layout title={siteTitle}>
        <SEO title="Cursos 📝" />
        <Titles
          emoji="📌" 
          title="Cursos"
          id="courses"
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

export default Courses

export const allCourses = graphql`
  query allCoursePost {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { posttype: { eq: "curso" } } }
    ) {
      edges {
        node {
            fields {
                slug
            }
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            date
            tags
          }
        }
      }
    }
  }
`
