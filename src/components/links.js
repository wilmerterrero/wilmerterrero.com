import React from 'react'
import { Link } from 'gatsby'

const Links = () => {
    return (
        <div className="header">
            <nav className="nav">
                <Link to="/blog" className="links">Blog</Link>
                <Link to="/about" className="links">Sobre mi</Link>
            </nav>
            <nav className="nav">
                <Link to="/projects" className="links">Proyectos</Link>
                <Link to="/cursos" className="links">Cursos</Link>
            </nav>
        </div>
     );
}
 
export default Links;