import styled from 'styled-components';

export const Wrapper = styled.div `

  .section-spacing {
    margin-bottom: 5vh;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 90vw;
    margin: 0 auto;
  }
`
export const TextSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin: 0 auto;

  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: inherit;
    margin: 0 auto;
  }
`;
