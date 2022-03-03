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
  height: 80px;
  position: fixed;
  top: 0;

  div {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }

  div img.react-icon {
    width: 55px;
    height: 55px;
  }

  div a {
    color: ${props => props.theme.colors.textColor};
    font-size: 24px;
  }

  div nav {
    display: flex;
    justify-content: space-evenly;
    width: 50%;
  }

  div section.social-media {
    display: flex;
    justify-content: space-between;
    gap: 40px;
  }

`;
