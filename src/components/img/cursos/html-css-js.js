import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function CursoHTMLCSSJS() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "cursos/HTML_CSS_JS.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Curso de HTML-CSS-JS"/>
}