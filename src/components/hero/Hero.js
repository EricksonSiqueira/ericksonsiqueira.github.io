import { HeroStyled } from './HeroStyle';
import heroImg from '../../img/hero-image-v2.png';
import heroImgWide from '../../img/hero-image-wide-v2.png';
import GradientBtn from '../gradientBtn/GradientBtn';
import GradientText from '../gradientText/GradientText';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const Hero = () => {
  const isPageWide = useMediaQuery('(min-width: 1024px)');

  return (
    <HeroStyled>
      <img src={isPageWide ? heroImgWide : heroImg } alt="foto do erickson sorrindo com fundo neon circular" />
      <article>
        <section>
          <p className="hero-txt">Olá mundo, eu sou</p>
          <GradientText 
            text={'Erickson Siqueira'} 
            classes='hero-name'
          />
          <p className="hero-txt">Desenvolvedor web front-end</p>
        </section>
        <GradientBtn 
          text={'Saiba mais'} 
        />
      </article>
    </HeroStyled>
  );
}

export default Hero;
