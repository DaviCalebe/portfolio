import './about.css';

const About = () => {
    return (
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
    );
  };
  
  export default About;
  