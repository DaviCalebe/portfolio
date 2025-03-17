import { motion } from "framer-motion";
import { useRef, useState } from "react";
import brazilflag from '../assets/brazil-flag.svg';
import usaflag from '../assets/usa-flag.svg';
import profilePic from '../assets/calebe.jpg';

const Intro = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const combinedEffect = (text: string) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{ 
          opacity: 0, 
          x: (Math.random() - 0.5) * 200, 
          y: (Math.random() - 0.5) * 200, 
          rotate: Math.random() * 360 
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
          rotate: 0,
          transition: {
            duration: 0.8,
            ease: "easeOut",
            delay: Math.random() * 1,
          },
        }}
      >
        <motion.span
          className="inline-block"
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={
            hovered
              ? {
                  x: Math.random() * 50 - 25,
                  y: Math.random() * 50 - 25,
                  opacity: 0.8,
                  rotate: Math.random() * 20 - 10,
                }
              : { x: 0, y: 0, opacity: 1, rotate: 0 }
          }
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      </motion.span>
    ));
  };

  return (
    <section className="bg-base grid grid-rows-[auto_auto] place-items-center gap-8 md:grid-cols-2 md:grid-rows-1 lg: p-10 xl:p-12 xl:gap-10">
      <div className="flex flex-col items-center text-center gap-2">
        <h1 
          className=" font-light text-primary cursor-pointer whitespace-nowrap text-5xl md:text-5xl lg:text-7xl"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {combinedEffect("<Davi Calebe/>")}
        </h1>
        <p
          className="text-3xl text-secondary cursor-pointer lg:text-4xl"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {combinedEffect("dev front-end")}
        </p>

        <div className="flex gap-5 mt-4">
          <button
            onClick={() => window.location.href = "https://drive.google.com/uc?export=download&id=18FH_bWyRGCCaerdntXZsPgoWZsE0reJZ"}
            className="flex items-center gap-4  bg-transparent hover:bg-primary text-secondary border border-primary text-2xl px-4 py-2 rounded-lg cursor-pointer lg:text-3xl lg:px-6 lg:py-2"
          >
            <img src={brazilflag} alt="brazil-flag" className="w-8 h-8 lg:w-10 lg:h-10" /> CV
          </button>
          <button
            onClick={() => window.location.href = "https://drive.google.com/uc?export=download&id=1_2R6twVKEHGEQ2Yp_zBaXo0XMPyIakZL"}
            className="flex items-center gap-4 bg-transparent hover:bg-primary text-secondary border border-primary text-2xl px-4 py-2 rounded-lg cursor-pointer lg:text-3xl lg:px-6 lg:py-2"
          >
            <img src={usaflag} alt="usa-flag" className="w-8 h-8 lg:w-10 lg:h-10" /> CV
          </button>
        </div>
      </div>

      <div className="relative flex">
        <motion.div ref={constraintsRef} className="bg-tertiary w-[500px] h-[500px] rounded-full md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]">
          <motion.div
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.2}
            className="absolute z-20 top-0 right-0 bg-cover w-[90%] h-[90%] rounded-full"
            style={{ backgroundImage: `url(${profilePic})` }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
