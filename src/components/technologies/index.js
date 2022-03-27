import React from 'react';
import SectionDivider from '../sectionDivider/SectionDivider';
import GradientText from '../gradientText/GradientText';
import StyledTechnologies from './TechnologiesStyle';

const Technologies = () => {
  return (
    <StyledTechnologies>
      <SectionDivider />
      <GradientText text={'Tecnologias'} classes={'tech-heading'}/>
    </StyledTechnologies>
  );
};

export default Technologies;
