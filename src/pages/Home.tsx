import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientsMarquee from "@/components/ClientsMarquee";
import ServicesShowcase from "@/components/ServicesShowcase";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const Home = () => {
  return (
    <AnimatedBackground
      hue={240}
      hoverIntensity={0.2}
      rotateOnHover={true}
      className="min-h-screen bg-background"
    >
      <Header />
      <main>
        <Hero />
        <ClientsMarquee />
        <ServicesShowcase />
        <ProjectsSection />
      </main>
      <Footer />
    </AnimatedBackground>
  );
};

export default Home;