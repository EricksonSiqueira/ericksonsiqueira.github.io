import styled from 'styled-components';

export const HeroStyled = styled.section`
  font-size: 18px;
  display: flex;
  min-height: 80vh;
  flex-direction: column;
  align-items:center;
  overflow-x: hidden;

  h1 {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    margin-top: 40px;
  }

  .hero-txt {
    color: ${props => props.theme.colors.textColor};
    font-size: 22px;
  }

  .hero-name {
    font-size: 38px;
    font-weight: 700;
    margin: 10px 0;
  }

    @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 600px;
    margin: 0 auto;

    img {
      width: 70vh;
    }

    .hero-txt {
    color: ${props => props.theme.colors.textColor};
    font-size: 32px;
    }
    .hero-name {
    font-size: 64px;
    margin: 10px 0;
    }
  }

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 800px;
    margin: 0 auto;
    font-size: 20px;

    h1 {
      margin-top: -40px;
    }

    img {
      width: 80vh;
    }
    section {
      min-width: 300px;
    }

    .hero-txt {
    color: ${props => props.theme.colors.textColor};
    font-size: 40px;
    }
    .hero-name {
    font-size: 72px;
    margin: 10px 0;
    }

    button {
      width: 200px;
      height: 60px;
    }
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    flex-direction: row;
    max-width: 100vw;
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
      margin-left: -100px;
    }

    h1 {
      align-items: flex-start;
    }

    .hero-txt {
    color: ${props => props.theme.colors.textColor};
    font-size: 32px;
    }
    .hero-name {
    font-size: 64px;
    margin: 10px 0;
    }
  }
    @media ${(props) => props.theme.breakpoints.xl} {
    flex-direction: row;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 25px;

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
      margin-top: 50px;
      font-size: 20px;
    }
  }
`;
