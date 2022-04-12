import { GradientBtnStyled } from "./GradientBtnStyle";
const GradientBtn = ({text, onClickFunc, disabled}) => {
  return (
    <GradientBtnStyled 
      onClick={ onClickFunc } 
      disabled={ disabled }
      className={ disabled ? 'disabled' : '' }
    >
      {text}
    </GradientBtnStyled>
  )
};

export default GradientBtn;