import html from "../src/assets/html-5.svg"
import css from "../src/assets/css-3.svg"
import javascript from "../src/assets/javascript.svg"
import react from "../src/assets/react.svg";
import node from "../src/assets/node-js.svg";
import java from "../src/assets/java.svg";

export type Project = {
    title: string;
    image: string;
    stacks: string[];
    description: string;
    codeLink?: string;
    demoLink?: string;
    linkedinPost?: string;
  };
  
  export const projectsData: Project[] = [
    {
      title: "Site oficial da Fast Trading",
      image: "../src/assets/fast-trading.png",
      stacks: [html, css, javascript],
      description: "Meu primeiro trabalho como freelancer! Junto com meu colega Pedro, desenvolvemos uma landing page para a empresa Fast Trading Import. Focamos na responsividade para proporcionar uma experiência fluida em qualquer dispositivo e traduzimos todo o conteúdo do site, ampliando seu alcance para um público maior.",
      codeLink: "https://github.com/DaviCalebe/fast-trading",
      demoLink: "https://www.fasttradingimport.com.br/",
      linkedinPost: "https://www.linkedin.com/feed/update/urn:li:activity:7287171460274511873/"
    },
    {
      title: "Sistema da Solar Coca-Cola",
      image: "../src/assets/solar-coca-cola.png",
      stacks: [html, css, react, javascript, java],
      description: "Sistema de Gestão de Preços, projeto feito pelo Squad 34 para a Solar Coca-Cola, pela Residência do Porto Digital. Este é um projeto feito em SpringBoot e React que inclui funcionalidades como CRUD para Clientes, Produtos e Promoções, e também o relacionamento das entidades Clientes e Produtos.",
      codeLink: "https://github.com/DaviCalebe/solar-coca-cola",
      linkedinPost: "https://www.linkedin.com/feed/update/urn:li:activity:7208916626522460160/"
    },
    {
      title: "Cardápio Digital",
      image: "../src/assets/jornada-JS.png",
      stacks: [html, css, javascript, react, node],
      description: "Esse é um projeto do canal Dev Point, onde fizemos uma interface web de uma aplicação de cardápio digital. Foi a minha primeira aplicação em React, onde eu aprendi sobre ContextAPI, componentes, rotas e vários outros conceitos desse framework.",
      codeLink: "https://github.com/DaviCalebe/Jornada-JS",
      linkedinPost: "https://www.linkedin.com/feed/update/urn:li:activity:7170885796504236032/"
    },
    {
      title: "Site de Streaming",
      image: "../src/assets/streaming.png",
      stacks: [html, css],
      description: "Essa foi uma atividade em grupo que eu fiz pela faculdade, onde eu e meus colegas de classe, Flávia e Miguel, criamos um site de streaming com 5 telas sendo elas: Home, Filmes, Séries, Filme Modelo e Série Modelo.",
      codeLink: "https://github.com/DaviCalebe/Site-de-Streaming",
      demoLink: "https://davicalebe.github.io/Site-de-Streaming/",
      linkedinPost: "https://www.linkedin.com/feed/update/urn:li:activity:7140368723961442304/"
    },
  ];
  