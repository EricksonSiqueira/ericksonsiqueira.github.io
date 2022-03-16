import React from 'react';
import GradientHead from '../gradientText/GradientText';
import { AboutStyled } from './AboutStyle';
import SectionDivider from '../sectionDivider/SectionDivider';

const About = () => {
  return(
    <AboutStyled id={'about'}>
      <SectionDivider />
      <GradientHead text={'Sobre'} classes={'about-heading'}/>
      <section className={'about-txt'}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat doloremque ea vero, nesciunt fuga laborum accusamus fugiat in impedit ab nihil molestias eaque aspernatur praesentium similique, inventore quia magnam ut.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos magni corporis dolorum cupiditate dicta? Quos, itaque beatae nobis at, perferendis laudantium expedita incidunt totam ex iste unde, accusantium laboriosam dignissimos.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam possimus pariatur perspiciatis sed porro sequi ipsam suscipit culpa natus? Hic ipsa nostrum amet, libero corrupti unde reprehenderit officiis in at?</p>
      </section>
    </AboutStyled>
  )
}

export default About;
