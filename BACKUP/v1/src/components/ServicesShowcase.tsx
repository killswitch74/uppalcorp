import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code, 
  Bot, 
  ShoppingCart, 
  Database, 
  Cloud, 
  BarChart,
  ArrowRight,
  Check,
  Zap,
  Sparkles,
  TrendingUp,
  Shield
} from "lucide-react";
import { NavLink } from "react-router-dom";

const ServicesShowcase = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Complete web application development from frontend to backend",
      features: [
        "React & Next.js Development",
        "Node.js & Express Backend",
        "Database Design & Management",
        "API Development & Integration",
        "Responsive UI/UX Design",
        "Performance Optimization"
      ],
      color: "bg-gradient-primary",
      stats: { projects: "25+", efficiency: "95%", clients: "15+" }
    },
    {
      icon: Bot,
      title: "AI & RPA Automation",
      description: "Intelligent automation solutions that work 24/7 without human intervention",
      features: [
        "AI-Powered Chatbots",
        "Process Automation",
        "Workflow Optimization",
        "Data Processing Automation",
        "Social Media Automation",
        "Custom AI Agents"
      ],
      color: "bg-gradient-secondary",
      stats: { projects: "15+", efficiency: "80%", clients: "12+" }
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Comprehensive e-commerce platforms and automation tools",
      features: [
        "Multi-platform Integration",
        "Inventory Management",
        "Order Processing Automation",
        "Analytics & Reporting",
        "Payment Gateway Integration",
        "Customer Management"
      ],
      color: "bg-gradient-primary",
      stats: { projects: "20+", efficiency: "90%", clients: "18+" }
    },
    {
      icon: Database,
      title: "Data Analytics & Processing",
      description: "Transform raw data into actionable business insights",
      features: [
        "Data Extraction & Validation",
        "Real-time Analytics",
        "Business Intelligence",
        "Automated Reporting",
        "Data Visualization",
        "Predictive Analytics"
      ],
      color: "bg-gradient-secondary",
      stats: { projects: "18+", efficiency: "85%", clients: "14+" }
    }
  ];

  const currentService = services[activeService];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What We{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Build
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions that drive business growth, streamline operations, and deliver measurable results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Service Navigation */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-glow ${
                  activeService === index 
                    ? 'border-primary bg-primary/10 shadow-glow' 
                    : 'border-muted hover:border-primary/50'
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center shadow-glow`}>
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  <ArrowRight className={`h-5 w-5 transition-transform duration-300 ${
                    activeService === index ? 'rotate-90 text-primary' : 'text-muted-foreground'
                  }`} />
                </div>
              </div>
            ))}
          </div>

          {/* Service Details */}
          <div className="space-y-6">
            <Card className="border-0 shadow-glow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-foreground">
                    {currentService.title}
                  </CardTitle>
                  <div className={`w-16 h-16 ${currentService.color} rounded-full flex items-center justify-center shadow-glow`}>
                    <currentService.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {currentService.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {currentService.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{currentService.stats.projects}</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{currentService.stats.efficiency}</div>
                    <div className="text-sm text-muted-foreground">Efficiency</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{currentService.stats.clients}</div>
                    <div className="text-sm text-muted-foreground">Clients</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Zap className="h-6 w-6 text-primary mr-3" />
                    <h4 className="text-lg font-semibold text-foreground">Fast Delivery</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Rapid development cycles with continuous deployment
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Shield className="h-6 w-6 text-primary mr-3" />
                    <h4 className="text-lg font-semibold text-foreground">Enterprise Grade</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Secure, scalable solutions built for enterprise needs
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <TrendingUp className="h-6 w-6 text-primary mr-3" />
                    <h4 className="text-lg font-semibold text-foreground">Proven ROI</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Measurable business impact with clear success metrics
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Sparkles className="h-6 w-6 text-primary mr-3" />
                    <h4 className="text-lg font-semibold text-foreground">Innovation Focus</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Latest technologies and cutting-edge solutions
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg" asChild>
            <NavLink to="/services">
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </NavLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;