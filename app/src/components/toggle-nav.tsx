import './toggle-nav.css'
import lightmode from '../assets/light-mode.svg';
import darkmode from '../assets/dark-mode.svg'
import brazilflag from '../assets/brazil-flag.svg'
import usaflag from '../assets/usa-flag.svg';

export const ToggleNav = () => {
    const setDarkMode = () => {
        document.querySelector("body")?.setAttribute("data-theme", "dark");
    };

    const setLightMode = () => {
        document.querySelector("body")?.setAttribute("data-theme", "light");
    };

    const toggleTheme = (e) => {
        if (e.target.checked) setLightMode();
        else setDarkMode();
    }

    return (
        <header>
        <label>
          <input type="checkbox"
          onChange={toggleTheme}/>
          <img src={darkmode} className='darkmode' alt="darkmode" />
          <img src={lightmode} className='lightmode' alt="lightmode" />
        </label>
        <label>
          <input type="checkbox" />
          <img src={brazilflag} className='brazilflag' alt="lightmode" />
          <img src={usaflag} className='usaflag' alt="darkmode" />
        </label>
{/*         <button>
          <img src={usaflag} alt="usa" />
          <img src={brazilflag} alt="brazil" />
        </button> */}
      </header>
    )
}