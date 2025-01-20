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
    desc: `A fitness web app that help you find exercises with step-by-step instructions and YouTube videos.`,
    liveLink: 'https://trainlyy.vercel.app/',
  },
  {
    id: 2,
    logo: shoeCartLogo,
    name: 'Shoe Cart',
    desc: `A site for shoe lovers, you can browse, add to cart, and manage purchases effortlessly.`,
    liveLink: 'https://shopping-cart-shoe.vercel.app/',
  },
  {
    id: 3,
    logo: expenseTrackerLogo,
    name: 'Expense Tracker',
    desc: `A personal expernse tracker with a categorize spending to manage budget effectively`,
    liveLink: 'https://xpens-tracker.vercel.app/',
  },
  {
    id: 4,
    logo: writeAuraLogo,
    name: 'Write Aura',
    desc: 'A sleek landing page for an AI writing assistant with pricing, testimonials, FAQs and more',
    liveLink: 'https://write-aura.vercel.app/',
  },
];
