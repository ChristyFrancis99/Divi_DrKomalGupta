import { Link } from "react-router-dom";
import { ArrowRight, Shield, Heart, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/dr_komal.png";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-teal-600 text-primary-foreground">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16 md:py-20 lg:py-24">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-primary-foreground/80 font-medium animate-fade-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
                Welcome to HealthCare Medical Center
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
                Your Health,{" "}
                <span className="text-accent">Our Priority</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto lg:mx-0 animate-fade-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
                Experience compassionate, personalized healthcare with our team of dedicated professionals. We're here to help you live your healthiest life.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  Book Appointment
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="lg">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 animate-fade-up opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <Shield className="w-5 h-5 text-accent" />
                  <span className="text-2xl font-bold">15+</span>
                </div>
                <span className="text-sm text-primary-foreground/70">Years Experience</span>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <Users className="w-5 h-5 text-accent" />
                  <span className="text-2xl font-bold">50K+</span>
                </div>
                <span className="text-sm text-primary-foreground/70">Happy Patients</span>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <Heart className="w-5 h-5 text-accent" />
                  <span className="text-2xl font-bold">98%</span>
                </div>
                <span className="text-sm text-primary-foreground/70">Patient Satisfaction</span>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                  <Clock className="w-5 h-5 text-accent" />
                  <span className="text-2xl font-bold">24/7</span>
                </div>
                <span className="text-sm text-primary-foreground/70">Emergency Care</span>
              </div>
            </div>
          </div>

          {/* Doctor Image - Centered Round */}
          <div className="flex justify-center items-center animate-fade-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary-foreground/20 shadow-2xl">
                <img
                  src={heroImage}
                  alt="Dr. Komal R Gupta"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-accent/30 scale-110" />
              {/* Name badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card text-card-foreground rounded-full px-6 py-2 shadow-xl">
                <p className="font-semibold text-sm whitespace-nowrap">Dr. Komal Gupta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
