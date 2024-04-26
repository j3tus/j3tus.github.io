"use client"
import Footer from './components/footer';
import { FaGithub, FaDiscord, FaDev } from 'react-icons/fa';
import { NextUIProvider } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/tooltip";

export default function Home() {
  return (
    <NextUIProvider>
      <main className='overflow-hidden relative'>
        <div className='stars'></div>
        <div className='flex flex-col items-center justify-center h-screen '>
        <div className='mb-24 md:mb-0'> 
          <h1 className='text-6xl font-bold text-white '>Jetus</h1>
            <div className='flex justify-center mt-5'>
              <Tooltip content="J3tus" placement="bottom">
                <a
                  href='https://github.com/j3tus'
                  className='mx-3 hover:scale-125 transition-transform shadow-md rounded-lg'
                >
                  <FaGithub className='text-gray-400 text-5xl' />
                </a>
              </Tooltip>
              <Tooltip content="JetusW" placement="bottom" key="primary">
                <a
                  href='https://discord.com/users/923175161350455336'
                  className='mx-3 hover:scale-125 transition-transform shadow-md rounded-lg'
                >
                  <FaDiscord className='text-gray-400 text-5xl' />
                </a>
              </Tooltip>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </NextUIProvider>
  );
}
