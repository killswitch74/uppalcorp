import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Database, Bot, ShoppingCart, FileText, Zap, BarChart3, TrendingUp, Users, Clock } from "lucide-react";
import { NavLink } from "react-router-dom";

// Import project screenshots
import aiIntelligenceImg from "@/assets/projects/AI-Powered Feedback Intelligence System.png";
import inventoryImg from "@/assets/projects/Smart Inventory Management Platform.png";
import ecommerceImg from "@/assets/projects/E-commerce Data Extractor.png";
import analyticsImg from "@/assets/projects/Business Analytics Dashboard.png";
import accountingImg from "@/assets/projects/RWA Accounting & Billing System.png";

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Powered Feedback Intelligence System",
      description: "Advanced AI system that aggregates and analyzes customer reviews from multiple platforms to generate actionable business insights.",
      icon: Bot,
      technologies: ["AI/ML", "Natural Language Processing", "Python", "React"],
      impact: "40% improvement in customer satisfaction",
      color: "bg-gradient-primary",
      image: aiIntelligenceImg,
      metrics: {
        efficiency: "85%",
        timeReduction: "12 hrs/week",
        accuracy: "94%"
      },
      clientType: "E-commerce & SaaS",
      duration: "3 months"
    },
    {
      title: "Smart Inventory Management Platform",
      description: "Comprehensive inventory system with multi-location racking, real-time reconciliation, and advanced analytics for warehouse operations.",
      icon: Database,
      technologies: ["React", "Node.js", "Firebase", "Real-time Analytics"],
      impact: "60% reduction in inventory errors",
      color: "bg-gradient-secondary",
      image: inventoryImg,
      metrics: {
        efficiency: "92%",
        timeReduction: "25 hrs/week",
        accuracy: "98%"
      },
      clientType: "E-commerce & Retail",
      duration: "4 months"
    },
    {
      title: "E-commerce Data Automation Suite",
      description: "Complete automation platform for multi-channel e-commerce operations including order processing, inventory sync, and analytics.",
      icon: ShoppingCart,
      technologies: ["RPA", "API Integration", "Cloud Computing", "JavaScript"],
      impact: "70% reduction in manual operations",
      color: "bg-gradient-primary",
      image: ecommerceImg,
      metrics: {
        efficiency: "88%",
        timeReduction: "35 hrs/week",
        accuracy: "96%"
      },
      clientType: "Online Retailers",
      duration: "5 months"
    },
    {
      title: "Business Analytics Dashboard",
      description: "Real-time business intelligence platform with automated reporting, predictive analytics, and custom KPI tracking.",
      icon: BarChart3,
      technologies: ["React", "Chart.js", "Node.js", "MongoDB"],
      impact: "50% faster decision making",
      color: "bg-gradient-secondary",
      image: analyticsImg,
      metrics: {
        efficiency: "90%",
        timeReduction: "20 hrs/week",
        accuracy: "95%"
      },
      clientType: "Enterprises",
      duration: "3 months"
    },
    {
      title: "RWA Accounting & Billing System",
      description: "Comprehensive financial management system with automated billing, expense tracking, and compliance reporting for residential associations.",
      icon: FileText,
      technologies: ["React", "Node.js", "PDF Generation", "Payment Gateway"],
      impact: "80% reduction in billing errors",
      color: "bg-gradient-primary",
      image: accountingImg,
      metrics: {
        efficiency: "93%",
        timeReduction: "30 hrs/week",
        accuracy: "99%"
      },
      clientType: "Property Management",
      duration: "4 months"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 overflow-hidden">
              {/* Project Screenshot */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className={`absolute top-4 right-4 w-10 h-10 ${project.color} rounded-lg flex items-center justify-center shadow-glow`}>
                  <project.icon className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-foreground mb-2">
                  {project.title}
                </CardTitle>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center">
                    <Users className="h-3 w-3 mr-1" />
                    {project.clientType}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {project.duration}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center p-2 bg-muted/50 rounded-lg">
                    <div className="text-lg font-bold text-primary">{project.metrics.efficiency}</div>
                    <div className="text-xs text-muted-foreground">Efficiency</div>
                  </div>
                  <div className="text-center p-2 bg-muted/50 rounded-lg">
                    <div className="text-lg font-bold text-primary">{project.metrics.timeReduction}</div>
                    <div className="text-xs text-muted-foreground">Time Saved</div>
                  </div>
                  <div className="text-center p-2 bg-muted/50 rounded-lg">
                    <div className="text-lg font-bold text-primary">{project.metrics.accuracy}</div>
                    <div className="text-xs text-muted-foreground">Accuracy</div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center text-sm font-semibold text-primary">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  {project.impact}
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