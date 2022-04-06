import styled from "styled-components";

export const GradientBtnStyled = styled.button`
  font-size: 16px;

  background: ${({ disabled }) => disabled ? `#444` : 'rgb(136,70,219)' };
  background: ${({ disabled }) => !disabled && 'linear-gradient(90deg, rgba(136,70,219,1) 0%, rgba(13,198,243,1) 100%)' };
  margin: 10px;
  margin-top: 15px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 500ms;
  background-size: 200% auto;
  color: ${props => props.theme.colors.textColor};
  border-radius: 30px;
  display: block;
  border: none;

  &:hover {
    background-position: ${({ disabled }) => !disabled && 'right center' }; /* change the direction of the change here */
    text-decoration: none;
    border: none;
    cursor: ${({disabled}) => disabled ? 'not-allowed' : 'pointer' };
  }
`;
