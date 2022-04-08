import React, { useEffect, useState } from 'react';
import { StyledContact } from './ContactStyle';
import GradientText from '../gradientText/GradientText';
import SectionDivider from '../sectionDivider/SectionDivider';
import GradientBtn from '../gradientBtn/GradientBtn';
import { send } from 'emailjs-com';
import validateEmail from '../../utils/emailValidation';

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
  const [errorSpan, setErrorSpan] = useState({
    name: false,
    email: false,
    message: false,
  });

  const errorMessage = {
    name: 'Nome deve ter 3 ou mais caracteres',
    email: 'email@exemplo.com',
    message: 'Mensagem deve ter 10 ou mais caracteres',
  }

  const emailSent = (newEmailStatus, spanText) => {
    setEmailStatus(newEmailStatus);
    setEmailSpanText(spanText);
    setTimeout(() => {
      setEmailStatus('none');
    }, 5000);
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

  const handleFocus = (e) => {
    setErrorSpan({ ...errorSpan, [e.target.name]: true });
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
            onFocus={ handleFocus }
            onBlur= { () => setErrorSpan(false) }
            placeholder="nome"
          />
          {errorSpan.name && <span className='form-span'>{errorMessage.name}</span>}
        </label>
        <label htmlFor="email-input">
          <input 
            type="text"
            name="email"
            id="email-input"
            value={ toSend.email }
            onChange={ handleChange }
            onFocus={ handleFocus }
            onBlur={ () => setErrorSpan(false) }
            placeholder="email"
          />
          {errorSpan.email && <span className='form-span'>{errorMessage.email}</span>}
        </label>
        <label htmlFor="subject-input">
          <textarea
            name="message"
            id="subject-input"
            cols="30" rows="10"
            value={ toSend.message }
            onChange={ handleChange }
            onFocus={ handleFocus }
            onBlur={ () => setErrorSpan(false) }
            placeholder="mensagem"
          />
          {errorSpan.message && <span className='form-span span-text-area'>{errorMessage.message}</span>}
        </label>
        <GradientBtn text={'Enviar'} onClickFunc={ sendForm } disabled={ !validForm }/>
        { emailStatus !== 'none' && 
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
