import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import FeaturedProjects from "./components/FeaturedProjects/FeaturedProjects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navigation />
      <About />
      <Education />
      <Skills />
      <FeaturedProjects />
      <Contact />
    </div>
  );
}

export default App;
