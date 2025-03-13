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
    <section className="bg-base grid md:grid-cols-2 place-items-center p-12 gap-10">
      <div className="flex flex-col items-center text-center gap-2">
        <h1 
          className="text-[96px] font-light text-primary cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {combinedEffect("<Davi Calebe/>")}
        </h1>
        <p 
          className="text-4xl text-secondary cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {combinedEffect("dev front-end")}
        </p>

        <div className="flex gap-5 mt-4">
          <button
            onClick={() => window.location.href = "https://drive.google.com/uc?export=download&id=18FH_bWyRGCCaerdntXZsPgoWZsE0reJZ"}
            className="flex items-center gap-4 text-3xl bg-transparent hover:bg-primary text-secondary border border-primary px-6 py-2 rounded-lg cursor-pointer"
          >
            <img src={brazilflag} alt="brazil-flag" className="w-10 h-10" /> CV
          </button>
          <button
            onClick={() => window.location.href = "https://drive.google.com/uc?export=download&id=1_2R6twVKEHGEQ2Yp_zBaXo0XMPyIakZL"}
            className="flex items-center gap-4 text-3xl bg-transparent hover:bg-primary text-secondary border border-primary px-6 py-2 rounded-lg cursor-pointer"
          >
            <img src={usaflag} alt="usa-flag" className="w-10 h-10" /> CV
          </button>
        </div>
      </div>

      <div className="relative flex">
        <motion.div ref={constraintsRef} className="bg-tertiary w-[600px] h-[600px] rounded-full">
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
