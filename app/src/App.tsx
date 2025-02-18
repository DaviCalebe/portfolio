import './App.css';
import { ToggleNav } from './components/toggle-nav';
import brazilflag from './assets/brazil-flag.svg'
import usaflag from './assets/usa-flag.svg'
import element from './assets/element.svg'

function App() {

  return (
    <main>
      <ToggleNav />
      <div className="intro">
        <div className="description">
          <h1 id='name'>{"<"}Davi Calebe{"/>"}</h1>
          <p className='occupation'>dev full-stack</p>

          <div className="cv-buttons">
            <button onClick={() => window.location.href = "https://drive.google.com/uc?export=download&id=18FH_bWyRGCCaerdntXZsPgoWZsE0reJZ"}> <img src={brazilflag} alt="brazil-flag" /> CV</button>
            <button onClick={() => window.location.href = "https://drive.google.com/uc?export=download&id=1_2R6twVKEHGEQ2Yp_zBaXo0XMPyIakZL"}><img src={usaflag} alt="usa-flag" /> CV</button>
          </div>
        </div>
        
        <div className="profile-pic">
          <div className="circle"></div>
          <div className="circle-img"></div>
        </div>
      </div>

      <section className="about">
        <img src={element} alt="figma-element" />
          <svg viewBox="0 0 900 900" className="target-svg"> 
            <circle cx="450" cy="450" r="450" stroke="black" strokeWidth="2" fill="none" />
            <circle cx="450" cy="450" r="360" stroke="black" strokeWidth="2" fill="none" />
            <circle cx="450" cy="450" r="260" stroke="black" strokeWidth="2" fill="none" />
            <circle cx="450" cy="450" r="190" stroke="black" strokeWidth="2" fill="none" />
            <circle cx="450" cy="450" r="90" stroke="black" strokeWidth="2" fill="#AC9BBC" />
            <circle cx="450" cy="450" r="20" fill="black" />
          </svg>
        <div className="about-content">
        </div>
        <img src={element} className='reversed-element' alt="figma-element" />
      </section>


    </main>
  )
}

export default App;
