import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function DevtafolioImg() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "projects/devtafolio.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="collage"/>
}
