import { project } from "@/@types/project";

export const projectsData: project[] = [
  {
    id: 1,
    title: "Pokedex",
    description: "Ce projet a été réalisé en autonomie dans le cadre de ma formation Concepteur Développeur d’Applications (CDA). Il s'agit d'une Single Page Application (SPA) développée en JavaScript Vanilla, qui consomme une API REST pour afficher et manipuler des données Pokémons.",
    stack: [
        {
          id: 1,
          name: "HTML5",
          logo: "/images/html5.png",
        },
        {
          id: 2,
          name: "CSS3",
          logo: "/images/css3.png",
        },
        {
          id: 3,
          name: "Bulma",
          logo: "",
        },
        {
          id: 4,
          name: "JavaScript",
          logo: "/images/javascript.png",
        },
        {
          id: 5,
          name: "Node.js",
          logo: "/images/nodejs.png",
        },
        {
          id: 6,
          name: "Sequelize",
          logo: "/images/sequelize.png",
        },
        {
          id: 7,
          name: "PostgreSQL",
          logo: "/images/postgresql.png",
        },
    ],
  },
  {
    id: 2,
    title: "Portfolio",
    description: "Ce portfolio a été conçu avec Next.js et TailwindCSS afin de présenter mes projets, mes compétences et mon parcours de manière simple et claire.",
    stack: [
      {
        id:11,
        name: "Typescript",
        logo: "/images/typescript.png"
      },
      {
        id: 8,
        name: "React",
        logo: "/images/react.png",
      },
      {
        id: 9,
        name: "Next.js",
        logo: "/images/nextjs.png",
      },
      {
        id: 10,
        name: "TailwindCSS",
        logo: "",
      },
    ]
  },

];