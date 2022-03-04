import styled from 'styled-components';

export const HeroStyled = styled.section`
  font-size: 18px;
  display: flex;
  min-height: 80vh;
  flex-direction: column;
  align-items:center;
  overflow-x: hidden;

  h1 {
    font-weight: 400;
  }

  section {
    margin: 0 30px;
    margin-top: -30px;
    display: flex;
    flex-direction: column;
    align-items:center;
  }

  img {
    margin-top: -20px;
  }

  button {
    margin-top: 20px;
  }

  .code {
    color: ${props => props.theme.colors.orangeText};
  }
  .name {
    color: ${props => props.theme.colors.greenText};
  }

    @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 600px;
    margin: 0 auto;

    img {
      width: 80vh;
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: row;
    max-width: 800px;
    margin: 0 auto;
    font-size: 20px;

    img {
      bottom: 0;
      width: 80vh;
      margin: 0;
    }
    section {
      margin-left: -75px;
      min-width: 300px;
    }
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 1000px;
    margin: 0 auto;
    img {
      width: 80vh;
    }
    
    section {
      margin-left: 0px;
      font-size: 22px;
    }

    button {
      margin-top: 30px;
      font-size: 18px;
    }
  }
    @media ${(props) => props.theme.breakpoints.xl} {
    flex-direction: row;
    max-width: 1200px;
    margin: 2% auto;

    img {
      width: 80vh;
    }

    section {
      margin-left: -30px;
      font-size: 32px;
    }

    h1 {
      width: 500px;
    }

    button {
      margin-top: 30px;
      font-size: 18px;
    }
  }
`;
