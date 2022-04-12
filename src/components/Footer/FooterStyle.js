import styled from 'styled-components';

export const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  font-size: 16px;
  color: ${(props) => props.theme.colors.textColor};
  background-color: ${(props) => props.theme.colors.darkPurple};

  span.tech, span.name {
    color: ${(props) => props.theme.colors.hoverTech};
  }

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 18px;
  }
`;
