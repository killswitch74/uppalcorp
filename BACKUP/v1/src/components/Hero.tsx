import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Bot } from "lucide-react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-hero border border-border mb-6">
            <span className="text-sm font-medium text-foreground">
              Building the Future with AI & Automation
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Smart, Scalable Solutions with{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI & RPA
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Full-stack development, AI automation, and RPA solutions that eliminate inefficiency 
            and drive growth. From e-commerce automation to smart inventory systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" asChild>
              <NavLink to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <NavLink to="/projects">View Our Work</NavLink>
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 shadow-glow">
                <Code className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Full-Stack Development</h3>
              <p className="text-muted-foreground">
                End-to-end web solutions with modern technologies
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 shadow-glow">
                <Bot className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">AI & RPA Automation</h3>
              <p className="text-muted-foreground">
                Intelligent agents that work 24/7 without human intervention
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 shadow-glow">
                <Zap className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">E-commerce Solutions</h3>
              <p className="text-muted-foreground">
                Streamlined systems for inventory, analytics, and growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;