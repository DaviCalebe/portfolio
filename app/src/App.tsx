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
            <button> <img src={brazilflag} alt="" /> CV</button>
            <button><img src={usaflag} alt="" /> CV</button>
          </div>
        </div>
        
        <div className="profile-pic">
          <div className="circle"></div>
          <div className="circle-img"></div>
        </div>
      </div>
    </main>
  )
}

export default App;
