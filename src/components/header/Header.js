import React, { useState } from 'react';
import { HeaderStyled, ButtonIcon, HeaderSpacing, HeaderDesktop, Navbar, NavLine } from './HeaderStyle';
import menuIcon from '../../img/menu-icon.png'
import reactIcon from '../../img/react-icon.png'
import githubIcon from '../../img/github-icon.png';
import linkedinIcon from '../../img/linkedin-icon.png';
import closeIcon from '../../img/close-menu-icon.png';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import navData from '../../data/mobileNav';

const Header = () => {

  const isLarge = useMediaQuery('(min-width: 1024px)');

  const [showNavbar, setShowNavbar] = useState(false);

  if (isLarge) {
    return (
      <>
        <HeaderDesktop>
          <div>
            <a href="#home" className="logo">
              <img
                className="react-icon"
                src={reactIcon}
                alt="icone do react"
              />
            </a>
            <nav>
              <a href="#home">Home</a>
              <a href="#about">Sobre</a>
              <a href="#technologies">Tecnologias</a>
              <a href="#projects">Projetos</a>
              <a href="#contact">Contato</a>
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
        <HeaderSpacing id="home"/>
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
            <section className="nav-items">
              <NavLine />
              {navData.map((item) => (
                <a key={item.id} href={item.href} onClick={() => setShowNavbar(false)}>
                  {item.icon}
                  <span>{item.text}</span>
                </a>
              ))}
            <NavLine />
            </section>
            <section className='nav-social'>
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
          </Navbar>
          <ButtonIcon onClick={() => setShowNavbar(true)}>
            <img src={menuIcon} alt="icone de menu" />
          </ButtonIcon>
          <ButtonIcon>
            <img src={reactIcon} alt="icone do react" />
          </ButtonIcon>
        </HeaderStyled>
        <HeaderSpacing id="home"/>
      </>
    );
  }
}

export default Header;
