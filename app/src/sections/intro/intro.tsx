import './intro.css';
import brazilflag from '../../assets/brazil-flag.svg'
import usaflag from '../../assets/usa-flag.svg'

const Intro = () => {
    return (
      <section className='intro'>
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
      </section>
    );
  };
  
  export default Intro;  