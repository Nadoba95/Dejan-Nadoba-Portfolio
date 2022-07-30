import Countries from "../assets/images/Countries.jpg";
import TicTac from "../assets/images/iks-oks.jpg";
import FitClub from "../assets/images/fit-club.jpg";

export const projectsData = [
  {
    name: "REST Countries API",
    image: <img src={Countries} alt="Countries" />,
    techs: ["React", "React-Router", "API"],
    description:
      "This is my first REST project and i learned a lot about react building it. Used react custom hooks, react router for pagination, useContext, etc.",
    github: "https://github.com/Nadoba95/REST-Countries-API",
    liveSite: "https://rest-countries-api-nadoba95.netlify.app",
  },

  {
    name: "REST Countries API",
    image: <img src={TicTac} alt="TicTac" />,
    techs: ["HTML", "CSS", "JavaScript"],
    description:
      "Built a tic tac toe game where people can play against each other or against CPU. Used html, css and JavaScript.",
    github: "https://github.com/Nadoba95/Tic-tac-toe-game",
    liveSite: "https://nadoba95.github.io/Tic-tac-toe-game/",
  },

  {
    name: "REST Countries API",
    image: <img src={FitClub} alt="FitClub" />,
    techs: ["React", "Framer-Motion"],
    description:
      "This is my first REST project and i learned a lot about react building it. Used react custom hooks, react router for pagination, useContext, etc.",
    github: "https://github.com/Nadoba95/Fit-Club-Website",
    liveSite: "https://fit-club-website-nadoba95.netlify.app/",
  },
];
