import React, { useState } from 'react';

const Error = ({ message }) => {
    const [formstate, setFormState] = useState(true);

    const handleClickForm = e => {
        e.preventDefault();
        setFormState(false);
    }

    return (
        <>
            {
                formstate ? 
                    <div className="profile-card-message active">
                        <div className="profile-card-form">
                            <div className="profile-card-form__container">
                                <p className="error">{message} <span role="img" aria-label="emoji"></span>😥</p>
                            </div>

                            <div className="error_btn">
                                <button 
                                    className="profile-card__button button--blue"
                                    onClick={handleClickForm}
                                >
                                    ¡Ok!
                                </button>
                            </div>
                        </div>
                        <div className="profile-card__overlay"></div>
                    </div>
                : null
            }   
        </> 
     );
}
 
export default Error;