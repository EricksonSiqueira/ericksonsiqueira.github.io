import React from 'react';
import '../styles/Footer.css';
import SocialMediaIcon from './SocialMediaIcon'

function Footer() {
  return (
    <footer>
      <SocialMediaIcon mediaName="linkedin" title="Linkedin" link="https://www.linkedin.com/in/ericksonsiqueira/" />
      <SocialMediaIcon mediaName="google" title="ericksonsiqueirasilva" />
      <SocialMediaIcon mediaName="github" title="GitHub" link="https://github.com/EricksonSiqueira" />
    </footer>
  );
}

export default Footer;
