import styled from 'styled-components';

export default styled.section`
  .tech-heading {
    font-size: 50px;
    width: 300px;
  }

  section {
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
    column-gap: 40px;
    flex-wrap: wrap;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    .tech-heading {
      font-size: 60px;
      width: 355px;
    }
  }
`
