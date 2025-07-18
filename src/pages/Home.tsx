import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientsMarquee from "@/components/ClientsMarquee";
import ServicesShowcase from "@/components/ServicesShowcase";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ClientsMarquee />
        <ServicesShowcase />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;