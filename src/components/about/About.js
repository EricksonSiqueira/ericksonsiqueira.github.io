import React from 'react';
import GradientHead from '../gradientText/GradientText';
import { AboutStyled } from './AboutStyle';
import SectionDivider from '../sectionDivider/SectionDivider';

const About = () => {
  return(
    <AboutStyled id="about">
      <SectionDivider />
      <GradientHead text={'Sobre'} classes={'about-heading'}/>
      <section className={'about-txt'}>
        <p>Sou um desenvolvedor front-end apaixonado por tecnologia, desafios e colaboração. Amo estudar e é um dos grande motivos de eu amar tanto essa área, sei que qualquer coisa que quiser aprender vou conseguir, graças a grande quantidade de conteúdos livres que existem na internet.</p>
        <p>Minha principal linguagem de programação é JavaScript, tenho conhecimento sólido em React e algumas de suas ferramentas, como: React Hooks, Redux e Context API. Para estilização sei utilizar tanto CSS puro como, TailWind CSS, styled-components e BootStrap. Trabalho com Git/Github diariamente.</p>
        <p>Atualmente estou estudando back-end na trybe para me tornar um dev full stack, já domino, MySQL, NodeJs, Express.js e Docker, e estou estudando Next.js e TypeScript por conta própria. </p>
      </section>
    </AboutStyled>
  )
}

export default About;
