import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Titles from "../components/titles"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SubscriptionForm from '../components/subscription'

const Newsletter = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { site } = data;
  const siteTitle = site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
        <SEO title="Newsletter 💌" />
        <Titles
          title="Newsletter"
          id="newsletter"
        />
        <SubscriptionForm />
      </Layout>
  )
}

export default Newsletter