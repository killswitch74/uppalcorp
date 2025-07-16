import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientsSection from "@/components/ClientsSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ClientsSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;