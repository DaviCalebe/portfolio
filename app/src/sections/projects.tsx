import { useState } from "react";
import arrow from "../assets/arrow.svg";
import { projectsData, Project } from "../projectsData";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project>(projectsData[0]);

  return (
    <section className="bg-secondary text-white grid grid-cols-2 gap-10 min-h-[45rem] h-screen p-8">
      <div className="flex flex-col">
        <div className="flex justify-between border-b-2 border-black">
          <h1 className="appear text-5xl uppercase">Projetos</h1>
          <h1 className="appear text-5xl">{projectsData.length}</h1>
        </div>
        <ul className="py-2 space-y-2">
          {projectsData.map((project, index) => (
            <li
              key={index}
              className="appear-left text-2xl border-b-2 border-black p-2 w-full overflow-hidden whitespace-nowrap text-ellipsis"
            >
              <button
                className="flex items-center gap-3 w-full overflow-hidden whitespace-nowrap text-ellipsis text-left -ml-13 hover:-ml-0 transition-all duration-300 ease-in-out"
                onClick={() => setSelectedProject(project)}
              >
                <img src={arrow} alt="arrow" className="w-10" />
                <span>{project.title}</span>
              </button>
            </li>
          ))}
        </ul>
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

        <div className="absolute bottom-0 left-0 w-full flex gap-2 p-3">
          {selectedProject.codeLink && (
            <a
              href={selectedProject.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white text-2xl w-full h-12 rounded-lg flex items-center justify-center"
            >
              Código fonte
            </a>
          )}

          {selectedProject.demoLink && (
            <a
              href={selectedProject.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white text-2xl w-full h-12 rounded-lg flex items-center justify-center"
            >
              Demo
            </a>
          )}

    {selectedProject.linkedinPost && (
            <a
              href={selectedProject.linkedinPost}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white text-2xl w-full h-12 rounded-lg flex items-center justify-center"
            >
              LinkedIn Post
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
