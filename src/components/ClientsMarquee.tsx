import React from "react";
import shoeIslandLogo from "@/assets/clients/shoe-island-logo.jpg";
import mochitesLogo from "@/assets/clients/mochites-logo.jpg";
import bodyGloveLogo from "@/assets/clients/bodyglove-logo.jpg";
import indiaKartLogo from "@/assets/clients/indiakart-logo.jpg";
import shopEaseLogo from "@/assets/clients/shopease-logo.jpg";
import techBazarLogo from "@/assets/clients/techbazar-logo.jpg";
import quickSellLogo from "@/assets/clients/quicksell-logo.jpg";
import dataFlowLogo from "@/assets/clients/dataflow-logo.jpg";

const ClientsMarquee = () => {
  const clients = [
    { name: "Shoe Island", logo: shoeIslandLogo },
    { name: "Mochites", logo: mochitesLogo },
    { name: "BodyGlove", logo: bodyGloveLogo },
    { name: "IndiaKart", logo: indiaKartLogo },
    { name: "ShopEase", logo: shopEaseLogo },
    { name: "TechBazar", logo: techBazarLogo },
    { name: "QuickSell", logo: quickSellLogo },
    { name: "DataFlow", logo: dataFlowLogo },
  ];

  // Duplicate the clients array to create seamless loop
  const duplicatedClients = [...clients, ...clients];

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
          <div className="flex animate-marquee space-x-16">
            {duplicatedClients.map((client, index) => (
              <div key={index} className="flex-shrink-0 w-32 h-32 bg-background rounded-xl shadow-card hover:shadow-glow transition-all duration-300 p-4 flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="w-20 h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsMarquee;