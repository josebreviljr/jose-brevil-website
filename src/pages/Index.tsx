
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import Community from "@/components/Community";
import GitHub from "@/components/GitHub";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { setupScrollAnimation } from "@/utils/scroll";

const Index = () => {
  useEffect(() => {
    // Setup scroll animations
    const cleanupAnimation = setupScrollAnimation();
    
    // Cleanup on component unmount
    return () => {
      cleanupAnimation();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Research />
      <GitHub />
      <Community />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
