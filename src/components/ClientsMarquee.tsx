import React, { useState } from "react";
import { Star } from "lucide-react";
import shoeIslandLogo from "@/assets/clients/shoe-island-logo.jpg";
import mochitesLogo from "@/assets/clients/mochites-logo.jpg";
import bodyGloveLogo from "@/assets/clients/bodyglove-logo.jpg";
import indiaKartLogo from "@/assets/clients/indiakart-logo.jpg";
import shopEaseLogo from "@/assets/clients/shopease-logo.jpg";
import techBazarLogo from "@/assets/clients/techbazar-logo.jpg";
import quickSellLogo from "@/assets/clients/quicksell-logo.jpg";
import dataFlowLogo from "@/assets/clients/dataflow-logo.jpg";

// Client data with project details
interface ClientData {
  name: string;
  logo: string;
  bgColor: string;
  description: string;
  rating: number;
  deliveryTime: string;
}

const ClientsMarquee = () => {
  const [hoveredClient, setHoveredClient] = useState<number | null>(null);

  const clients: ClientData[] = [
    {
      name: "Shoe Island",
      logo: shoeIslandLogo,
      bgColor: "bg-white",
      description: "E-commerce automation that scaled revenue to ₹10+ Crores",
      rating: 5.0,
      deliveryTime: "5 days"
    },
    {
      name: "Mochites",
      logo: mochitesLogo,
      bgColor: "bg-white",
      description: "AI-powered inventory system with 98% accuracy",
      rating: 4.8,
      deliveryTime: "4 days"
    },
    {
      name: "BodyGlove",
      logo: bodyGloveLogo,
      bgColor: "bg-white",
      description: "Custom analytics dashboard with real-time insights",
      rating: 4.7,
      deliveryTime: "6 days"
    },
    {
      name: "IndiaKart",
      logo: indiaKartLogo,
      bgColor: "bg-white",
      description: "Multi-platform integration reducing manual work by 80%",
      rating: 5.0,
      deliveryTime: "3 days"
    },
    {
      name: "ShopEase",
      logo: shopEaseLogo,
      bgColor: "bg-white",
      description: "Order processing automation handling 10K+ orders",
      rating: 4.8,
      deliveryTime: "7 days"
    },
    {
      name: "TechBazar",
      logo: techBazarLogo,
      bgColor: "bg-white",
      description: "Smart warehouse management with 95% error reduction",
      rating: 4.6,
      deliveryTime: "5 days"
    },
    {
      name: "QuickSell",
      logo: quickSellLogo,
      bgColor: "bg-white",
      description: "AI chatbot increasing customer satisfaction by 60%",
      rating: 5.0,
      deliveryTime: "4 days"
    },
    {
      name: "Asian",
      logo: dataFlowLogo,
      bgColor: "bg-white",
      description: "Business intelligence platform with predictive analytics",
      rating: 4.8,
      deliveryTime: "6 days"
    },
  ];

  // Triple the clients array for seamless infinite loop
  const infiniteClients = [...clients, ...clients, ...clients];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've helped businesses across various industries achieve their digital transformation goals
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className={`flex space-x-8 ${hoveredClient !== null ? 'animate-marquee-paused' : 'animate-marquee-infinite'}`}>
            {infiniteClients.map((client, index) => (
              <div
                key={index}
                className={`flex-shrink-0 relative transition-all duration-500 ${
                  hoveredClient === index
                    ? 'w-80 h-48 z-10'
                    : 'w-32 h-32'
                }`}
                onMouseEnter={() => setHoveredClient(index)}
                onMouseLeave={() => setHoveredClient(null)}
              >
                <div className={`${client.bgColor} rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 p-4 flex flex-col items-center justify-center h-full relative overflow-hidden border border-gray-100`}>
                  {/* Subtle background pattern for white tiles */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-transparent"></div>
                  </div>

                  {/* Logo */}
                  <div className={`relative z-10 transition-all duration-500 ${
                    hoveredClient === index ? 'mb-3' : ''
                  }`}>
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className={`object-contain transition-all duration-500 ${
                        hoveredClient === index
                          ? 'w-16 h-16'
                          : 'w-20 h-20'
                      }`}
                    />
                  </div>

                  {/* Expanded Details */}
                  {hoveredClient === index && (
                    <div className="relative z-10 text-center text-gray-800 animate-fade-in">
                      <h3 className="font-bold text-lg mb-2 text-gray-900">{client.name}</h3>
                      <p className="text-sm mb-3 text-gray-700 leading-relaxed">
                        {client.description}
                      </p>

                      <div className="flex items-center justify-center space-x-4 text-xs">
                        {/* Rating */}
                        <div className="flex items-center space-x-1">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < Math.floor(client.rating)
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="font-medium text-gray-900">{client.rating}</span>
                        </div>

                        {/* Delivery Time */}
                        <div className="flex items-center space-x-1">
                          <span className="text-gray-600">Delivered in</span>
                          <span className="font-medium text-gray-900">{client.deliveryTime}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsMarquee;