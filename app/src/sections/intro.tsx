import brazilflag from '../assets/brazil-flag.svg';
import usaflag from '../assets/usa-flag.svg';
import profilePic from '../assets/calebe.jpg';

const Intro = () => {
  return (
    <section className="grid md:grid-cols-2 place-items-center p-12 gap-10">
      <div className="flex flex-col items-center text-center gap-2">
        <h1 className="text-[96px] font-light text-primary">{'<'}Davi Calebe{'/>'}</h1>
        <p className="text-4xl text-secondary">dev full-stack</p>

        <div className="flex gap-5 mt-4">
          <button
            onClick={() => window.location.href = "https://drive.google.com/uc?export=download&id=18FH_bWyRGCCaerdntXZsPgoWZsE0reJZ"}
            className="flex items-center gap-4 text-3xl bg-transparent text-secondary border border-primary px-6 py-2 rounded-lg cursor-pointer"
          >
            <img src={brazilflag} alt="brazil-flag" className="w-10 h-10" /> CV
          </button>
          <button
            onClick={() => window.location.href = "https://drive.google.com/uc?export=download&id=1_2R6twVKEHGEQ2Yp_zBaXo0XMPyIakZL"}
            className="flex items-center gap-4 text-3xl bg-transparent text-secondary border border-primary px-6 py-2 rounded-lg cursor-pointer"
          >
            <img src={usaflag} alt="usa-flag" className="w-10 h-10" /> CV
          </button>
        </div>
      </div>

      <div className="relative flex">
        <div className="bg-tertiary w-[600px] h-[600px] rounded-full"></div>
        <div
          className="absolute top-0 right-0 bg-cover w-[90%] h-[90%] rounded-full"
          style={{ backgroundImage: `url(${profilePic})` }}
        ></div>
      </div>
    </section>
  );
};

export default Intro;
