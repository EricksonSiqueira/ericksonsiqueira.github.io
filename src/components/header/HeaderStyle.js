import styled from "styled-components";

export const HeaderStyled = styled.header`
  background: ${props => props.theme.colors.darkPurple};
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
`;

export const ButtonIcon = styled.button`

  background: ${props => props.theme.colors.darkPurple};
  margin: 0px 10px;
  border: none;
`;

export const HeaderSpacing = styled.div`
  height: 60px;
  width: 100%;
`;

export const HeaderDesktop = styled.header`
  width: 100%;
  background: ${props => props.theme.colors.darkPurple};

  div {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
`;
