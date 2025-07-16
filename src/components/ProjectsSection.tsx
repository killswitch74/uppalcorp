import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Bot, ShoppingCart, FileText, Zap, BarChart3 } from "lucide-react";
import { NavLink } from "react-router-dom";

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered Feedback Intelligence",
      description: "Aggregates and analyzes customer reviews using AI to generate actionable insights that elevate product and service quality.",
      icon: Bot,
      technologies: ["AI/ML", "Natural Language Processing", "Analytics"],
      impact: "40% improvement in customer satisfaction",
      color: "bg-gradient-primary"
    },
    {
      title: "Smart Inventory Management System",
      description: "Multi-version platform with racking, reconciliation, and real-time analytics — precision-built for warehouse teams.",
      icon: Database,
      technologies: ["React", "Node.js", "Real-time Analytics"],
      impact: "60% reduction in inventory errors",
      color: "bg-gradient-secondary"
    },
    {
      title: "E-commerce Automation Suite",
      description: "Scalable tools for order processing, analytics, and inventory management that cut down manual operations significantly.",
      icon: ShoppingCart,
      technologies: ["RPA", "API Integration", "Cloud Computing"],
      impact: "70% reduction in manual work",
      color: "bg-gradient-primary"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions that deliver real, measurable business value
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className={`w-12 h-12 ${project.color} rounded-lg flex items-center justify-center mb-4 shadow-glow`}>
                  <project.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground mb-2">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-sm font-semibold text-primary">
                    Impact: {project.impact}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" asChild>
            <NavLink to="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </NavLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;