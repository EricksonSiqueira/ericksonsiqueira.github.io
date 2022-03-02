import styled from "styled-components";

export const GradientBtnStyled = styled.button`
  font-size: 16px;
  background-image: linear-gradient(to right, rgba(64,26,172,1) 0%, rgba(138, 54, 255, 1)  51%, rgba(59,33,134,1)  100%);
  margin: 10px;
  margin-top: 15px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: ${props => props.theme.colors.textColor};
  border-radius: 30px;
  display: block;
  border: none;

  &:hover {
    background-position: right center; /* change the direction of the change here */
    text-decoration: none;
    border: none;
  }
`;
