import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Github,
  Linkedin,
  Send,
  Clock
} from "lucide-react";

// Form data interface
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  project: string;
  message: string;
}

const Contact = () => {
  // Form state management
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Format data for WhatsApp message
  const formatWhatsAppMessage = (data: FormData): string => {
    const message = `*New Contact Form Submission*

*Name:* ${data.firstName} ${data.lastName}
*Email:* ${data.email}
*Phone:* ${data.phone || 'Not provided'}
*Project Type:* ${data.project}

*Message:*
${data.message}

---
Sent via Uppal Corporation website contact form`;

    return encodeURIComponent(message);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.project || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }

    // Format message for WhatsApp
    const whatsappMessage = formatWhatsAppMessage(formData);
    const whatsappUrl = `https://wa.me/9818058919?text=${whatsappMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');

    // Optional: Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      project: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "C-2/342 FF, Janak Puri, New Delhi - 110058",
      action: null
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 9818058919",
      action: "tel:+919818058919"
    },
    {
      icon: Mail,
      title: "Email",
      content: "karanu93@gmail.com",
      action: "mailto:karanu93@gmail.com"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "Chat with us instantly",
      action: "https://wa.me/9818058919"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/killswitch74",
      icon: Github,
      color: "bg-gray-800 hover:bg-gray-700"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/karan-uppal-a12718165/",
      icon: Linkedin,
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/9818058919",
      icon: MessageCircle,
      color: "bg-green-600 hover:bg-green-700"
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
                Get In{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Ready to transform your business with AI and automation? Let's discuss your project.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                      <info.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    {info.action ? (
                      <a
                        href={info.action}
                        target={info.action.startsWith('http') ? '_blank' : undefined}
                        rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">
                        {info.content}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">
                    Send us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and it will open WhatsApp with your message ready to send. We'll respond within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          placeholder="John"
                          className="mt-1"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          placeholder="Doe"
                          className="mt-1"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        className="mt-1"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 9876543210"
                        className="mt-1"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="project">Project Type *</Label>
                      <select
                        id="project"
                        name="project"
                        className="mt-1 w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        value={formData.project}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select a project type</option>
                        <option value="Web Development">Web Development</option>
                        <option value="AI & Automation">AI & Automation</option>
                        <option value="E-commerce Solutions">E-commerce Solutions</option>
                        <option value="Data Analytics">Data Analytics</option>
                        <option value="Consulting">Consulting</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project requirements, timeline, budget, and any specific features you need..."
                        className="mt-1 min-h-[120px]"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Send via WhatsApp
                      <MessageCircle className="ml-2 h-5 w-5" />
                    </Button>

                    <p className="text-sm text-muted-foreground text-center mt-2">
                      * Required fields. Clicking "Send via WhatsApp" will open WhatsApp with your message pre-filled.
                    </p>
                  </form>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <div className="space-y-8">
                {/* Business Hours */}
                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground flex items-center">
                      <Clock className="h-5 w-5 mr-2" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monday - Friday</span>
                        <span className="text-foreground">9:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Saturday</span>
                        <span className="text-foreground">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sunday</span>
                        <span className="text-foreground">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Links */}
                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">
                      Connect With Us
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Follow us on social media for updates and insights
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col space-y-3">
                      {socialLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center px-4 py-3 rounded-md text-white transition-colors ${link.color}`}
                        >
                          <link.icon className="h-5 w-5 mr-3" />
                          <span>Follow on {link.name}</span>
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Response */}
                <Card className="border-0 shadow-card">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Need Quick Help?
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      For immediate assistance, reach out via WhatsApp
                    </p>
                    <Button variant="tech" size="lg" className="w-full" asChild>
                      <a
                        href="https://wa.me/9818058919"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;