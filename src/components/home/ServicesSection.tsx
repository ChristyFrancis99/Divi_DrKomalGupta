import { Link } from "react-router-dom";
import { ArrowRight, Stethoscope, Brain, Baby, Heart, Pill, Bone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Stethoscope,
    title: "Surgical Treatment for Knee",
    description: "From traditional to minimally invasive & robotic-assisted, Divi specializes in all types of advanced knee surgeries tailored to your needs.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Heart,
    title: "Non-Surgical Treatment for Knee",
    description: "Targeted, non-invasive treatments designed to relieve knee pain and restore mobility.",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: Brain,
    title: "Surgical Treatment for Hip",
    description: "Cutting-edge hip surgeries, including total hip replacement, to enhance joint function and promote long-term hip health.",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    icon: Baby,
    title: "Non-Surgical Treatment for Hip",
    description: "Personalized, non-surgical solutions to manage hip pain for better movement and improved quality of life.",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    icon: Bone,
    title: "Surgical Treatment for Bone Trauma",
    description: "Precise trauma surgical treatments that quickly restore bone function, help you move pain-free, and ensure fast recovery.",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: Pill,
    title: "Non-Surgical Treatment for Bone Trauma",
    description: "Customized, non-invasive care to heal bone trauma and speed up rehabilitation without the need for surgery.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-semibold mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your journey towards pain-free & active life starts at Divi
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={cn(
                "group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50",
                "animate-fade-up opacity-0"
              )}
              style={{ animationDelay: `${0.1 * (index + 1)}s`, animationFillMode: "forwards" }}
            >
              <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-4", service.bgColor)}>
                <service.icon className={cn("w-7 h-7", service.color)} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <Link
                to="/services"
                className="inline-flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/services">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
