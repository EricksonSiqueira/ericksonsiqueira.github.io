import styled from 'styled-components';

export const HeroStyled = styled.section`
  display: flex;
  min-height: 60vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 400;
  }

  article {
    margin-top: -30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    margin-top: -20px;
  }

  a {
    margin-top: 20px;
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
    margin: 0 auto;
    font-size: 20px;

    h1 {
      margin-top: -40px;
    }

    img {
      width: 80vh;
    }
    article {
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
    margin: 0 auto;
    img {
      width: 80vh;
    }
    
    article {
      margin-left: 0px;
      font-size: 22px;
    }

    button {
      margin-top: 30px;
      font-size: 18px;
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
    margin: 0 auto;
    margin-top: 25px;

    img {
      width: 80vh;
    }

    article {
      margin-left: -50px;
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
