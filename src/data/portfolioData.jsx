import { FaGithub, FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6';

import expenseTrackerLogo from '../assets/expense.png';
import shoeCartLogo from '../assets/shoeShop.png';
import trainlyyLogo from '../assets/exercise.png';
import writeAuraLogo from '../assets/pencil.png';
import { MdEmail } from 'react-icons/md';

export const socialData = [
  { id: 1, ref: 'https://github.com/kammar20', icon: <FaGithub size={20} /> },
  {
    id: 2,
    ref: 'https://www.linkedin.com/in/ammarkhan20/',
    icon: <FaLinkedin size={21} />,
  },
  {
    id: 3,
    ref: 'https://x.com/kammar_20',
    icon: <FaSquareXTwitter size={21} />,
  },
  { id: 4, ref: 'mailto:khan.ammar6k@gmail.com', icon: <MdEmail size={24} /> },
];

export const skillsData = [
  'HTML5',
  'CSS3',
  'Tailwind CSS',
  'Javascript',
  'React JS',
];

export const projectData = [
  {
    id: 1,
    logo: trainlyyLogo,
    name: 'Trainlyy',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, voluptate!',
    liveLink: 'https://trainlyy.vercel.app/',
  },
  {
    id: 2,
    logo: shoeCartLogo,
    name: 'Shoe Cart',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, voluptate!',
    liveLink: 'https://shopping-cart-shoe.vercel.app/',
  },
  {
    id: 3,
    logo: expenseTrackerLogo,
    name: 'Expense Tracker',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, voluptate!',
    liveLink: 'https://xpens-tracker.vercel.app/',
  },
  {
    id: 4,
    logo: writeAuraLogo,
    name: 'Write Aura',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, voluptate!',
    liveLink: 'https://write-aura.vercel.app/',
  },
];
