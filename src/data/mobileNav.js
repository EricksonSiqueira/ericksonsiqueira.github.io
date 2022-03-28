import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
import * as MdIcons from 'react-icons/md';

const data = [
  {
    id: 1,
    text: 'Home',
    icon: <AiIcons.AiFillHome />,
    href: '#home',
  },
  {
    id: 2,
    text: 'Sobre',
    icon: <BsIcons.BsFillPersonLinesFill />,
    href: '#about',
  },
  {
    id: 3,
    text: 'Tecnologias',
    icon: <BsIcons.BsStack />,
    href: '#technologies',
  },
  {
    id: 4,
    text: 'Projetos',
    icon: <BiIcons.BiDevices />,
    href: '#projects',
  },
  {
    id: 5,
    text: 'Contato',
    icon: <MdIcons.MdEmail />,
    href: '#contact',
  }
];

export default data;
