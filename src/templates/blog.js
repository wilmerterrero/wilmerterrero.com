import React from "react"
import { graphql } from "gatsby"
import { kebabCase } from "lodash"
import { Disqus } from "gatsby-plugin-disqus"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Lettering from "../components/lettering"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  const disqusConfig = {
    url: "",
    identifier: "",
    title: siteTitle
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article className="post">
        <header>
          <h2>
            <Lettering title={post.frontmatter.title} />
          </h2>
          <p className="date">{post.frontmatter.date}</p>
          {post.frontmatter.tags ? (
            <ul className="tags">
              {post.frontmatter.tags.map((tag) => (
                <li key={tag + `tag`}>
                  <AniLink
                    cover
                    direction="down"
                    bg="#8c61ff"
                    to={`/tags/${kebabCase(tag)}`}
                  >
                    #{tag}
                  </AniLink>
                </li>
              ))}
            </ul>
          ) : null}
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <nav>
          <ul className="links">
            <li>
              {previous && (
                <AniLink
                  cover
                  direction="right"
                  bg="#8c61ff"
                  to={previous.fields.slug}
                  rel="prev"
                >
                  ← {previous.frontmatter.title}
                </AniLink>
              )}
            </li>
            {next.frontmatter.posttype !== "curso" ? (
              <li>
                {next && (
                  <AniLink
                    cover
                    direction="right"
                    bg="#8c61ff"
                    to={next.fields.slug}
                    rel="next"
                  >
                    {next.frontmatter.title} →
                  </AniLink>
                )}
              </li>
            ) : null}
          </ul>
        </nav>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Disqus config={disqusConfig} />
        <Bio />
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
query ($slug: String!) {
  site {
    siteMetadata {
      title
      author
    }
  }
  markdownRemark(fields: {slug: {eq: $slug}}, frontmatter: {posttype: {eq: "blog"}}) {
    id
    excerpt(pruneLength: 160)
    html
    frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
      spoiler
      tags
    }
  }
}
`
