import styled from "styled-components";

export default styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  color: ${(props) => props.theme.colors.textColor};
  text-align: center;
  transition: all 300ms ease-in-out;
  gap: 15px;
  /* border: 5px solid ${(props) => props.theme.colors.background}; */
  border-radius: 10px;
  width: 120px;

  &:hover {
    /* background-color: ${(props) => props.theme.colors.lightPurple}; */
    /* border: 5px solid ${(props) => props.theme.colors.lightPurple}; */
    color: ${(props) => props.theme.colors.hoverTech}
  }

  .icon {
    font-size: 100px;
  }

  p {
    font-size: 24px;
  }
`;
