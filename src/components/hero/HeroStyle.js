import style from 'styled-components';

export const HeroStyled = style.section`
  font-size: 24px;
  display: flex;
  height: 90vh;
  flex-direction: column;
  jutify-content: center;
  align-items:center;
  overflow-x: hidden;

  section {
    margin 0 30px;
    margin-top: -50px;
    display: flex;
    flex-direction: column;
    jutify-content: center;
    align-items:center;
    z-index: 1;
  }

  .code {
    color: ${props => props.theme.colors.orangeText};
  }
  .name {
    color: ${props => props.theme.colors.greenText};
  }
`;
