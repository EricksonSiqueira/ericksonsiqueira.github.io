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
    margin-top: -45px;
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

    img {
      bottom: 0;
      width: 80vh;
    }
    section {
      margin-left: -70px;
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
      font-size: 28px;
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
