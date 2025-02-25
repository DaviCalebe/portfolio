import './toggle-nav.css';
import lightmode from '../assets/light-mode.svg';
import darkmode from '../assets/dark-mode.svg';
import brazilflag from '../assets/brazil-flag.svg';
import usaflag from '../assets/usa-flag.svg';
import React, { useEffect, useState } from 'react';

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
    <header>
      <label>
        <input
          type="checkbox"
          onChange={toggleTheme}
          checked={isLightMode} // Usa o estado para controlar o checkbox
        />
        <img src={darkmode} className="darkmode" alt="darkmode" />
        <img src={lightmode} className="lightmode" alt="lightmode" />
      </label>
      <label>
        <input type="checkbox" />
        <img src={brazilflag} className="brazilflag" alt="brazil" />
        <img src={usaflag} className="usaflag" alt="usa" />
      </label>
    </header>
  );
};