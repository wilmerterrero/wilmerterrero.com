import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"

import Links from '../components/links'
import Headroom from "react-headroom"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

class Header extends React.Component {
  render() {
    const { siteTitle } = this.props
    return (
      <>
        <header>
          <Headroom>
            <div className="navbar">
              <h1>
                <AniLink cover direction="down" bg="#8c61ff" to="/">
                  {siteTitle}
                </AniLink>
              </h1>

              <ThemeToggler>
                {({ theme, toggleTheme }) => (
                  <label className="tog">
                    <input
                      type="checkbox"
                      onChange={e =>
                        toggleTheme(e.target.checked ? "dark" : "light")
                      }
                      checked={theme === "dark"}
                    />
                    {theme === "dark" ? (
                      <div className="on">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 
                            viewBox="0 0 302.4 302.4">
                            <g>
                              <g>
                                <g>
                                  <path d="M204.8,97.6C191.2,84,172,75.2,151.2,75.2s-40,8.4-53.6,22.4c-13.6,13.6-22.4,32.8-22.4,53.6s8.8,40,22.4,53.6
                                    c13.6,13.6,32.8,22.4,53.6,22.4s40-8.4,53.6-22.4c13.6-13.6,22.4-32.8,22.4-53.6S218.8,111.2,204.8,97.6z"/>
                                  <path d="M151.2,51.6c5.6,0,10.4-4.8,10.4-10.4V10.4c0-5.6-4.8-10.4-10.4-10.4c-5.6,0-10.4,4.8-10.4,10.4v30.8
                                    C140.8,46.8,145.6,51.6,151.2,51.6z"/>
                                  <path d="M236.4,80.8l22-22c4-4,4-10.4,0-14.4s-10.4-4-14.4,0l-22,22c-4,4-4,10.4,0,14.4C225.6,84.8,232,84.8,236.4,80.8z"/>
                                  <path d="M292,140.8h-30.8c-5.6,0-10.4,4.8-10.4,10.4c0,5.6,4.8,10.4,10.4,10.4H292c5.6,0,10.4-4.8,10.4-10.4
                                    C302.4,145.6,297.6,140.8,292,140.8z"/>
                                  <path d="M236,221.6c-4-4-10.4-4-14.4,0s-4,10.4,0,14.4l22,22c4,4,10.4,4,14.4,0s4-10.4,0-14.4L236,221.6z"/>
                                  <path d="M151.2,250.8c-5.6,0-10.4,4.8-10.4,10.4V292c0,5.6,4.8,10.4,10.4,10.4c5.6,0,10.4-4.8,10.4-10.4v-30.8
                                    C161.6,255.6,156.8,250.8,151.2,250.8z"/>
                                  <path d="M66,221.6l-22,22c-4,4-4,10.4,0,14.4s10.4,4,14.4,0l22-22c4-4,4-10.4,0-14.4C76.8,217.6,70.4,217.6,66,221.6z"/>
                                  <path d="M51.6,151.2c0-5.6-4.8-10.4-10.4-10.4H10.4c-5.6,0-10.4,4.8-10.4,10.4s4.8,10.4,10.4,10.4h30.8
                                    C46.8,161.6,51.6,156.8,51.6,151.2z"/>
                                  <path d="M66,80.8c4,4,10.4,4,14.4,0s4-10.4,0-14.4l-22-22c-4-4-10.4-4-14.4,0s-4,10.4,0,14.4L66,80.8z"/>
                                </g>
                              </g>
                            </g>
                          </svg>
                      </div>
                    ) : (
                      <div className="off">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 312.812 312.812">
                          <g>
                            <g>
                              <path d="M305.2,178.159c-3.2-0.8-6.4,0-9.2,2c-10.4,8.8-22.4,16-35.6,20.8c-12.4,4.8-26,7.2-40.4,7.2c-32.4,0-62-13.2-83.2-34.4
                                c-21.2-21.2-34.4-50.8-34.4-83.2c0-13.6,2.4-26.8,6.4-38.8c4.4-12.8,10.8-24.4,19.2-34.4c3.6-4.4,2.8-10.8-1.6-14.4
                                c-2.8-2-6-2.8-9.2-2c-34,9.2-63.6,29.6-84.8,56.8c-20.4,26.8-32.4,60-32.4,96c0,43.6,17.6,83.2,46.4,112s68,46.4,112,46.4
                                c36.8,0,70.8-12.8,98-34c27.6-21.6,47.6-52.4,56-87.6C314,184.959,310.8,179.359,305.2,178.159z"/>
                            </g>
                          </g>
                        </svg>
                      </div>
                    )}
                  </label>
                )}
              </ThemeToggler>
            </div>
          </Headroom>
        </header>
        <Links />
      </>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
