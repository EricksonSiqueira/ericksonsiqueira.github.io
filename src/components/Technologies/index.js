import React from 'react';
import SectionDivider from '../SectionDivider';
import GradientText from '../GradientText';
import StyledTechnologies from './TechnologiesStyle';
import TechIcon from '../TechIcon';
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
            doc={tech.doc}
          />
        ))}
      </section>
    </StyledTechnologies>
  );
};

export default Technologies;
