import lightmode from '../assets/light-mode.svg';
import darkmode from '../assets/dark-mode.svg';
import brazilflag from '../assets/brazil-flag.svg';
import usaflag from '../assets/usa-flag.svg';
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

export const ToggleNav = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.querySelector('body')?.setAttribute('data-theme', 'dark');
      setIsLightMode(false); // Atualiza o estado para escuro
    } else {
      document.querySelector('body')?.setAttribute('data-theme', 'light');
      setIsLightMode(true); // Atualiza o estado para claro
    }
  }, []); 

  const setDarkMode = () => {
    document.querySelector('body')?.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark'); 
    setIsLightMode(false); // Atualiza o estado para escuro
  };

  const setLightMode = () => {
    document.querySelector('body')?.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light'); 
    setIsLightMode(true); // Atualiza o estado para claro
  };

  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setLightMode();
    } else {
      setDarkMode();
    }
  };

  return (
    <header className="flex justify-between h-12 p-10">
      <label className="relative flex items-center cursor-pointer">
        <input
          type="checkbox"
          onChange={toggleTheme}
          checked={isLightMode}
          className="absolute opacity-0"
        />
        <motion.img
          src={darkmode}
          alt="darkmode"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: isLightMode ? 0 : 1, rotate: isLightMode ? 0 : 360 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute h-full"
        />
        <motion.img
          src={lightmode}
          alt="lightmode"
          initial={{ scale: 1, rotate: 0 }}
          animate={{ scale: isLightMode ? 1 : 0, rotate: isLightMode ? 0 : 360 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className='h-full'
        />
      </label>
      <label className="relative flex items-center cursor-pointer">
        <input type="checkbox" className="absolute opacity-0" />
        <motion.img
          src={brazilflag}
          alt="brazil"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute h-full"
        />
        <motion.img
          src={usaflag}
          alt="usa"
          initial={{ scale: 1, rotate: 0 }}
          animate={{ scale: 0, rotate: 360 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className='h-full'
        />
      </label>
    </header>
  );
};