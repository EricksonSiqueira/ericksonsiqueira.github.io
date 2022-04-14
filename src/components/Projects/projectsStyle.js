import styled from 'styled-components';

export const StyledProjects = styled.section`

  section.cards {
    width: 100%;
    margin-top: 50px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 50px;

    overflow-x: auto;

    padding-bottom: 30px;
  }

  .project-heading {
    font-size: 50px;
    width: 215px;
  }

  .icon {
    font-size: 25px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
  .project-heading {
    font-size: 60px;
    width: 250px;
  }
}
`;
