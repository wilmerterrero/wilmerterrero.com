import React, { useState } from "react"
import "../utils/profile.scss"
import MailchimpSubscribe from "react-mailchimp-subscribe"

const Form = () => {

  const [formstate, setFormState] = useState(false);
  const [mail, setMail] = useState({
      email: ''
  })

  const { email } = mail;

  const handleClick = e => {
      e.preventDefault();
      setFormState(true);
  }

  const handleClickForm = e => {
      e.preventDefault();
      setFormState(false);
  }

  const onChange = e => {
      e.preventDefault();
      setMail({
        ...mail,
        [e.target.name] : e.target.value
    })
  }

  const onSubmit = e => {
      e.preventDefault();

      if(email !== ''){
        setMail({
            ...mail,
            [e.target.name] : e.target.value
        })

        validateMail(email);

        if(validateMail){
            console.log('exito');
            setFormState(false);
            return (
                <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL}/>
            )
        }else{
            console.log('no es un correo valido')
        }
      }
  }

  const validateMail = email => {
      //eslint-disable-next-line
      const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if(email.match(emailRegex)){
          return true;
      }
  }

  return (
    <>
        <div className="subs-card-list about">
            <h2 style={{textAlign:"center", paddingBottom: 50}}><span className="highlight" style={{whiteSpace:"normal"}}>¡Suscribete al contenido!</span></h2>
            <div className="profile-card-ctr">
                <p>Recibe las últimas novedades sobre <span className="highlight">Desarrollo Web</span> y <span className="highlight">Tecnología</span> en tu correo electrónico. 
                &nbsp;<span className="highlight">Sin spam</span> y totalmente <span className="highlight">GRATIS</span> <span role="img" aria-label="heart">💜</span></p>
                <button 
                    className="profile-card__button button--blue button--subs" 
                    onClick={handleClick}
                >¡Suscribirme!</button>
                {
                    formstate ?
                    (  
                        <div className="profile-card-message active">
                            <form 
                                className="profile-card-form"
                                onSubmit={onSubmit}
                            >
                                <div className="profile-card-form__container">
                                <input
                                    type="email"
                                    placeholder="Escribe tu correo aquí..."
                                    name="email"
                                    value={email}
                                    onChange={onChange}
                                />
                                </div>

                                <div className="profile-card-form__bottom">
                                    <button 
                                        className="profile-card__button button--blue"
                                        type="submit"
                                    >
                                        Suscribirse
                                    </button>
                                    <button 
                                        className="profile-card__button button--gray"
                                        onClick={handleClickForm}
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </form>
                            <div className="profile-card__overlay"></div>
                        </div>
                    )
                    : null
                }
            </div>  
        </div>
    </>
  )
}

export default Form
