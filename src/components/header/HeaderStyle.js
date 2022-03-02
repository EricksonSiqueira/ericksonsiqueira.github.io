import style from "styled-components";

export const HeaderStyled = style.header`
  background: ${props => props.theme.colors.darkPurple};
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
`;

export const ButtonIcon = style.button`
  background: ${props => props.theme.colors.darkPurple};
  margin: 0px 10px;
  border: none;
`;

export const HeaderSpacing = style.div`
  height: 60px;
  width: 100%;
`;
