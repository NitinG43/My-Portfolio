import React from "react";
import ReactDOM from "react-dom/client";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Home } from "./components/Home";
import { Skills } from "./components/Skills";
import { Project } from "./components/Project";
import { useRef } from "react";
const AppLayout = () => {
  let aboutRef=useRef();
    let educationRef=useRef();
    let skillRef=useRef();
    let experienceRef=useRef();
    let projectRef=useRef();
    let contactRef=useRef();
  return (
    <div className="app">
      <NavBar projectRef={projectRef} aboutRef={aboutRef} skillRef={skillRef} experienceRef={experienceRef} educationRef={educationRef} contactRef={contactRef} />
      <Home />
      <Skills ref={skillRef}/>
      <Experience ref={experienceRef}/>
      <Project ref={projectRef}/>
      <Education ref={educationRef}/>
      <Contact ref={contactRef}/>
      <Footer projectRef={projectRef} skillRef={skillRef} experienceRef={experienceRef} educationRef={educationRef} contactRef={contactRef}/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
