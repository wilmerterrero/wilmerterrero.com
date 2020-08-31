import React from 'react';

const Titles = ({ title, emoji, id, href, link }) => {

    return (
        <div className="titles" id={id}>
            <h1>{title}</h1>
        </div> 
     );
}
 
export default Titles;