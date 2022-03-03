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
    border-radius: 5px;
    padding: 10px;
    color: ${props => props.theme.colors.textColor};
    font-size: 24px;
    transition: all 500ms ease-in-out;
  }
  
  div a:hover {
    background-color: ${props => props.theme.colors.lightPurple2};
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

export const Navbar = styled.nav`
  position: absolute;
  background-color: ${props => props.theme.colors.lightPurple};
  width: 220px;
  height: 100vh;
  left: ${props => props.showNavbar ? '0px' : '-220px'};
  transition: all 0.5s ease-in-out;
  box-shadow: ${props => props.showNavbar && '10px 5px 20px 12px rgba(0,0,0,0.53)'};

  button {
    background-color: inherit;
    position: absolute;
    width: 60px;
    height: 60px;
    right: 10px;
    top: 10px;
    border: none;
  }
  button img {
    width: 100%;
    height: 100%;
  }

`;
