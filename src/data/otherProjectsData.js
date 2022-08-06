import Todo from "../assets/images/Todo.png";
import TipCalculator from "../assets/images/tip-calculator.png";
import CountdownTimer from "../assets/images/countdown-timer.png";
import Restaurant from "../assets/images/restaurant.png";
import TimeDashboard from "../assets/images/time-tracking-dashboard.png";

export const otherProjectsData = [
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
    description:
      "User can calculate tips for certain amount of people for each person separately and for all.",
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
    name: "Restaurant Site",
    image: <img src={Restaurant} alt="Restaurant" />,
    techs: ["HTML", "CSS", "JavaScript"],
    description:
      "Nice looking static restaurant site where i practiced css on beginning with navbar.",
    github: "https://github.com/Nadoba95/Restaurant",
    liveSite: "https://nadoba95.github.io/Restaurant/",
  },

  {
    name: "Time Tracking Dashboard",
    image: <img src={TimeDashboard} alt="TimeDashboard" />,
    techs: ["HTML", "CSS", "SCSS"],
    description:
      "Dashboard where i'm getting data from json file and i used and practiced SCSS in this app for the first time ",
    github: "https://github.com/Nadoba95/Time-tracking-dashboard",
    liveSite: "https://time-tracking-dashboard-nadoba95.netlify.app/",
  },
];
