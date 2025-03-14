const About = ({ t }: { t: (key:string) => string}) => {
  return (
      <section className="relative flex justify-center min-h-[55rem] h-auto overflow-hidden bg-[#C6B7CE]">
          <svg className="absolute top-0 -mt-px z-10 rotate-180 text-base" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
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
          
          <div className="relative flex flex-col self-start mt-15 gap-19 text-center">
              <h1 className="appear text-5xl font-semibold uppercase max-w-[800px] z-10">{t("about.title")}</h1>
              
              <p className="text-3xl font-medium max-w-[800px] z-10">{t("about.p1")}</p>
              
              <p className="text-3xl font-medium max-w-[800px] z-10">{t("about.p2")}</p>
          </div>
          
          <svg className="absolute bottom-0 -mb-px z-10 text-base" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" fill="currentColor"></path>
          </svg>
      </section>
  );
};

export default About;