import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "../utils/profile.scss"
import Img from "gatsby-image"

const Greetings = () => {
    const data = useStaticQuery(graphql`
        query {
            placeholderImage: file(relativePath: { eq: "me.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }
    `)
  return (
    <>
      <div className="wrapper">
        <div className="profile-card">
          <div className="profile-card__img">
            <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="wilmer" />
          </div>

          <div className="profile-card__cnt js-profile-cnt">
            <div className="profile-card__name">Lo aprendo, lo enseño <span role="img" aria-label="emoji">👨‍💻</span></div>
            <div className="profile-card__txt bio">
            <p>
                ¡Hey pequeños bytes! Soy un entusiasta de la tecnología, especialmente las tecnologías webs.
                Aprendo, enseñando. Por eso cree este blog. En este blog tratamos temas sobre <a href="/tags/desarrolloweb">#desarrolloweb</a> <a href="/tags/emprendimiento">#emprendimiento</a> <a href="#!">#mitosinformaticos</a>
            </p>
            <p>
                Te invito a leer los articulos publicados en este blog, te ayudarán a crear la web por ti mismo.
            </p>
            </div>

            <div className="profile-card-ctr">
                <a className="profile-card__button button--blue" href="#articulos">Iniciar</a>
            </div>

            <div className="profile-card-social">

              <a
                href="https://twitter.com/wilterrero"
                className="profile-card-social__item twitter"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="icon-font">
                  <svg className="icon">
                    <use xlinkHref="#icon-twitter"></use>
                  </svg>
                </span>
              </a>


              <a
                href="https://github.com/wilmerterrero"
                className="profile-card-social__item github"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="icon-font">
                  <svg className="icon">
                    <use xlinkHref="#icon-github"></use>
                  </svg>
                </span>
              </a>

              <a
                href="https://www.youtube.com/channel/UCxyWgbeavnudPkYbi4YqmmQ"
                className="profile-card-social__item youtube"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="icon-font">
                  <svg className="icon">
                    <use xlinkHref="#icon-youtube"></use>
                  </svg>
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/wilmer-terrero-49540517a/"
                className="profile-card-social__item linkedin"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="icon-font">
                  <svg className="icon">
                    <use xlinkHref="#icon-linkedin"></use>
                  </svg>
                </span>
              </a>

            </div>
          </div>
        </div>
      </div>

      <svg hidden="hidden">
        <defs>
          <symbol id="icon-github" viewBox="0 0 32 32">
            <title>github</title>
            <path d="M16.192 0.512c-8.832 0-16 7.168-16 16 0 7.072 4.576 13.056 10.944 15.168 0.8 0.16 1.088-0.352 1.088-0.768 0-0.384 0-1.632-0.032-2.976-4.448 0.96-5.376-1.888-5.376-1.888-0.736-1.856-1.792-2.336-1.792-2.336-1.44-0.992 0.096-0.96 0.096-0.96 1.6 0.128 2.464 1.664 2.464 1.664 1.44 2.432 3.744 1.728 4.672 1.344 0.128-1.024 0.544-1.728 1.024-2.144-3.552-0.448-7.296-1.824-7.296-7.936 0-1.76 0.64-3.168 1.664-4.288-0.16-0.416-0.704-2.016 0.16-4.224 0 0 1.344-0.416 4.416 1.632 1.28-0.352 2.656-0.544 4-0.544s2.72 0.192 4 0.544c3.040-2.080 4.384-1.632 4.384-1.632 0.864 2.208 0.32 3.84 0.16 4.224 1.024 1.12 1.632 2.56 1.632 4.288 0 6.144-3.744 7.488-7.296 7.904 0.576 0.512 1.088 1.472 1.088 2.976 0 2.144-0.032 3.872-0.032 4.384 0 0.416 0.288 0.928 1.088 0.768 6.368-2.112 10.944-8.128 10.944-15.168 0-8.896-7.168-16.032-16-16.032z"></path>
            <path d="M6.24 23.488c-0.032 0.064-0.16 0.096-0.288 0.064-0.128-0.064-0.192-0.16-0.128-0.256 0.032-0.096 0.16-0.096 0.288-0.064 0.128 0.064 0.192 0.16 0.128 0.256v0z"></path>
            <path d="M6.912 24.192c-0.064 0.064-0.224 0.032-0.32-0.064s-0.128-0.256-0.032-0.32c0.064-0.064 0.224-0.032 0.32 0.064s0.096 0.256 0.032 0.32v0z"></path>
            <path d="M7.52 25.12c-0.096 0.064-0.256 0-0.352-0.128s-0.096-0.32 0-0.384c0.096-0.064 0.256 0 0.352 0.128 0.128 0.128 0.128 0.32 0 0.384v0z"></path>
            <path d="M8.384 26.016c-0.096 0.096-0.288 0.064-0.416-0.064s-0.192-0.32-0.096-0.416c0.096-0.096 0.288-0.064 0.416 0.064 0.16 0.128 0.192 0.32 0.096 0.416v0z"></path>
            <path d="M9.6 26.528c-0.032 0.128-0.224 0.192-0.384 0.128-0.192-0.064-0.288-0.192-0.256-0.32s0.224-0.192 0.416-0.128c0.128 0.032 0.256 0.192 0.224 0.32v0z"></path>
            <path d="M10.912 26.624c0 0.128-0.16 0.256-0.352 0.256s-0.352-0.096-0.352-0.224c0-0.128 0.16-0.256 0.352-0.256 0.192-0.032 0.352 0.096 0.352 0.224v0z"></path>
            <path d="M12.128 26.4c0.032 0.128-0.096 0.256-0.288 0.288s-0.352-0.032-0.384-0.16c-0.032-0.128 0.096-0.256 0.288-0.288s0.352 0.032 0.384 0.16v0z"></path>
          </symbol>

          <symbol id="icon-twitter" viewBox="0 0 32 32">
            <title>twitter</title>
            <path d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"></path>
          </symbol>

          <symbol id="icon-youtube" viewBox="0 0 24 24">
            <title>youtube</title>
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z"/>
          </symbol>

          <symbol id="icon-linkedin" viewBox="-21 -35 682.66669 682">
            <title>linkedin</title>
            <path d="m77.613281-.667969c-46.929687 0-77.613281 30.816407-77.613281 71.320313 0 39.609375 29.769531 71.304687 75.8125 71.304687h.890625c47.847656 0 77.625-31.695312 77.625-71.304687-.894531-40.503906-29.777344-71.320313-76.714844-71.320313zm0 0"/><path d="m8.109375 198.3125h137.195313v412.757812h-137.195313zm0 0"/><path d="m482.054688 188.625c-74.011719 0-123.640626 69.546875-123.640626 69.546875v-59.859375h-137.199218v412.757812h137.191406v-230.5c0-12.339843.894531-24.660156 4.519531-33.484374 9.917969-24.640626 32.488281-50.167969 70.390625-50.167969 49.644532 0 69.5 37.851562 69.5 93.339843v220.8125h137.183594v-236.667968c0-126.78125-67.6875-185.777344-157.945312-185.777344zm0 0"/>
          </symbol>

        </defs>
      </svg>
    </>
  )
}

export default Greetings
