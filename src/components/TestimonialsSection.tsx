import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

// Import client logos
import shoeIslandLogo from "@/assets/clients/shoe-island-logo.jpg";
import mochitesLogo from "@/assets/clients/mochites-logo.jpg";
import bodyGloveLogo from "@/assets/clients/bodyglove-logo.jpg";
import indiaKartLogo from "@/assets/clients/indiakart-logo.jpg";
import shopEaseLogo from "@/assets/clients/shopease-logo.jpg";
import techBazarLogo from "@/assets/clients/techbazar-logo.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "CEO",
      company: "Shoe Island",
      logo: shoeIslandLogo,
      rating: 5,
      testimonial: "Karan transformed our offline footwear business into a ₹10+ Crore online empire. His AI automation systems handle everything from inventory to customer service - it's like having a team of 20 people working 24/7.",
      results: "10x Revenue Growth"
    },
    {
      name: "Priya Sharma",
      position: "Operations Director",
      company: "TechBazar",
      logo: techBazarLogo,
      rating: 5,
      testimonial: "The inventory management system Karan built for us eliminated 95% of our stock discrepancies. What used to take our team 8 hours daily now happens automatically with 99% accuracy.",
      results: "95% Error Reduction"
    },
    {
      name: "Amit Patel",
      position: "Founder",
      company: "ShopEase",
      logo: shopEaseLogo,
      rating: 5,
      testimonial: "His e-commerce automation suite scaled our operations from 100 to 10,000+ orders per month without adding a single team member. The ROI was visible within the first month itself.",
      results: "100x Order Scaling"
    },
    {
      name: "Sarah Johnson",
      position: "CTO",
      company: "BodyGlove",
      logo: bodyGloveLogo,
      rating: 5,
      testimonial: "Karan's AI-powered analytics platform gives us insights we never knew we needed. Our decision-making speed improved by 60% and we're now ahead of market trends consistently.",
      results: "60% Faster Decisions"
    },
    {
      name: "Vikram Singh",
      position: "Managing Director",
      company: "IndiaKart",
      logo: indiaKartLogo,
      rating: 5,
      testimonial: "The custom SaaS platform he developed became the backbone of our entire operation. It's been running flawlessly for 2+ years, handling millions of transactions without a single major issue.",
      results: "99.9% Uptime"
    },
    {
      name: "Neha Gupta",
      position: "Head of Operations",
      company: "Mochites",
      logo: mochitesLogo,
      rating: 5,
      testimonial: "Working with Karan was a game-changer. His automation solutions reduced our operational costs by 70% while improving service quality. The systems practically run themselves now.",
      results: "70% Cost Reduction"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Our Clients{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Say
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from businesses that transformed their operations with our AI automation and development solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="h-8 w-8 text-primary/30" />
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 italic leading-relaxed">
                  "{testimonial.testimonial}"
                </p>

                {/* Results Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                    {testimonial.results}
                  </span>
                </div>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                    <img
                      src={testimonial.logo}
                      alt={`${testimonial.company} logo`}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {testimonial.position}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">30+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
