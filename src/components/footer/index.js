import React from 'react';
import { StyledFooter } from './FooterStyle';

const Footer = () => {
  return(
    <StyledFooter>
      <p>Feito com <span className='tech'>React</span>, <span className='tech'>Styled components</span> e 💜</p>
      <p>©Erickson Siqueira</p>
    </StyledFooter>
  );
};

export default Footer;
