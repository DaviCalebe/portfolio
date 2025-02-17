import './toggle-nav.css';
import lightmode from '../assets/light-mode.svg';
import darkmode from '../assets/dark-mode.svg';
import brazilflag from '../assets/brazil-flag.svg';
import usaflag from '../assets/usa-flag.svg';
import React, { useEffect } from 'react';

export const ToggleNav = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.querySelector('body')?.setAttribute('data-theme', 'dark');
    } else {
      document.querySelector('body')?.setAttribute('data-theme', 'light');
    }
  }, []); 

  const setDarkMode = () => {
    document.querySelector('body')?.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark'); 
  };

  const setLightMode = () => {
    document.querySelector('body')?.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light'); 
  };

  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setLightMode();
    } else {
      setDarkMode();
    }
  };

  const defaultChecked = localStorage.getItem('theme') === 'light';

  return (
    <header>
      <label>
        <input
          type="checkbox"
          onChange={toggleTheme}
          defaultChecked={defaultChecked}
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
