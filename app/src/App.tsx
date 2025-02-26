import './App.css';
import { ToggleNav } from './components/toggle-nav';
import brazilflag from './assets/brazil-flag.svg'
import usaflag from './assets/usa-flag.svg'

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
        <svg className='reversed-element' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" fill="var(--base-color)"></path>
        </svg>

        <svg viewBox="0 0 3000 1600" className="target-svg">
          <circle cx="1500" cy="800" r="1400" stroke="black" strokeWidth="2" fill="none" />
          <circle cx="1500" cy="800" r="1050" stroke="black" strokeWidth="2" fill="none" />
          <circle cx="1500" cy="800" r="800" stroke="black" strokeWidth="2" fill="none" />
          <circle cx="1500" cy="800" r="500" stroke="black" strokeWidth="2" fill="none" />
          <circle cx="1500" cy="800" r="150" stroke="black" strokeWidth="2" fill="#AC9BBC" />
          <circle cx="1500" cy="800" r="30" fill="black" />
        </svg>

        <div className="about-content">
          <h1>SOBRE MIM</h1>
          
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aperiam eaque ea nobis tempora impedit perspiciatis nesciunt consectetur magnam numquam, necessitatibus aliquam illo libero ratione eligendi nemo voluptatibus et facere.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aperiam eaque ea nobis tempora impedit perspiciatis nesciunt consectetur magnam numquam, necessitatibus aliquam illo libero ratione eligendi nemo voluptatibus et facere.</p>
        </div>
        <svg className='default-element' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" fill="var(--base-color)"></path>
        </svg>
      </section>

      <section className="road">
        <h1>A estrada até aqui...</h1>
      </section>

    </main>
  )
}

export default App;
