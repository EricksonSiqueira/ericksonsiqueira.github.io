import React from 'react';
import { GradientH1 } from './GradientTextStyle';

const GradientText = ({ text, classes }) => {
  return (
    <GradientH1 className={ classes }>
      {text}
    </GradientH1>
  )
}

export default GradientText;
