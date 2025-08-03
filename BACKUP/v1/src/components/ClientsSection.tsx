import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const ClientsSection = () => {
  const clients = [
    {
      name: "Shoe Island",
      description: "E-commerce Platform",
      logo: "SI",
      color: "bg-gradient-primary"
    },
    {
      name: "Mochites",
      description: "Digital Solutions",
      logo: "M",
      color: "bg-gradient-secondary"
    },
    {
      name: "BodyGlove",
      description: "Fitness Technology",
      logo: "BG",
      color: "bg-gradient-primary"
    },
    {
      name: "IndiaKart",
      description: "Online Marketplace",
      logo: "IK",
      color: "bg-gradient-secondary"
    },
    {
      name: "ShopEase",
      description: "E-commerce Solutions",
      logo: "SE",
      color: "bg-gradient-primary"
    },
    {
      name: "TechBazar",
      description: "Technology Platform",
      logo: "TB",
      color: "bg-gradient-secondary"
    },
    {
      name: "QuickSell",
      description: "Sales Automation",
      logo: "QS",
      color: "bg-gradient-primary"
    },
    {
      name: "DataFlow",
      description: "Business Analytics",
      logo: "DF",
      color: "bg-gradient-secondary"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've helped businesses across various industries achieve their digital transformation goals
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${client.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow`}>
                  <span className="text-2xl font-bold text-primary-foreground">
                    {client.logo}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {client.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {client.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-lg">
            Ready to join them?{" "}
            <a href="/contact" className="text-primary font-semibold hover:underline">
              Get started today
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;