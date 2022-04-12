import React from 'react';
import StyledTechIcon from './styledTechIcon';

const TechIcon = ({ text, Icon }) => {
  return (
    <StyledTechIcon>
      <Icon className="icon"/>
      <p>{text}</p>
    </StyledTechIcon>
  )
};

export default TechIcon;
