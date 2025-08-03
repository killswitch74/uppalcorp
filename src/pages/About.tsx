import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, Target, Zap, Calendar, TrendingUp, Lightbulb, Rocket } from "lucide-react";
import { NavLink } from "react-router-dom";

const About = () => {
  const stats = [
    { number: "5+", label: "Years Experience", icon: Award },
    { number: "50+", label: "Projects Completed", icon: Target },
    { number: "30+", label: "Happy Clients", icon: Users },
    { number: "99%", label: "Success Rate", icon: Zap }
  ];

  const journeyTimeline = [
    {
      year: "2011-2015",
      title: "The Foundation Years",
      description: "Started as a B.Tech IT student with big dreams but limited resources. Spent countless nights learning programming, often with just a basic laptop and unreliable internet.",
      icon: Lightbulb,
      type: "struggle",
      milestone: "Graduated with B.Tech in Information Technology"
    },
    {
      year: "2014",
      title: "First Breakthrough",
      description: "Took on the challenge of digitizing Shoe Island - a traditional offline footwear business. Many said it was impossible, but I saw the potential.",
      icon: Rocket,
      type: "turning-point",
      milestone: "Launched first e-commerce automation project"
    },
    {
      year: "2016-2018",
      title: "The Struggle Phase",
      description: "Faced multiple project failures, client rejections, and financial constraints. Each setback taught valuable lessons about resilience and problem-solving.",
      icon: Target,
      type: "struggle",
      milestone: "Learned from 15+ failed attempts and pivoted strategies"
    },
    {
      year: "2019",
      title: "The Turning Point",
      description: "Shoe Island crossed ₹1 Crore revenue mark. The automation systems I built were working flawlessly, proving that AI and RPA could transform traditional businesses.",
      icon: TrendingUp,
      type: "success",
      milestone: "First client achieved ₹1 Crore+ revenue through automation"
    },
    {
      year: "2020-2021",
      title: "AI Revolution Begins",
      description: "Pivoted to AI-powered solutions during the pandemic. While others struggled, I built systems that helped businesses thrive in the digital-first world.",
      icon: Award,
      type: "success",
      milestone: "Completed Post Graduate Diploma in International Business"
    },
    {
      year: "2022-2023",
      title: "Scaling Success",
      description: "Shoe Island reached ₹10+ Crores annual turnover. Multiple clients started seeing 60-90% efficiency improvements. The vision was becoming reality.",
      icon: Users,
      type: "success",
      milestone: "Scaled client business to ₹10+ Crores annually"
    },
    {
      year: "2024-Present",
      title: "Industry Leadership",
      description: "Now leading digital transformation for 30+ businesses across industries. Building AI systems that operate autonomously for years without human intervention.",
      icon: Zap,
      type: "success",
      milestone: "Serving 30+ clients with 99% success rate"
    }
  ];

  const achievements = [
    {
      title: "Shoe Island Success Story",
      description: "Transformed a traditional offline footwear business into a ₹10+ Crore digital empire through intelligent automation and strategic e-commerce integration",
      year: "2014-Present",
      impact: "10x Revenue Growth"
    },
    {
      title: "AI Automation Pioneer",
      description: "Developed AI-powered systems that operate autonomously for years, reducing operational costs by 60-90% across multiple industries",
      year: "2020-Present",
      impact: "60-90% Cost Reduction"
    },
    {
      title: "Multi-Platform E-commerce Expert",
      description: "Built comprehensive automation suites for major platforms including Flipkart, Amazon, Myntra, Ajio, and custom marketplaces",
      year: "2014-Present",
      impact: "50+ Platform Integrations"
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
                From Struggles to{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Success
                </span>
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6 text-lg leading-relaxed">
                  My journey wasn't a straight path to success. It started with a basic laptop, unreliable internet,
                  and a burning desire to solve real problems through technology. As a B.Tech student, I dreamed of
                  building systems that could transform businesses, but reality hit hard with multiple failures and rejections.
                </p>
                <p className="mb-6 text-lg leading-relaxed">
                  The turning point came when I took on Shoe Island - a traditional offline footwear business that
                  everyone said couldn't be digitized. Through countless sleepless nights and 15+ failed attempts,
                  I finally cracked the code. Today, that same business generates ₹10+ Crores annually through the
                  automation systems I built.
                </p>
                <p className="mb-6 text-lg leading-relaxed">
                  What sets me apart isn't just technical expertise - it's the entrepreneurial mindset forged through
                  real struggles. I don't just build software; I architect solutions that eliminate inefficiency,
                  reduce costs by 60-90%, and enable businesses to scale without proportional increases in operational burden.
                </p>
                <div className="bg-gradient-hero rounded-xl p-6 border border-border mt-8">
                  <p className="text-foreground font-medium text-center italic">
                    "Every line of code I write, every system I design, carries the weight of those early struggles
                    and the promise of transformation for businesses ready to embrace intelligent automation."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
                The Journey Timeline
              </h2>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>

                <div className="space-y-8">
                  {journeyTimeline.map((item, index) => (
                    <div key={index} className="relative flex items-start space-x-6">
                      {/* Timeline Dot */}
                      <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center shadow-glow ${
                        item.type === 'struggle' ? 'bg-gradient-secondary' :
                        item.type === 'turning-point' ? 'bg-gradient-primary' : 'bg-gradient-primary'
                      }`}>
                        <item.icon className="h-8 w-8 text-primary-foreground" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 pb-8">
                        <Card className="border-0 shadow-card">
                          <CardHeader>
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-xl text-foreground">
                                {item.title}
                              </CardTitle>
                              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                                {item.year}
                              </span>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground mb-3">
                              {item.description}
                            </p>
                            <div className="flex items-center text-sm font-semibold text-primary">
                              <Award className="h-4 w-4 mr-2" />
                              {item.milestone}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
              Key Achievements
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-lg text-foreground">
                        {achievement.title}
                      </CardTitle>
                    </div>
                    <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full inline-block">
                      {achievement.year}
                    </span>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {achievement.description}
                    </p>
                    <div className="flex items-center text-sm font-semibold text-primary">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      {achievement.impact}
                    </div>
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