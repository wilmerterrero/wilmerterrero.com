import React from "react"
import Header from "./header"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <div className="container">
        <div className="content">
          <Header siteTitle={title} />
          <main>{children}</main>
        </div>
        <footer>
          © {new Date().getFullYear()} <a
              href="https://wilmerterrero.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              wilmerterrero
            </a>
          <div className="social-links">
            <a
              href="https://twitter.com/wilterrero"
              target="_blank"
              rel="noopener noreferrer"
            >
              twitter
            </a>{" "}
            &bull;{" "}
            <a
              href="https://github.com/wilmerterrero"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
          </div>
        </footer>
      </div>
    )
  }
}

export default Layout
