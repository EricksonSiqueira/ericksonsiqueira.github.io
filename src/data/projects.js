import chefPediaImg from '../img/chef-pedia.png';
import portfolioImg from '../img/portfolio.png';
import loginScreen from '../img/login-screen.png';

const projects = [
  {
    image: loginScreen,
    technologies: ['TypeScript', 'Next.js', 'Tailwindcss', 'Jest', 'Yup'],
    githubLink: 'https://github.com/EricksonSiqueira/mp-tela-login-tailwind',
    deployLink: 'https://tela-login-tailwind-three.vercel.app/',
    description: `Tela de login em Next.js, com estilos em Tailwindcss e validações com Yup. Design feito no figma.`,
  },
  {
    image: chefPediaImg,
    technologies: ['ReactJs', 'React Hooks', 'ContextAPI', 'Tailwind CSS'],
    githubLink: 'https://github.com/EricksonSiqueira/chef-pedia',
    deployLink: 'https://chefpedia.vercel.app/',
    description: `Um site de receitas onde você pode procurar comidas e bebidas por diversos filtros, iniciar uma receita, favoritar e muito mais!`,
  },
  {
    image: portfolioImg,
    technologies: ['ReactJs', 'React Hooks', 'Styled components', 'RTL'],
    githubLink:
      'https://github.com/EricksonSiqueira/ericksonsiqueira.github.io',
    deployLink: 'https://ericksonsiqueira.github.io/',
    description: `Meu portfolio, onde falo um pouco sobre eu mesmo e as tecnologias que conheço (esse site que você está utilizando)`,
  },
];

export default projects;
