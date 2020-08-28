import React from 'react';

const Titles = ({ title, emoji, id, href, link }) => {

    return (
        <div className="titles" id={id}>
            <span role="img" aria-label="emoji" className="emoji">{emoji}</span>
            <h1>{title}</h1>
            {/* <a href={href} className="link">{link}</a> */}
        </div> 
     );
}
 
export default Titles;