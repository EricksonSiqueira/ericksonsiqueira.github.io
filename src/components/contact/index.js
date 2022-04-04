import React, { useState } from 'react';
import { StyledContact } from './ContactStyle';
import GradientText from '../gradientText/GradientText';
import SectionDivider from '../sectionDivider/SectionDivider';
import GradientBtn from '../gradientBtn/GradientBtn';
import { send } from 'emailjs-com';

const Contact = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  const TO_SEND_INITIAL_STATE = {
    name: '',
    email: '',
    message: '',
  }

  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID || 'service_wme5ndy' ;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID || 'template_9b9117h';
  const USER_ID = process.env.REACT_APP_USER_ID || 'zmhHZ8hEk4X1dHrHJ';

  const [toSend, setToSend] = useState(TO_SEND_INITIAL_STATE);

  console.log(SERVICE_ID, TEMPLATE_ID, USER_ID);

  const sendForm = (event) => {
    event.preventDefault();
    send(
      SERVICE_ID,
      TEMPLATE_ID,
      toSend,
      USER_ID,
    )
      .then((response) => {
        window.alert('Enviado!');
        console.log(response.status, response.text);
      })
      .catch((err) => {
        window.alert('FAILED...');
        console.log(err);
      });

    setToSend(TO_SEND_INITIAL_STATE);
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
        <GradientBtn text={'Enviar'} onClickFunc={ sendForm }/>
      </form>
    </StyledContact>
  );
};

export default Contact;
