import About from "./pages/about"
import Navbar from "./components/Navbar"
import Home from "./pages/home"
import Project from "./pages/projects";
import Experience from "./pages/experience";
import Skills from "./pages/skills";
import Contact from "./pages/contact";


export default function app() {
  return (
    <>

<Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Project />
      </div>
      <div id="experience">
        <Experience />
      </div>
      
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
