import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import LearningJourney from "../components/LearningJourney";
import CurrentlyBuilding from "../components/CurrentlyBuilding";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090a10] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <LearningJourney />
      <CurrentlyBuilding />
      <Contact />
      <Footer />
    </main>
  );
}
