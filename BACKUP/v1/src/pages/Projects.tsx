import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  Database, 
  ShoppingCart, 
  BarChart,
  FileText,
  Settings,
  ExternalLink,
  Calendar,
  Target,
  TrendingUp,
  Building2,
  Smartphone,
  Cloud,
  Shield
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI-Powered Feedback Intelligence System",
      description: "Comprehensive feedback analysis platform that aggregates customer reviews from multiple sources and uses advanced AI to generate actionable insights for product and service improvement.",
      fullDescription: "This system revolutionizes how businesses understand their customers by automatically collecting, processing, and analyzing feedback from various channels including social media, review sites, and direct customer communications. The AI engine identifies sentiment patterns, key themes, and actionable recommendations.",
      icon: Bot,
      technologies: ["Python", "Natural Language Processing", "Machine Learning", "React", "Node.js", "MongoDB"],
      features: [
        "Multi-source data aggregation",
        "Real-time sentiment analysis",
        "Automated insight generation",
        "Custom reporting dashboard",
        "Trend identification",
        "Actionable recommendations"
      ],
      impact: "40% improvement in customer satisfaction",
      duration: "6 months",
      status: "Completed",
      color: "bg-gradient-primary"
    },
    {
      id: 2,
      title: "Smart Inventory Management Platform",
      description: "Multi-version inventory platform featuring advanced racking systems, automated stock reconciliation, and real-time analytics designed specifically for warehouse operations.",
      fullDescription: "A comprehensive inventory management solution that streamlines warehouse operations through intelligent racking systems, automated stock counting, and real-time analytics. The platform supports multiple warehouse locations and provides detailed insights into stock movement patterns.",
      icon: Database,
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "WebSocket", "Docker"],
      features: [
        "Multi-location support",
        "Real-time stock tracking",
        "Automated reconciliation",
        "Advanced analytics",
        "Mobile-responsive interface",
        "Barcode scanning integration"
      ],
      impact: "60% reduction in inventory errors",
      duration: "8 months",
      status: "Completed",
      color: "bg-gradient-secondary"
    },
    {
      id: 3,
      title: "E-commerce Automation Suite",
      description: "Complete e-commerce automation platform with tools for order processing, inventory management, and performance analytics across multiple marketplace platforms.",
      fullDescription: "This comprehensive suite automates the entire e-commerce workflow from inventory management to order fulfillment. It integrates with major marketplaces like Amazon, Flipkart, and Myntra, providing a unified dashboard for managing all sales channels.",
      icon: ShoppingCart,
      technologies: ["React", "Node.js", "MySQL", "Redis", "AWS", "API Integration"],
      features: [
        "Multi-marketplace integration",
        "Automated order processing",
        "Inventory synchronization",
        "Performance analytics",
        "Automated pricing updates",
        "Customer management"
      ],
      impact: "70% reduction in manual work",
      duration: "10 months",
      status: "Completed",
      color: "bg-gradient-primary"
    },
    {
      id: 4,
      title: "RWA Accounting & Billing System",
      description: "Comprehensive accounting platform for Resident Welfare Associations (RWAs) with automated billing, expense tracking, and financial reporting capabilities.",
      fullDescription: "A complete financial management solution for housing societies and residential complexes. The system automates maintenance billing, tracks expenses, manages vendor payments, and generates detailed financial reports for transparent community management.",
      icon: FileText,
      technologies: ["React", "Node.js", "PostgreSQL", "PDF Generation", "Email Integration"],
      features: [
        "Automated billing generation",
        "Expense tracking",
        "Vendor management",
        "Financial reporting",
        "Payment tracking",
        "Resident portal"
      ],
      impact: "50% reduction in billing errors",
      duration: "5 months",
      status: "Completed",
      color: "bg-gradient-secondary"
    },
    {
      id: 5,
      title: "Automated Social Media Management",
      description: "AI-powered social media automation platform that creates, schedules, and publishes content across multiple platforms with zero human intervention.",
      fullDescription: "This innovative platform leverages AI to generate engaging social media content, automatically schedule posts, and analyze performance metrics. It operates autonomously for extended periods, making it perfect for consistent social media presence.",
      icon: Bot,
      technologies: ["Python", "AI/ML", "Social Media APIs", "Content Generation", "Scheduling"],
      features: [
        "AI content generation",
        "Multi-platform posting",
        "Automated scheduling",
        "Performance analytics",
        "Engagement tracking",
        "Content optimization"
      ],
      impact: "300% increase in social media engagement",
      duration: "4 months",
      status: "Ongoing",
      color: "bg-gradient-primary"
    },
    {
      id: 6,
      title: "Business Analytics Dashboard",
      description: "Comprehensive business intelligence platform providing real-time insights, predictive analytics, and automated reporting for data-driven decision making.",
      fullDescription: "A powerful analytics platform that transforms raw business data into actionable insights. It features real-time dashboards, predictive modeling, and automated report generation to help businesses make informed decisions quickly.",
      icon: BarChart,
      technologies: ["React", "D3.js", "Python", "Machine Learning", "PostgreSQL", "Redis"],
      features: [
        "Real-time dashboards",
        "Predictive analytics",
        "Automated reporting",
        "Custom KPI tracking",
        "Data visualization",
        "Export capabilities"
      ],
      impact: "45% improvement in decision-making speed",
      duration: "7 months",
      status: "Completed",
      color: "bg-gradient-secondary"
    },
    {
      id: 7,
      title: "Smart Building Management System",
      description: "IoT-enabled building automation platform for monitoring and controlling HVAC, lighting, security, and energy systems across multiple facilities.",
      fullDescription: "A comprehensive building management solution that integrates IoT sensors and smart devices to monitor and control building systems. The platform provides real-time monitoring, predictive maintenance, and energy optimization capabilities.",
      icon: Building2,
      technologies: ["IoT", "React", "Node.js", "MQTT", "Time Series Database", "Machine Learning"],
      features: [
        "Real-time monitoring",
        "Predictive maintenance",
        "Energy optimization",
        "Security integration",
        "Mobile app control",
        "Automated scheduling"
      ],
      impact: "35% reduction in energy costs",
      duration: "9 months",
      status: "Completed",
      color: "bg-gradient-primary"
    },
    {
      id: 8,
      title: "Cross-Platform Mobile App Suite",
      description: "Multi-platform mobile application development with native performance, offline capabilities, and seamless cloud synchronization.",
      fullDescription: "A comprehensive mobile app development project that delivered native-quality apps for iOS and Android with shared codebase. The apps feature offline functionality, real-time synchronization, and enterprise-grade security.",
      icon: Smartphone,
      technologies: ["React Native", "TypeScript", "Firebase", "Redux", "Push Notifications", "Biometric Auth"],
      features: [
        "Cross-platform compatibility",
        "Offline functionality",
        "Real-time sync",
        "Push notifications",
        "Biometric authentication",
        "Enterprise security"
      ],
      impact: "80% code reusability across platforms",
      duration: "6 months",
      status: "Completed",
      color: "bg-gradient-secondary"
    },
    {
      id: 9,
      title: "Cloud Infrastructure Automation",
      description: "DevOps automation platform for cloud infrastructure provisioning, deployment, and monitoring with multi-cloud support.",
      fullDescription: "A DevOps automation solution that streamlines cloud infrastructure management across multiple cloud providers. The platform automates provisioning, deployment, scaling, and monitoring of cloud resources with built-in cost optimization.",
      icon: Cloud,
      technologies: ["Terraform", "Docker", "Kubernetes", "AWS", "Azure", "Monitoring Tools"],
      features: [
        "Multi-cloud support",
        "Automated provisioning",
        "Container orchestration",
        "Cost optimization",
        "Monitoring & alerting",
        "CI/CD pipeline"
      ],
      impact: "60% reduction in deployment time",
      duration: "8 months",
      status: "Ongoing",
      color: "bg-gradient-primary"
    },
    {
      id: 10,
      title: "Cybersecurity Compliance Platform",
      description: "Enterprise security management platform for compliance tracking, vulnerability assessment, and automated security reporting.",
      fullDescription: "A comprehensive cybersecurity platform that helps organizations maintain compliance with industry standards while providing continuous security monitoring and automated threat detection.",
      icon: Shield,
      technologies: ["Python", "Security APIs", "Vulnerability Scanners", "Compliance Frameworks", "Reporting"],
      features: [
        "Compliance tracking",
        "Vulnerability assessment",
        "Automated reporting",
        "Threat detection",
        "Risk management",
        "Security dashboards"
      ],
      impact: "95% compliance score achievement",
      duration: "12 months",
      status: "Completed",
      color: "bg-gradient-secondary"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "Ongoing":
        return "bg-blue-100 text-blue-800";
      case "Planning":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Our{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Projects
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Innovative solutions that deliver real, measurable business value through cutting-edge technology
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="border-0 shadow-card hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className={`w-12 h-12 ${project.color} rounded-lg flex items-center justify-center shadow-glow`}>
                        <project.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-foreground mt-4">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {project.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 4).map((tech, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 4 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.technologies.length - 4} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {project.duration}
                        </div>
                        <div className="flex items-center text-sm text-primary font-medium">
                          <Target className="h-4 w-4 mr-1" />
                          {project.impact}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <Card className="border-0 shadow-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <Target className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">50+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <TrendingUp className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">99%</div>
                  <div className="text-muted-foreground">Success Rate</div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-card">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <Settings className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
                  <div className="text-muted-foreground">Automated Systems</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can create a custom solution for your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <NavLink to="/contact">
                  Start Your Project
                  <ExternalLink className="ml-2 h-5 w-5" />
                </NavLink>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <NavLink to="/services">View Our Services</NavLink>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;