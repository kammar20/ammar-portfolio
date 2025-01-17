import { IoEarthSharp } from 'react-icons/io5';
import { socialData } from '../data/portfolioData';

// import logo from '../assets/diamond.png';
export default function Header() {
  return (
    <header className="pt-10 sm:pt-14 md:pt-20 lg:pt-28 mb-20">
      {/* Info */}
      <div className="mb-5">
        <h1 className="text-white text-xl md:text-2xl font-medium tracking-wider">
          Ammar Azam Khan
        </h1>
        <div className="text-neutral-100 md:text-lg mb-1">
          Frontend Developer
        </div>
        <div className="flex items-center gap-2">
          <span className="text-neutral-100"> Bengaluru, India</span>
          <span className="text-neutral-400 hover:text-neutral-100 transition-all duration-200 ease-in-out">
            <IoEarthSharp />
          </span>
        </div>
      </div>

      {/* Socials */}
      <div className="social-group flex gap-5">
        {socialData.map((social) => (
          <a
            href={social.ref}
            target="_blank"
            key={social.id}
            className="text-neutral-400 cursor-pointer hover:text-white transition-all duration-200 ease-in-out"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </header>
  );
}
