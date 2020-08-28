import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Titles from "../components/titles"
import Layout from "../components/layout"
import SEO from "../components/seo"

import CollageImg from "../components/img/blog/blog-img-collage"

const About = () => {

  const data = useStaticQuery(graphql`
    query aboutData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { site } = data
  const siteTitle = site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
        <SEO title="Sobre mi 👨‍💻" />
        <Titles
          emoji="📌" 
          title="Sobre mi"
          id="about"
        />
        <p>¡Hola pequeño byte! Mi nombre es Wilmer Terrero (como sí no nos habíamos dado cuenta <span role="img" aria-label="poker_face">😑</span>). Nací en Santo Domingo, República Dominicana 🇩🇴.
            Desde pequeño siempre tuve interés por las computadoras y por los videojuegos. Siempre pasaba tiempo con mi padre usando la pc.
            En esa época teníamos una <a href="https://images-na.ssl-images-amazon.com/images/I/41u9a8KxdhL._AC_SX425_.jpg">Dell OptiPlex GX280 Pentium 4</a>, con Windows XP <span role="img" aria-label="amazed">🤯</span>
            Me encantaba jugar Tarzan con un emulador de Nintendo 64, porque no estaba disponible para escritorio en ese entonces.</p>
        <h4>¿Cómo descubrí mi afición por la web y la programación?</h4>
        <p>¡Sin saberlo! Jugaba un juego de rol en Habbo.es (me encantaba jugar a juegos de rol en Habbo), en el que para tener un personaje,
            debíamos crear una pequeña descripción de nuestro personaje en una página web... ¿La sorpresa? Para crear esta descripción utilizabamos
            &nbsp;<span>¡HTML y CSS!</span> Ese fue mi primer encuentro con los lenguajes de marcado, sin ni siquiera saber que existían.</p>
        <h4>Mi camino como Desarrollador Web y Educador</h4>
        <p>Actualmente me dedico al Desarrollo Web como Freelancer. He tenido la oportunidad de trabajar para varias empresas y clientes. Siempre voy con los mismos
        &nbsp;objetivos: <span>diseño funcional</span>, <span>plataforma segura</span>, <span>buena experiencia de usuario</span>.</p>
        <p>En mi tiempo libre me gusta compartir mis conocimientos sobre <a href="#!">#webtechnologies</a> <a href="#!">#emprendimiento</a> <a href="#!">#desarrolloweb</a>.
        Por eso cree este blog, con la temática de <span>Lo aprendo, lo enseño</span>. Eso vengo a compartir y evangelizar con ustedes, mis queridos bytes.</p>
        <p>Tengo un <a href="#!">canal de YouTube</a> en donde subo contenido referente a estos temas.</p>
        <h4>Fuera del codigo</h4>
        <p>Soy...</p>
        <ul>
            <li>Colaborador de la mejor obra del mundo. <span role="img" aria-label="world">🌎</span></li>
            <li>Amante de la comida, los animales y los atardeceres. <span role="img" aria-label="mix">🍝🐶🌇</span></li>
            <li>Ávido consumidor de YouTube. <span role="img" aria-label="youtube">🔴</span></li>
            <li>Buen conversador, ideador. <span role="img" aria-label="idea">🙋‍♂️</span></li>
            <li>Constructor. <span role="img" aria-label="constructor">👷‍♂️</span></li>
            <li>Estudiante eterno. <span role="img" aria-label="student">📖</span></li>
        </ul>
        <CollageImg />
      </Layout>
  )
}

export default About