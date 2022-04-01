import styled from 'styled-components';

export const ProjectCardStyled = styled.article`

  /* background: linear-gradient(90deg, rgba(60,53,66,0.39) 0%, rgba(140,5,246,0.40) 100%); */
  /* background: linear-gradient(90deg, rgba(140,5,246,0.40) 0%, rgba(25, 187, 243, 0.30) 100%); */
  background: linear-gradient(90deg, rgba(140,5,246,0.20) 0%, rgba(140,5,246,0.50) 100%);
  

  //rgba(60,53,66,0.39)
  //rgba(140,5,246,0.30)
  //rgba(25, 187, 243, 0.30)
  border-radius: 5px;
  width: 300px;
  height: 420px;

  box-shadow: 0px 8px 20px 5px #030303;


  section.techs {
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  section.links {
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  img {
    border-radius: inherit;
  }
`

export const TechSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textColor};
  height: 30px;
  border-radius: 10px;
  padding: 10px;

  box-shadow: 0px 7px 10px -2px #1C1818;
`;

export const Link = styled.a`
  height: 50px;
  width: 120px;
  border-radius: 10px;

  font-size: 18px;
  font-weight: bold;

  color: #000;
  background-color: ${(props) => props.theme.colors.hoverTech};

  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;

  box-shadow: 0px 8px 10px 0px #1C1818;

  transition: all 200ms ease-in-out;


  &:hover {
    transform: translateY(calc( -3px - 3%));
    /* background-color: #21d8fc; */
    box-shadow: 0px 12px 10px 2px #1C1818;
  }
`;
