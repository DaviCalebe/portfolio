const About = () => {
  return (
      <section className="relative flex justify-center min-h-[55rem] h-auto overflow-hidden bg-[#C6B7CE]">
          <svg className="absolute top-0 -mt-px z-5 rotate-180" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" fill="currentColor"></path>
          </svg>
          
          <svg viewBox="0 0 3000 1600" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-2 min-w-[800px] w-full h-full opacity-30">
              <circle cx="1500" cy="800" r="1400" stroke="black" strokeWidth="2" fill="none" />
              <circle cx="1500" cy="800" r="1050" stroke="black" strokeWidth="2" fill="none" />
              <circle cx="1500" cy="800" r="800" stroke="black" strokeWidth="2" fill="none" />
              <circle cx="1500" cy="800" r="500" stroke="black" strokeWidth="2" fill="none" />
              <circle cx="1500" cy="800" r="150" stroke="black" strokeWidth="2" fill="#AC9BBC" />
              <circle cx="1500" cy="800" r="30" fill="black" />
          </svg>
          
          <div className="relative flex flex-col items-center self-center gap-19 text-center">
              <h1 className="text-5xl font-medium max-w-[800px] z-5">SOBRE MIM</h1>
              
              <p className="text-3xl font-bold max-w-[800px] z-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aperiam eaque ea nobis tempora impedit perspiciatis nesciunt consectetur magnam numquam, necessitatibus aliquam illo libero ratione eligendi nemo voluptatibus et facere.</p>
              
              <p className="text-3xl font-bold max-w-[800px] z-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aperiam eaque ea nobis tempora impedit perspiciatis nesciunt consectetur magnam numquam, necessitatibus aliquam illo libero ratione eligendi nemo voluptatibus et facere.</p>
          </div>
          
          <svg className="absolute bottom-0 -mb-px z-5" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" fill="currentColor"></path>
          </svg>
      </section>
  );
};

export default About;