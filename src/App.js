import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import MyProjects from "./components/MyProjects/MyProjects";

function App() {
  return (
    <div className="App">
      <Navigation />
      <About />
      <Education />
      <Skills />
      <MyProjects />
    </div>
  );
}

export default App;
