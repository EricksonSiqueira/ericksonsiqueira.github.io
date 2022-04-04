import { GradientBtnStyled } from "./GradientBtnStyle";
const GradientBtn = ({text, onClickFunc}) => {
  return (
    <GradientBtnStyled onClick={ onClickFunc }>
      {text}
    </GradientBtnStyled>
  )
};

export default GradientBtn;