import React from 'react';
import { Tooltip } from "@nextui-org/tooltip";
import { FaGithub, FaDiscord } from 'react-icons/fa';
import Footer from './components/footer';

const SocialLink = ({ href, icon: Icon, tooltip }) => (
  <Tooltip content={tooltip} placement="bottom">
    <a
      href={href}
      className="mx-3 hover:scale-125 transition-transform shadow-md rounded-lg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="text-gray-400 text-5xl" />
    </a>
  </Tooltip>
);

export default function Home() {
  const socialLinks = [
    { href: 'https://github.com/j3tus', icon: FaGithub, tooltip: 'J3tus' },
    { href: 'https://discord.com/users/923175161350455336', icon: FaDiscord, tooltip: 'JetusW' },
  ];

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
