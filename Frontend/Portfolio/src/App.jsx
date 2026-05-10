import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Marketing from "./components/Marketing";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Marketing />
        <Contact />
      </main>
    </div>
  );
}