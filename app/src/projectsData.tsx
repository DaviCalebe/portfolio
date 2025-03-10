export type Project = {
    title: string;
    image: string;
    codeLink?: string;
    demoLink?: string;
    linkedinPost?: string;
  };
  
  export const projectsData: Project[] = [
    {
      title: "Site oficial da Fast Trading",
      image: "../src/assets/fast-trading.png",
      codeLink: "https://github.com/DaviCalebe/fast-trading",
      demoLink: "https://www.fasttradingimport.com.br/",
      linkedinPost: "https://www.linkedin.com/feed/update/urn:li:activity:7287171460274511873/"
    },
    {
      title: "Sistema da Solar Coca-Cola",
      image: "../src/assets/solar-coca-cola.png",
      codeLink: "https://github.com/DaviCalebe/solar-coca-cola",
      linkedinPost: "https://www.linkedin.com/feed/update/urn:li:activity:7208916626522460160/"
    },
    {
      title: "Cardápio Digital",
      image: "../src/assets/jornada-JS.png",
      codeLink: "https://github.com/DaviCalebe/Jornada-JS",
      linkedinPost: "https://www.linkedin.com/feed/update/urn:li:activity:7170885796504236032/"
    },
    {
      title: "Site de Streaming",
      image: "../src/assets/streaming.png",
      codeLink: "https://github.com/DaviCalebe/Site-de-Streaming",
      demoLink: "https://davicalebe.github.io/Site-de-Streaming/",
      linkedinPost: "https://www.linkedin.com/feed/update/urn:li:activity:7140368723961442304/"
    },
  ];
  