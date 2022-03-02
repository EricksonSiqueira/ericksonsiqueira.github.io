import styled from 'styled-components';

export const HeroStyled = styled.section`
  font-size: 18px;
  display: flex;
  min-height: 80vh;
  flex-direction: column;
  align-items:center;
  overflow-x: hidden;


  section {
    margin: 0 30px;
    margin-top: -30px;
    display: flex;
    flex-direction: column;
    align-items:center;
  }

  .code {
    color: ${props => props.theme.colors.orangeText};
  }
  .name {
    color: ${props => props.theme.colors.greenText};
  }
`;
