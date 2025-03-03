const Projects = () => {

    const projectsData = [
        "Site oficial da Fast Trading",
        "Sistema da Solar Coca-Cola",
        "Cardápio Digital",
        "Site de Streaming",
      ];
    
    return (
        <section className="bg-secondary text-white grid grid-cols-2 gap-10 min-h-[45rem] p-8">
            <div className="flex flex-col">
                <div className="flex justify-between border-b-2 border-black">
                    <h1 className="text-5xl uppercase">Projetos</h1>
                    <h1 className="text-5xl">4</h1>
                </div>
                <ul className="py-2 space-y-2">
                    {projectsData.map((project, index) => (
                        <li key={index} className="text-2xl border-b-2 border-black">
                            <button>
                                {project}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="relative border border-black w-full h-11/12 rounded-se-3xl rounded-es-3xl">
                    <div className="absolute bottom-0 left-0 w-full flex gap-2 p-3">
                        <button className="bg-black text-white text-2xl w-full h-12 rounded-lg">Código fonte</button>
                        <button className="bg-black text-white text-2xl w-full h-12 rounded-lg">Demo</button>
                    </div>
            </div>
        </section>
    )
}

export default Projects;