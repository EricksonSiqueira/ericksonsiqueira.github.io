import React from 'react';
import { HeaderStyled, ButtonIcon, HeaderSpacing, HeaderDesktop } from './HeaderStyle';
import menuIcon from '../../img/menu-icon.png'
import reactIcon from '../../img/react-icon.png'
import githubIcon from '../../img/github-icon.png';
import linkedinIcon from '../../img/linkedin-icon.png';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const Header = () => {

  const isLarge = useMediaQuery('(min-width: 1024px)');

  console.log(isLarge);
  
  if (isLarge) {
    return (
      <HeaderDesktop>
        <div>
          <img src={reactIcon} alt="icone do react" />
          <nav>
            <a href="#">Sobre</a>
            <a href="#">Projetos</a>
            <a href="#">Tecnologias</a>
            <a href="#">Contato</a>
          </nav>
          <section className="social-media">
            <img src={githubIcon} alt="icone do github" />
            <img src={linkedinIcon} alt="icone do linkedin" />
          </section>
        </div>
      </HeaderDesktop>
    )
  } else {
    return (
      <>
        <HeaderStyled>
          <ButtonIcon>
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
