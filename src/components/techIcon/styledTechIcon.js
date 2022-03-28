import styled from "styled-components";

export default styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  text-align: center;
  transition: all 300ms ease-in-out;
  gap: 15px;
  /* border: 5px solid ${(props) => props.theme.colors.background}; */
  border-radius: 10px;
  width: 120px;

  &:hover {
    /* background-color: ${(props) => props.theme.colors.lightPurple}; */
    /* border: 5px solid ${(props) => props.theme.colors.lightPurple}; */
    color: #19BBF3;
  }

  .icon p {
    color: ${(props) => props.theme.colors.textColor};
  }

  .icon {
    font-size: 100px;
  }

  p {
    font-size: 24px;
  }
`;
