import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "../utils/profile.scss"

import Titles from "../components/titles"
import Layout from "../components/layout"
import Bio from "../components/bio"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import CursoHTMLCSSJS from "../components/img/cursos/html-css-js"

const Cursos = () => {

  const data = useStaticQuery(graphql`
    query site {
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
    <>  
    <Layout title={siteTitle}>
        <SEO title="Cursos 📙" />
        <Titles
          title="Cursos"
          id="cursos"
        />
      <div className="wrapper">
        <div className="profile-card js-profile-card">
          <div className="profile-card__img-cursos">
            <CursoHTMLCSSJS />
          </div>

          <div className="profile-card__cnt js-profile-cnt">
            <div className="profile-card__name">HTML-CSS-JS <span role="img" aria-label="emojis">🎉</span></div>
            <div className="profile-card__txt">
            <p>
                Curso de iniciación al desarrollo web en donde tratamos temas desde el inicio de la web, hasta las bases del lenguaje de marcado
                &nbsp; más utilizado, HTML. Con ejemplos didácticos que sentarán las bases para continuar en tu camino como desarrollador web.
            </p>
            </div>

            <div className="profile-card-ctr">
                <a className="profile-card__button button--blue" href="curso/curso-html-css-js">Ver contenido</a>
            </div>

          </div>
        </div>
      </div>
        <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
        <Bio />
      </Layout>
    </>
  )
}

export default Cursos