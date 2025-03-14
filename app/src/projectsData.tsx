import html from "../src/assets/html-5.svg"
import css from "../src/assets/css-3.svg"
import javascript from "../src/assets/javascript.svg"
import react from "../src/assets/react.svg";
import node from "../src/assets/node-js.svg";
import java from "../src/assets/java.svg";

export type Project = {
    id: string;
    image: string;
    stacks: string[];
    codeLink?: string;
    demoLink?: string;
    linkedinPost?: string;
  };
  
  export const projectsData: Project[] = [
    {
      id: "fastTrading",
      image: "../src/assets/fast-trading.png",
      stacks: [html, css, javascript],
      codeLink: "https://github.com/DaviCalebe/fast-trading",
      demoLink: "https://www.fasttradingimport.com.br/",
      linkedinPost: "https://www.linkedin.com/feed/update/urn:li:activity:7287171460274511873/"
    },
    {
      id: "solarCocaCola",
      image: "../src/assets/solar-coca-cola.png",
      stacks: [html, css, react, javascript, java],
      codeLink: "https://github.com/DaviCalebe/solar-coca-cola",
      linkedinPost: "https://www.linkedin.com/feed/update/urn:li:activity:7208916626522460160/"
    },
    {
      id: "digitalMenu",
      image: "../src/assets/jornada-JS.png",
      stacks: [html, css, javascript, react, node],
      codeLink: "https://github.com/DaviCalebe/Jornada-JS",
      linkedinPost: "https://www.linkedin.com/feed/update/urn:li:activity:7170885796504236032/"
    },
    {
      id: "streamingSite",
      image: "../src/assets/streaming.png",
      stacks: [html, css],
      codeLink: "https://github.com/DaviCalebe/Site-de-Streaming",
      demoLink: "https://davicalebe.github.io/Site-de-Streaming/",
      linkedinPost: "https://www.linkedin.com/feed/update/urn:li:activity:7140368723961442304/"
    },
  ];
  