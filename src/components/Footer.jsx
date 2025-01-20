import { TbFileDescription } from 'react-icons/tb';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-700 py-5 flex items-center justify-between">
      <p className="text-center text-sm text-neutral-400">Ammar khan © 2025</p>
      <a
        href="https://drive.google.com/file/d/1-krk3uHZEplOLpA2BTa3ZNfwqiOXIS8p/view?usp=drive_link"
        target="_blank"
        className="flex items-center gap-1 text-neutral-400 hover:text-neutral-50 font-medium transition-all"
      >
        Resume
        <span>
          <TbFileDescription />
        </span>
      </a>
    </footer>
  );
}
