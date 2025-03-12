import { useState } from "react";
import arrow from "../assets/arrow.svg";
import { projectsData, Project } from "../projectsData";
import { AnimatePresence, motion } from "framer-motion";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project>(projectsData[0]);

  return (
    <section className="bg-secondary text-white grid grid-cols-2 gap-10 min-h-[45rem] h-screen p-8">
      <div className="grid grid-rows-2">
        <div className="flex flex-col">
          <div className="flex justify-between border-b-2 border-black">
            <h1 className="appear text-5xl uppercase">Projetos</h1>
            <h1 className="appear text-5xl">{projectsData.length}</h1>
          </div>
          <ul className="py-2 space-y-2">
            {projectsData.map((project, index) => (
              <motion.li
                key={index}
                className="appear-left text-2xl border-b-2 border-black p-2 w-full overflow-hidden whitespace-nowrap text-emotion.llipsis"
              >
                <motion.button
                  initial={{marginLeft: "-3.25rem"}}
                  whileHover={{ marginLeft: "0rem" }}
                  whileTap={{scale: 0.9}}
                  transition={{ duration: 0.3, ease: "easeInOut"}}
                  className="flex items-center gap-3 w-full overflow-hidden whitespace-nowrap text-ellipsis text-left cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img src={arrow} alt="arrow" className="w-10" />
                  <span className="block truncate">{project.title}</span>
                </motion.button>
              </motion.li>
            ))}
          </ul>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProject.title} // Garante que um novo elemento seja renderizado a cada troca de projeto
            className="appear flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-2xl">{selectedProject.description}</p>
            <div className="flex gap-5">
              {selectedProject.stacks.map((stack, i) => (
                <motion.img
                  key={i}
                  src={stack}
                  className="w-10 h-10"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }} // Pequeno atraso para cada item entrar suavemente
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div
        className="appear relative border border-black w-full h-11/12 rounded-se-3xl rounded-es-3xl flex items-end overflow-hidden"
        style={{
          backgroundImage: `url(/assets/${selectedProject.image})`,
          backgroundSize: "cover", 
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transition: "background-image 1s ease-in-out"
        }}
      >

      <AnimatePresence mode="wait">
        {(selectedProject.codeLink || selectedProject.demoLink || selectedProject.linkedinPost) && (
          <motion.div
            key={selectedProject.title}
            className="absolute bottom-0 left-0 w-full flex gap-2 p-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {selectedProject.codeLink && (
              <motion.a
                href={selectedProject.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-[rgba(0,0,0,0.7)] text-white text-2xl w-full h-12 rounded-lg flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                Código fonte
              </motion.a>
            )}

            {selectedProject.demoLink && (
              <motion.a
                href={selectedProject.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-[rgba(0,0,0,0.7)] text-white text-2xl w-full h-12 rounded-lg flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                Demo
              </motion.a>
            )}

            {selectedProject.linkedinPost && (
              <motion.a
                href={selectedProject.linkedinPost}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-800 text-white text-2xl w-full h-12 rounded-lg flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                LinkedIn Post
              </motion.a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
