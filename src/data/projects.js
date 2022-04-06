import chefPediaImg from '../img/chef-pedia.png'
import portfolioImg from '../img/portfolio.png'
import tryunfoImg from '../img/tryunfo.png'

const projects = [
  {
    image: chefPediaImg,
    technologies: ['#ReactJs', '#React Hooks', '#ContextAPI', '#Tailwind CSS'],
    githubLink:'https://github.com/EricksonSiqueira/chef-pedia',
    deployLink: 'https://chefpedia.vercel.app/',
    description: `Um site de receitas onde você pode procurar comidas e bebidas por diversos filtros, iniciar uma receita, favoritar e muito mais!`,
  },
  {
    image: portfolioImg,
    technologies: ['#ReactJs', '#React Hooks', 'Styled components', '#RTL'],
    githubLink: 'https://github.com/EricksonSiqueira/ericksonsiqueira.github.io',
    deployLink: 'https://ericksonsiqueira.github.io/',
    description: `Meu portfolio, onde falo um pouco sobre eu mesmo e as tecnolgias que conheço (esse site que você está utilizando)`,
  },
  {
    image: tryunfoImg,
    technologies: ['#ReactJs', '#CSS3', '#JavaScript', '#HTML5'],
    githubLink: 'https://github.com/EricksonSiqueira/tryunfo',
    deployLink: 'https://tryunfo111.herokuapp.com/',
    description: `Site onde você pode criar suas próprias cartas do jogo trunfo! Use sua imaginação para criar quantas quiser!`,
  },
];

export default projects;