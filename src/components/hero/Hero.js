import { HeroStyled } from "./HeroStyle";
import heroImg from '../../img/hero-image-v2.png';
import GradientBtn from "../gradientBtn/GradientBtn";

const Hero = () => {
  return (
    <HeroStyled>
      <img src={ heroImg } alt="foto do erickson sorrindo com fundo neon circular" />
      <section>
        <h1>
          <span className="code">{'< '}</span>
          Olá, meu nome é <span className="name">Erickson</span>! Sou um desenvolvedor web, apaixonado por tecnologia e desafios. Seja bem vindo ao meu portifólio
          <span className="code">{' />'}</span>
        </h1>
        <GradientBtn 
          text={'Saiba mais'} 
        />
      </section>
    </HeroStyled>
  )
}

export default Hero;
