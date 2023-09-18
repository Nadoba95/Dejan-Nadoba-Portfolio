import FitClub from "../assets/images/fit-club.jpg";
import FrontendRules from "../assets/images/fe-rules.jpg";
import Todo from "../assets/images/Todo.jpg";
import TipCalculator from "../assets/images/tip-calculator.jpg";
import CountdownTimer from "../assets/images/countdown-timer.jpg";
import Restaurant from "../assets/images/restaurant.jpg";
import ShorteningLink from "../assets/images/shortening-link.jpg";
import TimeDashboard from "../assets/images/time-tracking-dashboard.jpg";
import TicTacToe from "../assets/images/iks-oks.jpg";

export const otherProjectsData = [
  {
    name: "Frontend-Rules Website",
    image: <img src={FrontendRules} alt="Frontend Rules" />,
    techs: ["HTML", "SCSS", "BEM", "Javascript"],
    description: "My first landing page (single-page) website on internship, exported from Figma.",
    github: "https://github.com/Nadoba95/front-end-rules",
    liveSite: "https://frontend-rules-dejan-nadoba.netlify.app/",
  },

  {
    name: "Tic Tac Toe App",
    image: <img src={TicTacToe} alt="Tic-Tac-Toe" />,
    techs: ["HTML", "CSS", "Javascript"],
    description: "Built a tic tac toe game where people can play against each other or against CPU. Used html, css and JavaScript.",
    github: "https://github.com/Nadoba95/Tic-tac-toe-game",
    liveSite: "https://nadoba95.github.io/Tic-tac-toe-game/",
  },

  {
    name: "Fit Club Website",
    image: <img src={FitClub} alt="FitClub" />,
    techs: ["React", "Framer-Motion"],
    description:
      "This is my first REST project and i learned a lot about react building it. Used react custom hooks, react router for pagination, useContext, etc.",
    github: "https://github.com/Nadoba95/Fit-Club-Website",
    liveSite: "https://fit-club-website-nadoba95.netlify.app/",
  },
  {
    name: "Todo App",
    image: <img src={Todo} alt="Todo" />,
    techs: ["HTML", "CSS", "JavaScript"],
    description:
      "Todo app where user can add tasks, check/uncheck and delete them. Tasks can be reordered with drag and drop and they are saved in local storage. ",
    github: "https://github.com/Nadoba95/Todo-app",
    liveSite: "https://nadoba95.github.io/Todo-app/",
  },

  {
    name: "Tip Calculator App",
    image: <img src={TipCalculator} alt="TipCalculator" />,
    techs: ["HTML", "CSS", "JavaScript"],
    description: "User can calculate tips for certain amount of people for each person separately and for all.",
    github: "https://github.com/Nadoba95/Tip-calculator-app",
    liveSite: "https://nadoba95.github.io/Tip-calculator-app/",
  },

  {
    name: "Clock 25 + 5 App",
    image: <img src={CountdownTimer} alt="CountdownTimer" />,
    techs: ["React"],
    description:
      "My first simple react app, countdown timer for work season and for rest season. This kind of app is for training system usually.  ",
    github: "https://github.com/Nadoba95/React-Countdown-timer",
    liveSite: "https://countdown-timer-nadoba95.netlify.app/",
  },

  {
    name: "Restaurant Website",
    image: <img src={Restaurant} alt="Restaurant" />,
    techs: ["HTML", "CSS", "JavaScript"],
    description: "Nice looking static restaurant site where i practiced css on beginning with navbar.",
    github: "https://github.com/Nadoba95/Restaurant",
    liveSite: "https://nadoba95.github.io/Restaurant/",
  },

  {
    name: "Shortening Link API",
    image: <img src={ShorteningLink} alt="ShorteningLink" />,
    techs: ["HTML", "SCSS", "JavaScript", "REST", "BEM"],
    description: "Responsive Shortly URL shortening API page, user can insert some link and he will get short version of him.",
    github: "https://github.com/Nadoba95/Shortly-URL-shortening-API",
    liveSite: "https://nadoba95.github.io/Shortly-URL-shortening-API/",
  },

  {
    name: "Time Tracking Dashboard",
    image: <img src={TimeDashboard} alt="TimeDashboard" />,
    techs: ["HTML", "SCSS"],
    description: "Dashboard where i'm getting data from json file and i used and practiced SCSS in this app for the first time ",
    github: "https://github.com/Nadoba95/Time-tracking-dashboard",
    liveSite: "https://time-tracking-dashboard-nadoba95.netlify.app/",
  },
];
