import React from "react";
import { NavLink } from "react-router-dom";
import { Github, Linkedin, MessageCircle, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Clients", path: "/clients" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Full-Stack Development",
    "AI & RPA Automation",
    "E-commerce Solutions",
    "Business Analytics",
    "Cloud Integration",
    "Custom Software Development"
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/killswitch74",
      icon: Github
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/karan-uppala12718165",
      icon: Linkedin
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/9818058919",
      icon: MessageCircle
    }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">U</span>
              </div>
              <span className="text-lg font-bold text-foreground">Uppal Corporation</span>
            </div>
            <p className="text-muted-foreground">
              Building smart, scalable solutions with AI, RPA, and full-stack development. 
              Your partner in digital transformation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">
                  C-2/342 FF, Janak Puri, New Delhi - 110058
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <a 
                  href="tel:+919818058919"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  +91 9818058919
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <a 
                  href="mailto:karanu93@gmail.com"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  karanu93@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Uppal Corporation. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm mt-2 md:mt-0">
              Designed & Developed by Karan Uppal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;