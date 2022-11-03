import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import ReactDOM from "react-dom";

import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <BrowserRouter>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
