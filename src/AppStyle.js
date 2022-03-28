import styled from 'styled-components';

export const Wrapper = styled.div `
  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 600px;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 800px;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    max-width: 100vw;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    max-width: 1200px;
  }
`
export const TextSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin: 0 auto;
`;
