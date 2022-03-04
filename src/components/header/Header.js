import React, { useState } from 'react';
import { HeaderStyled, ButtonIcon, HeaderSpacing, HeaderDesktop, Navbar } from './HeaderStyle';
import menuIcon from '../../img/menu-icon.png'
import reactIcon from '../../img/react-icon.png'
import githubIcon from '../../img/github-icon.png';
import linkedinIcon from '../../img/linkedin-icon.png';
import closeIcon from '../../img/close-menu-icon.png';
import { useMediaQuery } from '../../hooks/useMediaQuery';
// import Navbar from '../navbar/Navbar';

const Header = () => {

  const isLarge = useMediaQuery('(min-width: 1024px)');

  const [showNavbar, setShowNavbar] = useState(false);

  console.log(showNavbar);

  if (isLarge) {
    return (
      <>
        <HeaderDesktop>
          <div>
            <img
              className="react-icon"
              src={reactIcon}
              alt="icone do react"
            />
            <nav>
              <a href="#">Home</a>
              <a href="#">Sobre</a>
              <a href="#">Tecnologias</a>
              <a href="#">Projetos</a>
              <a href="#">Contato</a>
            </nav>
            <section className="social-media">
              <a 
                href="https://github.com/EricksonSiqueira"
                target='_blank'
                rel='noreferrer'
              >
                <img src={githubIcon} alt="icone do github" />
              </a>
              <a 
                href="https://www.linkedin.com/in/ericksonsiqueira/"
                target='_blank'
                rel='noreferrer'
              >
                <img src={linkedinIcon} alt="icone do linkedin" />
              </a>
            </section>
          </div>
        </HeaderDesktop>
        <HeaderSpacing />
      </>

    )
  } else {
    return (
      <>
        <HeaderStyled>
          <Navbar
            showNavbar={ showNavbar }
          >
            <button onClick={() => setShowNavbar(false)}>
              <img src={ closeIcon } alt="X representando fechar" />
            </button>
            <div />
          </Navbar>
          <ButtonIcon onClick={() => setShowNavbar(true)}>
            <img src={menuIcon} alt="icone de menu" />
          </ButtonIcon>
          <ButtonIcon>
            <img src={reactIcon} alt="icone do react" />
          </ButtonIcon>
        </HeaderStyled>
        <HeaderSpacing />
      </>
    );
  }
}

export default Header;
