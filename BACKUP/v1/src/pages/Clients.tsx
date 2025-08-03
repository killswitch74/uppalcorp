import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  TrendingUp, 
  ShoppingCart, 
  Users,
  Quote,
  ExternalLink,
  Calendar,
  MapPin
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Clients = () => {
  const clients = [
    {
      id: 1,
      name: "Shoe Island",
      logo: "SI",
      industry: "E-commerce",
      location: "New Delhi, India",
      description: "Leading online footwear brand with presence across major e-commerce platforms",
      services: ["E-commerce Platform Development", "Multi-channel Integration", "Inventory Management"],
      results: [
        "₹10 Crores annual turnover achieved",
        "300% increase in online sales",
        "50% reduction in inventory costs",
        "Multi-platform presence established"
      ],
      testimonial: "Karan transformed our offline business into a thriving online brand. His expertise in e-commerce platforms is unmatched.",
      duration: "10+ years",
      status: "Ongoing",
      color: "bg-gradient-primary"
    },
    {
      id: 2,
      name: "Mochites",
      logo: "M",
      industry: "Digital Solutions",
      location: "Mumbai, India",
      description: "Innovative digital platform providing comprehensive business solutions",
      services: ["Custom Software Development", "AI Integration", "Process Automation"],
      results: [
        "70% improvement in operational efficiency",
        "Automated workflow implementation",
        "Real-time analytics dashboard",
        "24/7 system reliability"
      ],
      testimonial: "The AI-powered solutions delivered by Karan have revolutionized our business operations. Exceptional work!",
      duration: "2 years",
      status: "Completed",
      color: "bg-gradient-secondary"
    },
    {
      id: 3,
      name: "BodyGlove",
      logo: "BG",
      industry: "Fitness Technology",
      location: "Bangalore, India",
      description: "Advanced fitness technology platform with AI-powered health insights",
      services: ["Mobile App Development", "AI Analytics", "Cloud Integration"],
      results: [
        "500k+ active users",
        "95% user satisfaction rate",
        "AI-powered health insights",
        "Seamless cross-platform experience"
      ],
      testimonial: "Karan's technical expertise and innovative approach helped us create a cutting-edge fitness platform.",
      duration: "18 months",
      status: "Completed",
      color: "bg-gradient-primary"
    },
    {
      id: 4,
      name: "IndiaKart",
      logo: "IK",
      industry: "Online Marketplace",
      location: "Gurgaon, India",
      description: "Comprehensive online marketplace connecting buyers and sellers nationwide",
      services: ["Marketplace Development", "Payment Integration", "Seller Management"],
      results: [
        "10,000+ registered sellers",
        "500k+ monthly transactions",
        "Automated seller onboarding",
        "Multi-payment gateway support"
      ],
      testimonial: "The marketplace platform built by Karan exceeded our expectations. It's robust, scalable, and user-friendly.",
      duration: "14 months",
      status: "Completed",
      color: "bg-gradient-secondary"
    },
    {
      id: 5,
      name: "ShopEase",
      logo: "SE",
      industry: "E-commerce Solutions",
      location: "Pune, India",
      description: "Comprehensive e-commerce solution provider for small and medium businesses",
      services: ["E-commerce Platform", "Inventory Automation", "Analytics Dashboard"],
      results: [
        "200+ SMB clients onboarded",
        "80% reduction in manual work",
        "Real-time inventory tracking",
        "Advanced sales analytics"
      ],
      testimonial: "Karan's e-commerce solutions have helped us scale our business exponentially. Highly recommended!",
      duration: "8 months",
      status: "Ongoing",
      color: "bg-gradient-primary"
    },
    {
      id: 6,
      name: "TechBazar",
      logo: "TB",
      industry: "Technology Platform",
      location: "Hyderabad, India",
      description: "B2B technology marketplace specializing in IT solutions and services",
      services: ["B2B Platform Development", "CRM Integration", "Automated Workflows"],
      results: [
        "1000+ technology vendors",
        "Automated quotation system",
        "90% faster procurement process",
        "Integrated CRM and billing"
      ],
      testimonial: "The B2B platform developed by Karan streamlined our entire procurement process. Outstanding results!",
      duration: "12 months",
      status: "Completed",
      color: "bg-gradient-secondary"
    },
    {
      id: 7,
      name: "QuickSell",
      logo: "QS",
      industry: "Sales Automation",
      location: "Chennai, India",
      description: "Advanced sales automation platform for enterprise businesses",
      services: ["Sales Automation", "CRM Development", "AI-Powered Insights"],
      results: [
        "60% increase in sales efficiency",
        "Automated lead scoring",
        "Real-time sales analytics",
        "Predictive sales forecasting"
      ],
      testimonial: "Karan's sales automation platform transformed our sales process. We're seeing remarkable improvements!",
      duration: "10 months",
      status: "Ongoing",
      color: "bg-gradient-primary"
    },
    {
      id: 8,
      name: "DataFlow",
      logo: "DF",
      industry: "Business Analytics",
      location: "Kolkata, India",
      description: "Comprehensive business analytics and data visualization platform",
      services: ["Analytics Platform", "Data Visualization", "Business Intelligence"],
      results: [
        "Advanced data processing",
        "Real-time dashboards",
        "Custom analytics reports",
        "Predictive modeling"
      ],
      testimonial: "The analytics platform built by Karan provides incredible insights into our business. Game-changing!",
      duration: "6 months",
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
                  Clients
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Trusted by leading companies across various industries to deliver exceptional digital solutions
              </p>
            </div>
          </div>
        </section>

        {/* Clients Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {clients.map((client) => (
                <Card key={client.id} className="border-0 shadow-card hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 ${client.color} rounded-lg flex items-center justify-center shadow-glow`}>
                          <span className="text-2xl font-bold text-primary-foreground">
                            {client.logo}
                          </span>
                        </div>
                        <div>
                          <CardTitle className="text-xl text-foreground">
                            {client.name}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {client.location}
                          </p>
                        </div>
                      </div>
                      <Badge className={getStatusColor(client.status)}>
                        {client.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mt-2">
                      {client.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Services Provided:</h4>
                        <div className="flex flex-wrap gap-2">
                          {client.services.map((service, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Key Results:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {client.results.slice(0, 3).map((result, index) => (
                            <li key={index} className="flex items-center">
                              <TrendingUp className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-muted/50 rounded-lg p-4">
                        <Quote className="h-4 w-4 text-primary mb-2" />
                        <p className="text-sm text-muted-foreground italic">
                          "{client.testimonial}"
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-border">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {client.duration}
                        </div>
                        <div className="text-sm font-medium text-primary">
                          {client.industry}
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <Users className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">30+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <ShoppingCart className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">₹50+</div>
                  <div className="text-sm text-muted-foreground">Crores Revenue Generated</div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <TrendingUp className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">200%</div>
                  <div className="text-sm text-muted-foreground">Average Growth</div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <Star className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">99%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Success stories from businesses that trusted us with their digital transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clients.slice(0, 3).map((client) => (
                <Card key={client.id} className="border-0 shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 ${client.color} rounded-full flex items-center justify-center mr-3`}>
                        <span className="text-lg font-bold text-primary-foreground">
                          {client.logo}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{client.name}</h3>
                        <p className="text-sm text-muted-foreground">{client.industry}</p>
                      </div>
                    </div>
                    <Quote className="h-5 w-5 text-primary mb-3" />
                    <p className="text-muted-foreground italic">
                      "{client.testimonial}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with innovative technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <NavLink to="/contact">
                  Start Your Journey
                  <ExternalLink className="ml-2 h-5 w-5" />
                </NavLink>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <NavLink to="/projects">View Our Work</NavLink>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Clients;