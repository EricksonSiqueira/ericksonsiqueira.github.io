import React from 'react';
import SectionDivider from '../sectionDivider/SectionDivider';
import GradientText from '../gradientText/GradientText';
import StyledTechnologies from './TechnologiesStyle';
import TechIcon from '../techIcon';
import TechData from '../../data/techs';

const Technologies = () => {
  return (
    <StyledTechnologies>
      <SectionDivider />
      <GradientText text={'Tecnologias'} classes={'tech-heading'}/>
      <section>
        {TechData.map((tech) => (
          <TechIcon
            id={tech.text}
            text={tech.text}
            Icon={tech.Icon}
          />
        ))}
      </section>
    </StyledTechnologies>
  );
};

export default Technologies;
