import chefPediaImg from '../img/chef-pedia.png'
import portfolioImg from '../img/portfolio.png'
import tryunfoImg from '../img/tryunfo.png'

const projects = [
  {
    image: chefPediaImg,
    technologies: ['#ReactJs', '#React Hooks', '#ContextAPI', '#Tailwind CSS'],
    githubLink:'https://github.com/EricksonSiqueira/chef-pedia',
    deployLink: 'https://chefpedia.vercel.app/',
  },
  {
    image: portfolioImg,
    technologies: ['#ReactJs', '#React Hooks', 'Styled components'],
    githubLink: 'https://github.com/EricksonSiqueira/ericksonsiqueira.github.io',
    deployLink: 'https://ericksonsiqueira.github.io/',
  },
  {
    image: tryunfoImg,
    technologies: ['#ReactJs', '#CSS3', '#JavaScript', '#HTML5'],
    githubLink: 'https://github.com/EricksonSiqueira/tryunfo',
    deployLink: 'https://tryunfo111.herokuapp.com/',
  },
];

export default projects;