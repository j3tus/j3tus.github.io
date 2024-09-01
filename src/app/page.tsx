import React from 'react';
import { IconType } from 'react-icons';
import { FaGithub, FaDiscord } from 'react-icons/fa';
import Footer from './components/footer';

interface SocialLinkProps {
  href: string;
  icon: IconType;
  tooltip: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon, tooltip }) => (
  <div className="group relative">
    <a
      href={href}
      className="mx-3 hover:scale-125 transition-transform shadow-md rounded-lg inline-block"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="text-gray-400 text-5xl" />
    </a>
    <span className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-white opacity-0 transition before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
      {tooltip}
    </span>
  </div>
);

const socialLinks: SocialLinkProps[] = [
  { href: 'https://github.com/j3tus', icon: FaGithub, tooltip: 'J3tus' },
  { href: 'https://discord.com/users/923175161350455336', icon: FaDiscord, tooltip: 'JetusW' },
];

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden">
      <div className="stars absolute inset-0" />
      <div className="flex flex-col items-center justify-center h-full">
        <div className="mb-24 md:mb-0 text-center"> 
          <h1 className="text-6xl font-bold text-white mb-5">Jetus</h1>
          <div className="flex justify-center">
            {socialLinks.map((link, index) => (
              <SocialLink key={index} {...link} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
