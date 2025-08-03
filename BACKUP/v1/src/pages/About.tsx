import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Target, Zap } from "lucide-react";
import { NavLink } from "react-router-dom";

const About = () => {
  const stats = [
    { number: "5+", label: "Years Experience", icon: Award },
    { number: "50+", label: "Projects Completed", icon: Target },
    { number: "30+", label: "Happy Clients", icon: Users },
    { number: "99%", label: "Success Rate", icon: Zap }
  ];

  const achievements = [
    {
      title: "Shoe Island Success",
      description: "Transformed an offline footwear business into a thriving online brand achieving ₹10 Crores annual turnover",
      year: "2014-Present"
    },
    {
      title: "AI Innovation Leader",
      description: "Pioneered AI-powered automation solutions that operate autonomously for years without human intervention",
      year: "2020-Present"
    },
    {
      title: "E-commerce Specialist",
      description: "Expertise across major platforms: Flipkart, Amazon, Myntra, Ajio, and more",
      year: "2014-Present"
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
                About{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Karan Uppal
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Founder & CEO of Uppal Corporation
              </p>
              <div className="bg-gradient-hero rounded-xl p-8 border border-border">
                <blockquote className="text-lg font-medium text-foreground italic">
                  "Take the best that exists and make it better. When it does not exist, DESIGN it."
                </blockquote>
                <p className="text-muted-foreground mt-4">
                  This isn't just a quote - it's wired into how I think, build, and solve. 
                  It guides every decision, every solution, every system I engineer.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="border-0 shadow-card text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                      <stat.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
                My Journey
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  I'm a full-stack developer, AI automation engineer, and startup-driven technologist 
                  who thrives on building secure, scalable, and self-sufficient digital tools that 
                  deliver real, measurable business value.
                </p>
                <p className="mb-6">
                  My sweet spot lies at the intersection of software engineering, AI, and entrepreneurial 
                  thinking — creating powerful solutions that eliminate inefficiency and drive growth 
                  from the ground up.
                </p>
                <p className="mb-6">
                  Over the years, I've led the development of tools that power automation at scale — 
                  especially in e-commerce and fast-moving business environments. I've consistently 
                  delivered systems that not only reduce operational burden but also unlock new levels 
                  of productivity and insight.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
              Key Achievements
            </h2>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-0 shadow-card">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl text-foreground">
                        {achievement.title}
                      </CardTitle>
                      <span className="text-sm text-primary font-medium">
                        {achievement.year}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Skills */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Education</h2>
                <Card className="border-0 shadow-card">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          Bachelor of Technology - Information Technology
                        </h3>
                        <p className="text-muted-foreground">
                          YMCA University of Science & Technology (2011-2015)
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">
                          Post Graduate Diploma - International Business Operations
                        </h3>
                        <p className="text-muted-foreground">
                          Indira Gandhi National Open University (2020-2021)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Core Skills</h2>
                <Card className="border-0 shadow-card">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          Technical Expertise
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Full-Stack Development",
                            "AI/RPA Automation",
                            "Cloud Integration",
                            "Data Analytics",
                            "E-commerce Platforms",
                            "Prompt Engineering"
                          ].map((skill) => (
                            <span key={skill} className="px-3 py-1 bg-gradient-primary text-primary-foreground text-sm rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          Business Skills
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Leadership",
                            "Project Management",
                            "Strategic Planning",
                            "Problem Solving",
                            "Communication",
                            "Innovation"
                          ].map((skill) => (
                            <span key={skill} className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
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
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can transform your business with cutting-edge technology
            </p>
            <Button variant="hero" size="xl" asChild>
              <NavLink to="/contact">
                Get In Touch
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

export default About;