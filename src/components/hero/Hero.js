import { HeroStyled } from "./HeroStyle";
import heroImg from '../../img/hero-image-v2.png';
import heroImgWide from '../../img/hero-image-wide-v2.png';
import GradientBtn from "../gradientBtn/GradientBtn";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const Hero = () => {
  const isPageWide = useMediaQuery('(min-width: 768px)');

  return (
    <HeroStyled>
      <img src={isPageWide ? heroImgWide : heroImg } alt="foto do erickson sorrindo com fundo neon circular" />
      <section>
        <h1>
          <span className="code">{'< '}</span>
          Olá, meu nome é <span className="name">Erickson</span>! Sou um desenvolvedor web, apaixonado por tecnologia e desafios. Seja bem vindo ao meu portfólio
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
