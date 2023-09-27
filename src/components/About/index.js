import React from 'react';
import GradientHead from '../GradientText';
import { AboutStyled } from './AboutStyle';
import SectionDivider from '../SectionDivider';

const About = () => {
  return (
    <AboutStyled id="about" className="section-spacing">
      <SectionDivider />
      <GradientHead text={'Sobre'} classes={'about-heading'} />
      <section className={'about-txt'}>
        <p>
          Tenho 25 anos, sou filho da Ana uma cabeleireira muito batalhadora,
          sou nascido e criado em Nova Iguaçu baixada fluminense do Rio de
          Janeiro. Sou uma pessoa muito caseira, escuto todo tipo de musica, mas
          gosto principalmente de rock. Adoro jogar, lutar boxe, assistir filmes
          e séries (principalmente fantasia medieval), ler livros e claro,
          programar.
        </p>
        <p>
          Sou um desenvolvedor web full stack com experiencia profissional em
          front-end. Tenho conhecimento sólido na criação de sites responsivos,
          rápidos e bem ranqueados. Minha abordagem se baseia em métricas como o
          Core Web Vitals e em códigos limpos, legíveis e testados.
        </p>
        <p>
          Além disso, trago um toque de bom humor, colaboração e gosto por
          compartilhar conhecimento e ideias de aprimoramento. Sou entusiasta de
          tecnologia e estou sempre empolgado em aprimorar meus conhecimentos na
          área.
        </p>
      </section>
    </AboutStyled>
  );
};

export default About;
