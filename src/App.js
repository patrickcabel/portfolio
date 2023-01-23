import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Particles from "./components/Particles";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Particles />
    </div>
  );
}

export default App;
