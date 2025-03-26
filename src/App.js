import React, { useState, useEffect } from "react";
import Header, { Sidebar } from "./content/Header";
import HeroSection from "./content/HeroSection";
import AboutTeamIgnite from "./content/AboutTeamIgnite";
import WhyChooseUs from "./content/WhyChooseUs";
import IgniteXServices from "./content/IgniteXServices";
import Skills from "./content/Skills";
import Exp from "./content/Exp";
import Projects from "./content/Projects";
import MeetTeam from "./content/MeetTeam";
import ContactForm from "./content/ContactForm";
import Footer from "./content/Footer";
import CursorAnimation from "./content/CursorAnimation";
// import Certificate from "./content/Certificate"; // Uncomment if needed

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div className="relative">
      {/* Header & Sidebar */}
      <Header toggleMenu={toggleMenu} />
      <Sidebar isOpen={menuOpen} toggleMenu={toggleMenu} />

      {/* Hero Section - First impression matters */}
      <HeroSection />

      {/* About Us - Introduce your brand after grabbing attention */}
      {/* <AboutTeamIgnite /> */}

      {/* Why Choose Us - Explain what makes you stand out */}
      <WhyChooseUs />

      {/* Services - Showcasing what you offer */}
      <IgniteXServices />

      {/* Skills & Experience - Proving expertise */}
      <Skills />
      <Exp />

      {/* Projects - Demonstrating real-world applications */}
      <Projects />

      {/* Meet the Team - Personal connection with your audience */}
      <MeetTeam />

      {/* Contact Form - Encouraging user engagement */}
      <ContactForm />

      {/* Footer - Wrapping up with essential links */}
      <Footer />

      {/* Cursor Animation - Show only on desktop */}
      <div className="hidden md:block">
        <CursorAnimation />
      </div>
    </div>
  );
};

export default App;
