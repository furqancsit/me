

import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Project from "./pages/Project";
import About from "./components/About";

import Contact from "./pages/ContactPage";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-[#050505] text-white overflow-hidden">

      {/* navbar */}
      <Navbar />

      {/* hero */}
      <section id="home">
        <Hero />
      </section>

      {/* projects */}
      <section id="projects">
        <Project />
      </section>

      {/* about */}
      <section id="about">
        <About />
      </section>

      {/* contact */}
      <section id="contact">
        <Contact />
      </section>

      {/* footer */}
      <Footer />

    </main>
  );
}

export default App;