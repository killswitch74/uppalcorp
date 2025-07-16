import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  Zap
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Services = () => {
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
      color: "bg-gradient-primary"
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
      color: "bg-gradient-secondary"
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
      color: "bg-gradient-primary"
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
      color: "bg-gradient-secondary"
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Seamless cloud solutions for scalability and reliability",
      features: [
        "Google Cloud Platform",
        "Firebase Integration",
        "API Management",
        "Serverless Architecture",
        "Cloud Storage Solutions",
        "Security & Compliance"
      ],
      color: "bg-gradient-primary"
    },
    {
      icon: BarChart,
      title: "Business Process Optimization",
      description: "Streamline operations and eliminate manual workflows",
      features: [
        "Process Analysis",
        "Workflow Automation",
        "Efficiency Optimization",
        "Cost Reduction Strategies",
        "Performance Monitoring",
        "Scalability Planning"
      ],
      color: "bg-gradient-secondary"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "Understanding your business needs and identifying automation opportunities"
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Developing a comprehensive roadmap for your digital transformation"
    },
    {
      step: "03",
      title: "Design & Development",
      description: "Building robust, scalable solutions using cutting-edge technologies"
    },
    {
      step: "04",
      title: "Testing & Deployment",
      description: "Rigorous testing followed by smooth deployment and go-live"
    },
    {
      step: "05",
      title: "Support & Optimization",
      description: "Ongoing support and continuous improvement for optimal performance"
    }
  ];

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
                  Services
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Comprehensive technology solutions that drive business growth and efficiency
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4 shadow-glow`}>
                      <service.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl text-foreground mb-2">
                      {service.title}
                    </CardTitle>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A proven methodology that ensures successful project delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="border-0 shadow-card text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                      <span className="text-2xl font-bold text-primary-foreground">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
                Why Choose Uppal Corporation?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-card">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <Zap className="h-8 w-8 text-primary mr-3" />
                      <h3 className="text-xl font-semibold text-foreground">
                        Proven Track Record
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      5+ years of experience with 50+ successful projects and 99% success rate. 
                      From startup to enterprise-level solutions.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-card">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <Bot className="h-8 w-8 text-primary mr-3" />
                      <h3 className="text-xl font-semibold text-foreground">
                        Cutting-Edge Technology
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      Always staying ahead with the latest in AI, automation, and web technologies. 
                      Future-proof solutions that scale with your business.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-card">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <Database className="h-8 w-8 text-primary mr-3" />
                      <h3 className="text-xl font-semibold text-foreground">
                        End-to-End Solutions
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      From concept to deployment and beyond. We handle everything so you can 
                      focus on your core business operations.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-0 shadow-card">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <BarChart className="h-8 w-8 text-primary mr-3" />
                      <h3 className="text-xl font-semibold text-foreground">
                        Measurable Results
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      Data-driven solutions that deliver real ROI. Every project comes with 
                      measurable improvements and performance metrics.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a solution that drives real results
            </p>
            <Button variant="hero" size="xl" asChild>
              <NavLink to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;