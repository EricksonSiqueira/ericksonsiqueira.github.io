import styled from 'styled-components';

export const GradientH1 = styled.h1`

  font-size: ${props => `${props.fontSize}px`};
  background: #904AE8;
  background: -webkit-linear-gradient(to right, #904AE8 0%, #09CAF4 100%);
  background: -moz-linear-gradient(to right, #904AE8 0%, #09CAF4 100%);
  background: linear-gradient(to right, #904AE8 0%, #09CAF4 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

`