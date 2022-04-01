import React from 'react';
import SectionDivider from '../sectionDivider/SectionDivider';
import GradientText from '../gradientText/GradientText';
import StyledTechnologies from './TechnologiesStyle';
import TechIcon from '../techIcon';
import TechData from '../../data/techs';

const Technologies = () => {
  return (
    <StyledTechnologies id="technologies" className="section-spacing">
      <SectionDivider />
      <GradientText text={'Tecnologias'} classes={'tech-heading'}/>
      <section>
        {TechData.map((tech) => (
          <TechIcon
            key={tech.text}
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
