import React, { useEffect, useState } from 'react';
import { StyledContact } from './ContactStyle';
import GradientText from '../gradientText/GradientText';
import SectionDivider from '../sectionDivider/SectionDivider';
import GradientBtn from '../gradientBtn/GradientBtn';
import { send } from 'emailjs-com';
import validateEmail from '../../utils/emailValidation';
// import checkGif from '../../img/check-gif.gif';
// import checkGif from '../../img/check-2.gif';

const Contact = () => {

  const TO_SEND_INITIAL_STATE = {
    name: '',
    email: '',
    message: '',
  }

  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID || 'service_wme5ndy' ;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID || 'template_9b9117h';
  const USER_ID = process.env.REACT_APP_USER_ID || 'zmhHZ8hEk4X1dHrHJ';

  const [toSend, setToSend] = useState(TO_SEND_INITIAL_STATE);

  const [validForm, setValidForm] = useState(false);

  const [emailStatus, setEmailStatus] = useState('none');
  const [emailSpanText, setEmailSpanText] = useState({
    p1: '',
    p2: '',
  });

  const emailSent = (newEmailStatus, spanText) => {
    setEmailStatus(newEmailStatus);
    setEmailSpanText(spanText);
    setTimeout(() => {
      setEmailStatus('none');
    }, 2500);
  }

  useEffect(() => {
    const validateForm = () => {
      const {name, email, message} = toSend;

      const isNameValid = name.length > 2;
      const isEmailValid = !!validateEmail(email);
      const isMessageValid = message.length >= 10;

      setValidForm(isNameValid && isEmailValid && isMessageValid);
    }
    validateForm();
  }, [toSend]);

  const sendForm = (event) => {
    event.preventDefault();
    send(
      SERVICE_ID,
      TEMPLATE_ID,
      toSend,
      USER_ID,
    )
      .then((response) => {
        emailSent('sucess', { p1: 'Enviado com sucesso! ✔️', p2: 'Muito brigado pelo contato! 😊'});
        setToSend(TO_SEND_INITIAL_STATE);
        console.log(response.status, response.text);
      })
      .catch((err) => {
        emailSent('failed', { p1: 'Falha ao enviar o email! ❌', p2: 'Tente novamente 🥺' })
        console.log(err);
      });
  }

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  }

  return (
    <StyledContact id="contact" className="section-spacing">
      <SectionDivider />
      <GradientText text="Contato" classes="contact-heading"/>
      <form>
        <label htmlFor="name-input">
          <input 
            type="text"
            name="name"
            id="name-input"
            value={ toSend.name }
            onChange={ handleChange }
            placeholder="nome"
          />
        </label>
        <label htmlFor="email-input">
          <input 
            type="text"
            name="email"
            id="email-input"
            value={ toSend.email }
            onChange={ handleChange }
            placeholder="email"
          />
        </label>
        <label htmlFor="subject-input">
          <textarea
            name="message"
            id="subject-input"
            cols="30" rows="10"
            value={ toSend.message }
            onChange={ handleChange }
            placeholder="mensagem"
          />
        </label>
        <GradientBtn text={'Enviar'} onClickFunc={ sendForm } disabled={ !validForm }/>
        { emailStatus !== 'none' && 
          // <img className='email-status' src={ checkGif } alt="check animation" />
          <span className='email-status'>
            <p>{emailSpanText.p1}</p>
            <p>{emailSpanText.p2}</p>
          </span>
        }
      </form>
    </StyledContact>
  );
};

export default Contact;
