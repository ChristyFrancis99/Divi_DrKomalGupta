import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import type React from "react";


const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "+91 98701 89389",
    subtext: "Mon-Sat 10am-12pm and 4pm-9pm Sun: Closed",
    href: "tel:+1234567890",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@healthcare.com",
    subtext: "We reply within 24 hours",
    href: "mailto:info@healthcare.com",
  },
  {
    icon: MapPin,
    title: "Address",
    content: "Shop A-1, Mathuradas Road, Anand Nagar, Bohra Colony, Dhanukarwadi",
    subtext: "Kandivali West, Mumbai, Maharashtra 400067",
    href: "#",
  },
  {
    icon: Clock,
    title: "Hours",
    content: "Morning: 10 AM-12 PM and Evening: 4 PM-9 PM ",
    subtext: "Sunday: Closed",
    href: "#",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Appointment request submitted! We'll contact you shortly.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-teal-600 text-primary-foreground section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-primary-foreground/80 font-medium mb-4">Contact Us</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Book Your Appointment
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Ready to take the next step in your healthcare journey? Schedule an appointment with our team of dedicated medical professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.href}
                className="text-center p-6 rounded-xl hover:bg-secondary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                <p className="text-foreground">{info.content}</p>
                <p className="text-sm text-muted-foreground">{info.subtext}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Request an Appointment
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will contact you to confirm your appointment.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(123) 456-7890"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Needed</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    aria-label="Service Needed"
                    className="w-full h-10 px-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a service</option>
                    <option value="primary-care">Primary Care</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="mental-health">Mental Health</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="orthopedics">Orthopedics</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your healthcare needs or preferred appointment times..."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit Request
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Info & Map */}
            <div>
              <div className="bg-secondary/30 rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  What to Expect
                </h3>
                <ul className="space-y-4">
                  {[
                    "Our team will contact you within 24 hours to confirm your appointment",
                    "Bring your insurance card and photo ID to your visit",
                    "Arrive 15 minutes early to complete any necessary paperwork",
                    "We accept most major insurance plans",
                  ].map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-2xl overflow-hidden h-80 bg-secondary">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0968173775764!2d-122.41941548468198!3d37.77492997975892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1635959481000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HealthCare Medical Center Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-8 bg-destructive/10 border-t border-destructive/20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                Medical Emergency?
              </h3>
              <p className="text-muted-foreground">
                If you're experiencing a medical emergency, call 911 or go to your nearest emergency room.
              </p>
            </div>
            <a
              href="tel:911"
              className="inline-flex items-center gap-2 bg-destructive text-destructive-foreground px-6 py-3 rounded-xl font-semibold hover:bg-destructive/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call 911
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
