import styled from 'styled-components';

export const AboutStyled = styled.section`
  margin: 0 auto;

  .about-heading {
    font-size: 50px;
    width: 130px;
  }
  section.about-txt {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 95%;
    margin: 0 auto;
    margin-top: 15px;
    gap: 10px;
    font-size: 20px;
    line-height: 26px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    .about-heading {
      font-size: 60px;
      width: 160px;
    }
    section.about-txt {
      font-size: 26px;
      line-height: 30px;
    }
  }
  @media ${(props) => props.theme.breakpoints.md} {
    margin-top: 50px;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    .about-heading {
      font-size: 60px;
      width: 160px;
    }
    section.about-txt {
      line-height: 36px;
    }
  }
  @media ${(props) => props.theme.breakpoints.xl} {
  }
`
